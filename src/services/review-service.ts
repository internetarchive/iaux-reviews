import { IaFetchHandler } from '@internetarchive/fetch-handler-service';

import type {
  ReviewDeletion,
  ReviewServiceInterface,
  ReviewServiceResult,
  ReviewSubmission,
} from './review-service-interface';

/**
 * The slice of a fetch handler this service uses.
 *
 * Narrow on purpose: consumers hand over whichever handler they already have, and there is more
 * than one `@internetarchive` package providing one.
 */
export type ReviewFetchHandler = {
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
};

export type ReviewServiceOptions = {
  /** Handles retries and, for consumers that configure it, the CSRF header */
  fetchHandler?: ReviewFetchHandler;

  /** Origin for the endpoints. Empty string keeps requests same-origin. */
  baseHost?: string;

  /** Path a review submission POSTs to */
  submitPath?: string;

  /** Path a review deletion goes to */
  deletePath?: string;

  /** Verb the delete endpoint expects */
  deleteMethod?: 'POST' | 'DELETE';

  /**
   * CSRF token to send as `X-CSRF-Token`.
   *
   * Consumers whose fetch handler already attaches the header leave this unset.
   */
  csrfToken?: string;
};

/** The endpoints the legacy details page serves */
const LEGACY_SUBMIT_PATH = '/write-review.php';
const LEGACY_DELETE_PATH = '/edit-reviews.php';

const GENERIC_ERROR = 'Sorry, something went wrong. Please try again later.';

/**
 * Talks to the archive.org review endpoints.
 *
 * Both operations send the CSRF token as an `X-CSRF-Token` header. Submission also repeats it in
 * the `field_reviewtoken` body field, which is what the legacy `write-review.php` form post uses.
 */
export class ReviewService implements ReviewServiceInterface {
  private fetchHandler: ReviewFetchHandler;

  private baseHost: string;

  private submitPath: string;

  private deletePath: string;

  private deleteMethod: 'POST' | 'DELETE';

  private csrfToken?: string;

  constructor(options?: ReviewServiceOptions) {
    this.fetchHandler = options?.fetchHandler ?? new IaFetchHandler();
    this.baseHost = options?.baseHost ?? 'https://archive.org';
    this.submitPath = options?.submitPath ?? LEGACY_SUBMIT_PATH;
    this.deletePath = options?.deletePath ?? LEGACY_DELETE_PATH;
    this.deleteMethod = options?.deleteMethod ?? 'POST';
    this.csrfToken = options?.csrfToken;
  }

  /** @inheritdoc */
  async submitReview(
    submission: ReviewSubmission,
  ): Promise<ReviewServiceResult> {
    const body = new URLSearchParams();
    body.append('identifier', submission.identifier);
    body.append('field_reviewtitle', submission.title);
    body.append('field_reviewbody', submission.body);
    body.append('field_stars', submission.stars ?? '0');

    if (submission.recaptchaToken) {
      body.append('g-recaptcha-response', submission.recaptchaToken);
    }

    // tells write-review.php the post came from the form rather than a direct visit
    body.append('submitter', 'review-form');

    // the legacy endpoint reads the token from this field when there's no header
    if (this.csrfToken) body.append('field_reviewtoken', this.csrfToken);

    return this.request(`${this.baseHost}${this.submitPath}`, {
      method: 'POST',
      body,
    });
  }

  /** @inheritdoc */
  async deleteReview(deletion: ReviewDeletion): Promise<ReviewServiceResult> {
    const params = new URLSearchParams();
    params.append('identifier', deletion.identifier);
    params.append('deleteReviewer', deletion.reviewer);
    if (deletion.reviewerItemname) {
      params.append('deleteReviewerItemname', deletion.reviewerItemname);
    }

    const url = `${this.baseHost}${this.deletePath}?${params.toString()}`;

    return this.request(url, { method: this.deleteMethod });
  }

  /**
   * Sends a credentialed request and reads the `{ success, error }` result out of it.
   */
  private async request(
    url: string,
    init: { method: string; body?: BodyInit },
  ): Promise<ReviewServiceResult> {
    const headers: Record<string, string> = {};
    if (this.csrfToken) headers['X-CSRF-Token'] = this.csrfToken;

    try {
      const response = await this.fetchHandler.fetch(url, {
        method: init.method,
        body: init.body,
        credentials: 'include',
        headers,
      });

      return await this.parseResult(response);
    } catch (e) {
      console.error('Review request failed', e);
      return { success: false, error: GENERIC_ERROR };
    }
  }

  /**
   * Reads a result out of a response.
   *
   * The status decides the outcome, so a rejected request can't read as a success. A JSON body
   * supplies the patron-facing message; the legacy delete endpoint answers with an HTML page
   * instead, and there the status is all there is to go on.
   */
  private async parseResult(response: Response): Promise<ReviewServiceResult> {
    let payload: ReviewServiceResult | undefined;
    try {
      payload = (await response.json()) as ReviewServiceResult;
    } catch {
      payload = undefined;
    }

    if (!response.ok) {
      return { success: false, error: payload?.error ?? GENERIC_ERROR };
    }

    if (!payload) return { success: true };

    if (payload.success) return { success: true };

    return { success: false, error: payload.error ?? GENERIC_ERROR };
  }
}
