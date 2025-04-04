import {
  html,
  css,
  LitElement,
  nothing,
  HTMLTemplateResult,
  PropertyValues,
  CSSResultGroup,
} from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
import { msg } from '@lit/localize';

import starSelected from './assets/star-selected';
import starUnselected from './assets/star-unselected';

import { iaButtonStyles } from '@internetarchive/ia-styles';
import type { Review } from '@internetarchive/metadata-service';
import type {
  RecaptchaManagerInterface,
  RecaptchaWidgetInterface,
} from '@internetarchive/recaptcha-manager';
import '@internetarchive/ia-activity-indicator';

/**
 * Renders a form to edit a given IA review.
 */
@customElement('ia-review-form')
export class ReviewForm extends LitElement {
  /* The IA item being reviewed */
  @property({ type: String }) identifier?: string;

  /* The token for the review edit */
  @property({ type: String }) token: string = '';

  /* The host for archive endpoints and data */
  @property({ type: String }) baseHost: string = 'https://archive.org';

  /* The path for the endpoint we're submitting to */
  @property({ type: String }) endpointPath: string = '/write-review.php';

  /* The previous review to pre-fill, if any */
  @property({ type: Object }) oldReview?: Review;

  /* Optional max length for review subject */
  @property({ type: Number }) maxSubjectLength?: number;

  /* Optional max length for review body */
  @property({ type: Number }) maxBodyLength?: number;

  /* Service for activating the recaptcha challenge */
  @property({ type: Object }) recaptchaManager?: RecaptchaManagerInterface;

  /* Optionally avoid using recaptcha for the form */
  @property({ type: Boolean }) bypassRecaptcha: boolean = false;

  /* Optional recoverable error for the form */
  @state()
  recoverableError?: 'spam' | 'misc';

  /* Optional unrecoverable error for the form */
  @state()
  unrecoverableError?:
    | 'not-logged-in'
    | 'rate-limit'
    | 'validation-setup-failed';

  /* Display mode for the component. Defaults to showing the form. */
  @state()
  displayMode: 'form' | 'success' = 'form';

  /* Recaptcha widget for the form */
  private recaptchaWidget?: RecaptchaWidgetInterface;

  /* Number of stars currently selected */
  @state()
  private currentStars: number = 0;

  /* Length of review subject currently filled in */
  @state()
  private currentSubjectLength: number = 0;

  /* Length of review body currently filled in */
  @state()
  private currentBodyLength: number = 0;

  /* Whether to enable the submit button */
  @state()
  private formCanSubmit: boolean = false;

  /* Whether to show a loading indicator for the form */
  @state()
  private submissionInProgress: boolean = false;

  /* The form to be submitted */
  @query('#review-form')
  private reviewForm!: HTMLFormElement;

  render() {
    return this.displayMode === 'success'
      ? html`<p class="full-page-message">
          Your review was submitted successfully. It will appear on the
          <a
            href="${this.baseHost}/details/${this.identifier}"
            class="simple-link"
            >details page</a
          >
          for the item after several minutes.
        </p>`
      : html`<form id="review-form" @submit=${this.handleSubmit}>
          ${this.unrecoverableError
            ? html`<div class="unrecoverable-error">
                <span class="error-msg"
                  >${msg(this.errorMessages[this.unrecoverableError])}</span
                >
              </div>`
            : html`<span class="inputs">
                ${this.starsInputTemplate} ${this.subjectInputTemplate}
                ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
              </span>`}
          ${this.recoverableError
            ? html`<div class="recoverable-error">
                ${msg(this.errorMessages[this.recoverableError])}
              </div>`
            : nothing}
          ${this.actionButtonsTemplate}
        </form>`;
  }

  protected updated(changed: PropertyValues): void {
    if (changed.has('oldReview') && this.oldReview) {
      if (this.oldReview.stars) this.currentStars = this.oldReview.stars;
      if (this.oldReview.reviewtitle)
        this.currentSubjectLength = this.oldReview.reviewtitle.length;
      if (this.oldReview.reviewbody)
        this.currentBodyLength = this.oldReview.reviewbody.length;
    }

    if (
      changed.has('recaptchaManager') &&
      !this.bypassRecaptcha &&
      this.recaptchaManager
    ) {
      this.setupRecaptcha();
    }

    this.formCanSubmit = this.checkSubmissionAllowed();
  }

  private get starsInputTemplate(): HTMLTemplateResult {
    return html`
      <div class="form-heading">
        <label for="stars-input">${msg('Rating (optional)')}</label>
      </div>
      <input
        type="hidden"
        name="field_stars"
        id="stars-input"
        .value=${this.currentStars.toString()}
        required
      />
      <div class="stars">
        ${[1, 2, 3, 4, 5].map(num => this.renderStar(num))}
        <button class="clear-stars-btn" @click=${this.handleClearBtnClicked}>
          ${msg('Clear')}
        </button>
      </div>
    `;
  }

  private get subjectInputTemplate(): HTMLTemplateResult {
    return html`<span class="input-box subject ${
      this.maxSubjectLength && this.currentSubjectLength > this.maxSubjectLength
        ? 'error'
        : ''
    }"
      ><div class="form-heading">
        <label for="subject-input">${msg('Subject')}</label>
        ${
          this.maxSubjectLength
            ? html`<div class="char-count subject">
                ${this.currentSubjectLength}/${this.maxSubjectLength}
              </div>`
            : nothing
        }
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="subject-input"
        .value=${this.oldReview?.reviewtitle ?? ''}
        @input=${this.handleSubjectChanged}
        required
    />${
      this.maxSubjectLength
        ? html`
            <div class="input-error">
              ${msg(
                `Subject may only have ${this.maxSubjectLength} characters`,
              )}
            </div>
          `
        : nothing
    }</div></span>`;
  }

  private get bodyInputTemplate(): HTMLTemplateResult {
    return html`<span
      class="input-box body ${this.maxBodyLength &&
      this.currentBodyLength > this.maxBodyLength
        ? 'error'
        : ''}"
      ><div class="form-heading">
        <label for="body-input">${msg('Review')}</label>
        ${this.maxBodyLength
          ? html`<div class="char-count body">
              ${this.currentBodyLength}/${this.maxBodyLength}
            </div>`
          : nothing}
      </div>
      <textarea
        name="field_reviewbody"
        id="body-input"
        .value=${this.oldReview?.reviewbody ?? ''}
        rows="10"
        cols="50"
        required
        @input=${this.handleBodyChanged}
      ></textarea>
      ${this.maxBodyLength
        ? html`
            <div class="input-error">
              ${msg(`Review may only have ${this.maxBodyLength} characters`)}
            </div>
          `
        : nothing}
    </span>`;
  }

  /* Renders all the hidden inputs we use to store other information for form submission */
  private get hiddenInputsTemplate(): HTMLTemplateResult {
    return html`<input
        type="hidden"
        name="field_reviewtoken"
        .value=${this.token}
      />
      <!-- Indicates to backend that form submission is intended -->
      <input type="hidden" name="action" value="1" />`;
  }

  private get actionButtonsTemplate(): HTMLTemplateResult {
    return html`<div class="action-btns">
      ${this.identifier
        ? html`<a
            class="ia-button dark"
            href="${this.baseHost}/details/${this.identifier}"
            data-testid="cancel-btn"
          >
            ${msg('Cancel')}
          </a>`
        : nothing}

      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        ?disabled=${!this.formCanSubmit || this.submissionInProgress}
      >
        ${this.submissionInProgress
          ? html`<span class="loading-indicator" alt="Loading indicator"
              ><ia-activity-indicator></ia-activity-indicator
            ></span>`
          : msg('Submit review')}
      </button>
    </div>`;
  }

  private renderStar(num: number): HTMLTemplateResult {
    const isSelected = num === this.currentStars;
    const ratingLabel = msg(`Rate ${num > 1 ? `${num} stars` : '1 star'}`);

    return html`
      <button
        class="star star-${num}"
        title=${isSelected ? msg('Clear rating') : ratingLabel}
        @click=${(e: Event) => this.handleStarClicked(e, num)}
      >
        ${num <= this.currentStars ? starSelected : starUnselected}
      </button>
    `;
  }

  private async setupRecaptcha(): Promise<void> {
    try {
      this.recaptchaWidget = await this.recaptchaManager?.getRecaptchaWidget();
    } catch {
      this.unrecoverableError = 'validation-setup-failed';
    }
  }

  private async handleSubmit(e: Event): Promise<void> {
    e.preventDefault();
    if (!this.formCanSubmit || this.submissionInProgress) return;
    if (!this.reviewForm.reportValidity()) return;

    // Clear temporary errors and show loading indicator
    this.recoverableError = undefined;
    this.submissionInProgress = true;

    const recaptchaToken = await this.getRecaptchaToken();

    if (!this.bypassRecaptcha && !recaptchaToken) {
      this.unrecoverableError = 'validation-setup-failed';
      this.submissionInProgress = false;
      return;
    }

    try {
      const formData = new FormData(this.reviewForm);

      if (recaptchaToken) {
        formData.append('g-recaptcha-response', recaptchaToken);
      }

      // Indicates to backend how to process the response
      formData.append('submitter', 'review-form');

      const response = await fetch(
        `${this.baseHost}${this.endpointPath}?identifier=${this.identifier}`,
        {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(formData),
        },
      );
      const json = await response.json();
      console.log(json);
      this.submissionInProgress = false;
      this.displayMode = 'success';
    } catch (e) {
      console.log(e);
      this.submissionInProgress = false;
    }
  }

  /* Executes the recaptcha widget to fetch the token */
  private async getRecaptchaToken(): Promise<string> {
    if (this.bypassRecaptcha) return '';
    if (!this.recaptchaWidget) return '';

    const recaptchaToken = await this.recaptchaWidget.execute();
    this.dispatchEvent(new Event('recaptchaFinished'));

    return recaptchaToken;
  }

  /* Prevents form submission and sets stars based on number clicked */
  private handleStarClicked(e: Event, num: number): void {
    e.preventDefault();
    this.setStars(num);
  }

  /* Clear stars if requested */
  private handleClearBtnClicked(e: Event): void {
    e.preventDefault();
    this.currentStars = 0;
  }

  /* Updates star count, resetting to 0 if the currently selected star is clicked */
  private setStars(num: number): void {
    this.currentStars = num === this.currentStars ? 0 : num;
  }

  /* Updates subject input length */
  private handleSubjectChanged(e: Event): void {
    const subjectInput = e.target as HTMLInputElement;
    this.currentSubjectLength = subjectInput.value.length;
  }

  /* Updates body input length */
  private handleBodyChanged(e: Event): void {
    const bodyInput = e.target as HTMLInputElement;
    this.currentBodyLength = bodyInput.value.length;
  }

  /* Checks if submission should be allowed */
  private checkSubmissionAllowed(): boolean {
    if (this.unrecoverableError) {
      return false;
    }

    // Subject and body must not be empty
    if (!this.currentBodyLength || !this.currentSubjectLength) {
      return false;
    }

    // Subject must be correct length
    if (
      !!this.maxSubjectLength &&
      this.currentSubjectLength > this.maxSubjectLength
    ) {
      return false;
    }

    // Body must be correct length
    if (!!this.maxBodyLength && this.currentBodyLength > this.maxBodyLength) {
      return false;
    }

    return true;
  }

  /* Map of the types and messages for different possible errors */
  private errorMessages: { [key: string]: string | HTMLTemplateResult } = {
    'not-logged-in': html`You must be logged in to write reviews.<br />
      <a class="simple-link" href="${this.baseHost}/account/login">Log in</a>
      and try again.`,
    'rate-limit':
      'We appreciate your contributions but you have now exceeded your allotment of review posts for today. Please try again tomorrow.',
    'validation-setup-failed':
      'We cannot validate your review at this time. Please try again later.',
    spam: 'It looks like your review has triggered our spam detector. If this is in error, please email info@archive.org with the URL, complete Subject text, and complete Review text you entered.',
    misc: "There's been a temporary error. Please wait a moment and try again.",
  };

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
          --ia-theme-error-color: #ff0000;
        }

        .form-heading {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 15px;
        }

        .form-heading label {
          font-size: 1.6rem;
          font-weight: bold;
        }

        label {
          display: inline-block;
          margin-bottom: 5px;
        }

        textarea,
        input[type='text'],
        .unrecoverable-error {
          padding: 5px;
          width: calc(100% - 10px);
          font-family: inherit;
          border-radius: 5px;
          border: 1px solid #999999;
        }

        .input-box.error input,
        .input-box.error textarea {
          border: 2px solid var(--ia-theme-error-color, #cc0000);
        }

        .input-box.error .char-count,
        .input-error,
        .recoverable-error,
        .unrecoverable-error {
          color: var(--ia-theme-error-color, #cc0000);
        }

        .input-error {
          display: none;
        }

        .input-box.error .input-error {
          display: block;
          text-align: right;
          padding-top: 5px;
        }

        .stars {
          display: flex;
          flex-direction: row;
          gap: 2px;
          align-items: center;
        }

        .star {
          all: unset;
          height: 30px;
          width: 30px;
        }

        .star:hover {
          cursor: pointer;
        }

        .clear-stars-btn {
          padding: 0 5px;
          color: var(--ia-link-color, #4b64ff);
          font-family: inherit;
          border: none;
          background: transparent;
          display: inline-block;
          padding-top: 5px;
        }

        .simple-link {
          text-decoration: none;
        }

        .clear-stars-btn:hover,
        .simple-link:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        .action-btns {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding-top: 15px;
        }

        .ia-button:disabled {
          opacity: 0.75;
        }

        .unrecoverable-error {
          height: 350px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #f5f5f7;
        }

        .full-page-message {
          text-align: center;
        }

        .loading-indicator {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-top: 2px;
          --activityIndicatorLoadingRingColor: #fff;
          --activityIndicatorLoadingDotColor: #fff;
        }
      `,
    ];
  }
}
