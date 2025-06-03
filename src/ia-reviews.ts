import {
  css,
  CSSResultGroup,
  html,
  HTMLTemplateResult,
  LitElement,
  nothing,
  PropertyValues,
} from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { msg } from '@lit/localize';

import type { Review } from '@internetarchive/metadata-service';
import type { RecaptchaManagerInterface } from '@internetarchive/recaptcha-manager';
import {
  FetchHandlerInterface,
  IaFetchHandler,
} from '@internetarchive/fetch-handler-service';
import { iaButtonStyles } from '@internetarchive/ia-styles';

import './review';
import './review-form';

/**
 * Renders the full IA reviews piece
 */
@customElement('ia-reviews')
export class IaReviews extends LitElement {
  /** GLOBAL/REVIEW-RENDERING PROPERTIES */
  /* The identifier for the item being reviewed */
  @property({ type: String }) identifier?: string;

  /* The list of reviews to be rendered */
  @property({ type: Array }) reviews?: Review[];

  /* One's own review, if applicable */
  @property({ type: Object }) ownReview?: Review;

  /* Whether the person viewing the reviews section has the power to delete reviews */
  @property({ type: Boolean }) canDelete = false;

  /* Maximum allowable length for subject */
  @property({ type: Number }) maxSubjectLength?: number;

  /* Maximum allowable length for body */
  @property({ type: Number }) maxBodyLength?: number;

  /* Base for URLs */
  @property({ type: String }) baseHost = 'https://archive.org';

  /** REVIEW FORM PROPERTIES */
  /* The token for the review edit */
  @property({ type: String }) token: string = '';

  /* The path for the endpoint we're submitting to */
  @property({ type: String }) endpointPath: string = '/write-review.php';

  /** Form submitter's screenname, if applicable */
  @property({ type: String }) submitterScreenname: string = 'Anonymous';

  /** Form submitter's itemname, if applicable */
  @property({ type: String }) submitterItemname?: string;

  /* Service for activating the recaptcha challenge */
  @property({ type: Object }) recaptchaManager?: RecaptchaManagerInterface;

  /* Optionally avoid using recaptcha for the form */
  @property({ type: Boolean }) bypassRecaptcha: boolean = false;

  /* An optional error message to be displayed instead of the review form */
  @property({ type: String }) reviewSubmissionError?: string;

  /* An optional handler for form submission to pass along to the form */
  @property({ type: Object }) fetchHandler: FetchHandlerInterface =
    new IaFetchHandler();

  /* Whether to display the review form or the editable review */
  @state()
  displayReviewForm: boolean = false;

  /* Whether to display the existing reviews */
  @state()
  displayReviews: boolean = false;

  /* The current version of the review */
  @state()
  currentReview?: Review;

  /* The current review count */
  @state()
  reviewsCount: number = 0;

  render() {
    return html`
      <h2>
        ${msg(
          `Reviews ${this.reviewsCount > 0 ? `(${this.reviewsCount})` : ''}`,
        )}
      </h2>
      <button class="add-edit-btn" @click=${this.addEditReview}>
        ${msg(this.currentReview ? 'Edit My Review' : 'Add Review')}
      </button>
      ${this.reviewsListTemplate}
    `;
  }

  protected updated(changed: PropertyValues): void {
    if (changed.has('ownReview')) {
      this.currentReview = this.ownReview;
      this.updateReviewsCount();
    }

    if (changed.has('reviews')) {
      this.updateReviewsCount();
    }
  }

  /* Renders the reviews list, including the editable current review, if applicable */
  private get reviewsListTemplate(): HTMLTemplateResult | typeof nothing {
    if (!this.displayReviews) return this.displayReviewsMsgTemplate;

    return html`${this.editableCurrentReviewTemplate}${this.reviews
      ? this.reviews.map(review => this.renderReview(review))
      : nothing}`;
  }

  /* Renders the message to display instead of the reviews list */
  private get displayReviewsMsgTemplate(): HTMLTemplateResult {
    return html`
      <div class="display-reviews-msg">
        ${this.reviewsCount === 1
          ? msg('There is 1 review for this item.')
          : msg(`There are ${this.reviewsCount} reviews for this item.`)}
        <button
          class="ia-button link display-reviews-btn"
          @click=${() => (this.displayReviews = true)}
        >
          ${msg(`Display ${this.reviewsCount === 1 ? 'review' : 'reviews'}`)}</button
        >.
      </div>
    `;
  }

  /**
   * Renders the review form, passing along all necessary properties; this will also render
   * the patron's own review if applicable and/or following submission.
   */
  private get editableCurrentReviewTemplate():
    | HTMLTemplateResult
    | typeof nothing {
    if (!this.displayReviewForm && !this.currentReview) return nothing;

    return html`<div class="own-review-container">
      ${!this.displayReviewForm
        ? this.renderReview(this.currentReview)
        : html`<ia-review-form
            .identifier=${this.identifier}
            .oldReview=${this.ownReview}
            .baseHost=${this.baseHost}
            .endpointPath=${this.endpointPath}
            .submitterItemname=${this.submitterItemname}
            .submitterScreenname=${this.submitterScreenname}
            .maxSubjectLength=${this.maxSubjectLength}
            .maxBodyLength=${this.maxBodyLength}
            .token=${this.token}
            .unrecoverableError=${this.reviewSubmissionError}
            .fetchHandler=${this.fetchHandler}
            ?bypassRecaptcha=${this.bypassRecaptcha}
            @reviewUpdated=${this.handleReviewUpdate}
            @reviewEditCanceled=${this.handleEditCanceled}
          ></ia-review-form>`}
    </div>`;
  }

  /** Updates the review count */
  private updateReviewsCount(): void {
    this.reviewsCount =
      (this.reviews?.length ?? 0) + (this.currentReview ? 1 : 0);
  }

  /* Renders the given review, using the ia-review component */
  private renderReview(review?: Review): HTMLTemplateResult | typeof nothing {
    if (!review) return nothing;

    return html`<ia-review
      .review=${review}
      .identifier=${this.identifier}
      ?canDelete=${this.canDelete}
      .baseHost=${this.baseHost}
    ></ia-review>`;
  }

  /** Prepare the review form for adding or editing */
  private addEditReview(): void {
    this.displayReviews = true;
    this.displayReviewForm = true;
  }

  /** Handles successful review submission */
  private handleReviewUpdate(e: CustomEvent<Review>): void {
    // Update the reviews count to reflect new review, if applicable
    if (!this.ownReview) {
      this.reviewsCount = this.reviewsCount + 1;
    }

    this.currentReview = e.detail;
    this.displayReviewForm = false;
  }

  /** Closes the review form if requested */
  private handleEditCanceled(): void {
    this.displayReviewForm = false;
  }

  static get styles(): CSSResultGroup {
    return [
      iaButtonStyles,
      css`
        :host {
          font-family: var(
            --ia-font-stack,
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif
          );

          color: var(--ia-text-color, #2c2c2c);
        }

        .own-review-container {
          --error-color: var(--container-error-color, #ea0202);
          --link-color: var(--container-link-color, #4f65f5);
          --container-error-color: #ea0202;
          --container-link-color: #4f65f5;
          --container-bg-color: #fbfbfd;
          --container-border-color: #999999;

          border: 2px solid var(--container-border-color, #999999);
          border-radius: 5px;
          background-color: var(--container-bg-color, #fbfbfd);
          padding: 10px;
          margin-bottom: 20px;
        }

        .display-reviews-msg {
          font-weight: 200;
        }

        .ia-button.display-reviews-btn {
          display: inline;
          vertical-align: baseline;
          padding: 0;
          font-weight: 600;
        }
      `,
    ];
  }
}
