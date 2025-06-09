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

import addIcon from './assets/add-icon';
import reviewsIcon from './assets/reviews-icon';

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
  @property({ type: Array }) reviews?: Review[] = [];

  /* Whether reviews are disabled for the item */
  @property({ type: Boolean }) reviewsDisabled = false;

  /* Whether reviews are frozen for the item */
  @property({ type: Boolean }) reviewsFrozen = false;

  /* Whether the person viewing the reviews section has the power to delete reviews */
  @property({ type: Boolean }) canDelete = false;

  /* Whether we should bypass the show/hide and more/less toggles */
  @property({ type: Boolean }) displayReviewsByDefault = false;

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
  private displayReviewForm: boolean = false;

  /* Whether to display the existing reviews */
  @state()
  private displayReviews: boolean = false;

  /* The current version of the review */
  @state()
  private currentReview?: Review;

  /* Whether recaptcha has been activated (by clicking the add/edit button) */
  @state()
  private recaptchaActivated: boolean = false;

  render() {
    return html`
      <span class="left-icon">${reviewsIcon}</span>
      <div class="reviews">
        ${this.reviewsTitleTemplate} ${this.reviewsListTemplate}
      </div>
    `;
  }

  protected updated(changed: PropertyValues): void {
    if (changed.has('reviews') || changed.has('submitterItemname')) {
      if (this.reviews && this.submitterItemname) this.splitOffPatronsReview();
      if (!this.reviews) this.currentReview = undefined;
    }

    if (
      changed.has('displayReviewsByDefault') &&
      this.displayReviewsByDefault
    ) {
      this.displayReviews = true;
    }
  }

  /* Title for the reviews section, including the add/edit review button */
  private get reviewsTitleTemplate(): HTMLTemplateResult {
    return html`
      <div class="reviews-title">
        <h2>
          ${reviewsIcon}
          ${msg(
            `Reviews ${!this.reviewsDisabled && this.reviewsCount > 0 ? `(${this.reviewsCount})` : ''}`,
          )}
        </h2>
        ${!this.reviewsDisabled && !this.reviewsFrozen
          ? html`<button class="add-edit-btn" @click=${this.addEditReview}>
              ${addIcon}
              ${msg(this.currentReview ? 'Edit My Review' : 'Add Review')}
            </button>`
          : nothing}
      </div>
    `;
  }

  /* Renders the reviews list, including the editable current review, or a message if applicable */
  private get reviewsListTemplate(): HTMLTemplateResult {
    if (this.reviewsDisabled)
      return html`<div class="message">
        ${msg('Reviews have been disabled for this item.')}
      </div>`;

    if (this.reviewsCount === 0 && !this.displayReviewForm)
      return this.noReviewsMsgTemplate;

    if (!this.displayReviews) return this.displayReviewsMsgTemplate;

    return html`
      <div class="reviews-list">
        ${this.reviewsFrozen
          ? html`<div class="message">
              ${msg('Reviews can no longer be added to this item.')}
            </div>`
          : nothing}
        ${this.editableCurrentReviewTemplate}
        ${this.reviews?.map(review =>
          review.reviewer_itemname !== this.submitterItemname
            ? this.renderReview(review)
            : nothing,
        )}
      </div>
    `;
  }

  /* Message to display instead of the reviews list if there are no reviews yet */
  private get noReviewsMsgTemplate(): HTMLTemplateResult {
    if (this.reviewsFrozen)
      return html`
        <div class="message">
          ${msg('Reviews cannot be added to this item.')}
        </div>
      `;

    return html`
      <div class="message">
        ${msg('There are no reviews yet.')}
        ${msg(html`
          Be the first one to
          <button
            class="ia-button link no-reviews-btn"
            @click=${this.addEditReview}
          >
            write a review</button
          >.
        `)}
      </div>
    `;
  }

  /* Message to display instead of the reviews list if reviews are hidden */
  private get displayReviewsMsgTemplate(): HTMLTemplateResult {
    return html`
      <div class="message">
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
            .oldReview=${this.currentReview}
            .baseHost=${this.baseHost}
            .endpointPath=${this.endpointPath}
            .submitterItemname=${this.submitterItemname}
            .submitterScreenname=${this.submitterScreenname}
            .maxSubjectLength=${this.maxSubjectLength}
            .maxBodyLength=${this.maxBodyLength}
            .token=${this.token}
            .unrecoverableError=${this.reviewSubmissionError}
            .fetchHandler=${this.fetchHandler}
            .recaptchaManager=${this.recaptchaActivated
              ? this.recaptchaManager
              : undefined}
            ?bypassRecaptcha=${this.bypassRecaptcha}
            @reviewUpdated=${this.handleReviewUpdate}
            @reviewEditCanceled=${this.handleEditCanceled}
          ></ia-review-form>`}
    </div>`;
  }

  /** Calculates the current reviews count */
  private get reviewsCount(): number {
    return (this.reviews?.length ?? 0) + (this.currentReview ? 1 : 0);
  }

  /** Splits the patron's own review out of the reviews array */
  private splitOffPatronsReview(): void {
    if (!this.reviews || !this.submitterItemname) return;

    let patronsOwnReview: Review | null = null;
    const filteredReviews: Review[] = [];

    this.reviews.forEach(review => {
      if (
        !patronsOwnReview &&
        review.reviewer_itemname === this.submitterItemname
      ) {
        patronsOwnReview = review;
      } else filteredReviews.push(review);
    });

    if (patronsOwnReview) {
      this.currentReview = patronsOwnReview;
      this.reviews = filteredReviews;
    }
  }

  /* Renders the given review, using the ia-review component */
  private renderReview(review?: Review): HTMLTemplateResult | typeof nothing {
    if (!review) return nothing;

    return html`<ia-review
      .review=${review}
      .identifier=${this.identifier}
      ?canDelete=${this.canDelete}
      ?bypassTruncation=${this.displayReviewsByDefault}
      .baseHost=${this.baseHost}
    ></ia-review>`;
  }

  /** Prepare the review form for adding or editing */
  private addEditReview(): void {
    if (!this.bypassRecaptcha) this.recaptchaActivated = true;
    this.displayReviews = true;
    this.displayReviewForm = true;
  }

  /** Handles successful review submission */
  private handleReviewUpdate(e: CustomEvent<Review>): void {
    this.currentReview = e.detail;
    this.displayReviewForm = false;
  }

  /** Closes the review form if requested */
  private handleEditCanceled(): void {
    this.displayReviewForm = false;

    // Display no-reviews message again if no new review was added
    if (this.reviewsCount === 0) {
      this.displayReviews = false;
    }
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
          display: flex;
          flex-direction: row;
          gap: 2rem;
          align-items: flex-start;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
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
        }

        .message {
          font-weight: 200;
        }

        .message .ia-button {
          display: inline;
          vertical-align: baseline;
          padding: 0;
          font-weight: 600;
        }

        .reviews-title {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid #979797;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }

        .reviews-title .reviews-icon {
          vertical-align: bottom;
          display: none;
        }

        .reviews-icon {
          width: 3.5rem;
          padding-top: 0.5rem;
        }

        .reviews {
          flex-grow: 1;
        }

        .reviews-title h2 {
          font-size: 3rem;
          font-weight: 500;
          margin: 0;
        }

        .add-edit-btn {
          all: unset;
          font-weight: 500;
        }

        .add-edit-btn:hover {
          cursor: pointer;
        }

        .add-icon {
          width: 1.6rem;
          display: inline-block;
          vertical-align: bottom;
        }

        @media only screen and (max-width: 767px) {
          .left-icon {
            display: none;
          }

          .reviews-title .reviews-icon {
            display: inline;
          }
        }
      `,
    ];
  }
}
