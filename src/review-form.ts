import {
  html,
  css,
  LitElement,
  nothing,
  HTMLTemplateResult,
  PropertyValues,
  CSSResultGroup,
} from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { msg } from '@lit/localize';

import starSelected from './assets/star-selected';
import starUnselected from './assets/star-unselected';
import { IAButtonStyles } from './styles/ia-buttons';

import type { Review } from '@internetarchive/metadata-service';

/**
 * Renders a form to edit a given IA review.
 */
@customElement('ia-review-form')
export class ReviewForm extends LitElement {
  /* The IA item being reviewed */
  @property({ type: String }) identifier?: string;

  /* The token for the review edit */
  @property({ type: String }) token?: string;

  /* The host for archive endpoints and data */
  @property({ type: String }) baseHost: string = 'https://archive.org';

  /* The path for the endpoint we're submitting to */
  @property({ type: String }) endpointPath: string = '/write-review.php';

  /* The previous review to pre-fill, if any */
  @property({ type: Object }) oldReview?: Review;

  /* Errors to add to the form, if any */
  @property({ type: Array }) errors?: string[];

  /* Number of stars currently selected */
  @state()
  private currentStars: number = 0;

  render() {
    return html`<form action="${this.baseHost}${this.endpointPath}">
      ${this.errors
        ? html`<div class="errors">${this.errors.join(' ')}</div>`
        : nothing}
      ${this.starsInputTemplate} ${this.subjectInputTemplate}
      ${this.bodyInputTemplate}
      ${this.identifier
        ? html`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`
        : nothing}
      ${this.token
        ? html`<input
            type="hidden"
            name="field_reviewtoken"
            .value=${this.token}
          />`
        : nothing}
      ${this.actionButtonsTemplate}
    </form>`;
  }

  protected updated(changed: PropertyValues): void {
    if (changed.has('oldReview') && this.oldReview?.stars) {
      this.currentStars = this.oldReview.stars;
    }
  }

  private get starsInputTemplate(): HTMLTemplateResult {
    return html`
      <div class="form-heading">
        <label for="stars-field">${msg('Rating (optional)')}</label>
      </div>
      <input
        type="hidden"
        name="field_stars"
        id="stars-input"
        .value=${this.currentStars}
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
    return html`<div class="form-heading">
        <label for="subject-input">${msg('Subject')}</label>
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="subject-input"
        .value=${this.oldReview?.reviewtitle ?? ''}
        required
      />`;
  }

  private get bodyInputTemplate(): HTMLTemplateResult {
    return html`<div class="form-heading">
        <label for="body-input">${msg('Review')}</label>
      </div>
      <textarea
        name="field_reviewbody"
        id="body-input"
        .value=${this.oldReview?.reviewbody ?? ''}
        rows="10"
        cols="50"
        required
      ></textarea>`;
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
        value="Submit review"
      >
        ${msg('Submit review')}
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

  static get styles(): CSSResultGroup {
    return [
      IAButtonStyles,
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

        .form-heading {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 1.5rem;
          font-size: 1.6rem;
          font-weight: bold;
        }

        label {
          display: inline-block;
          margin-bottom: 5px;
        }

        textarea,
        input[type='text'] {
          padding: 0.5rem;
          width: calc(100% - 1rem);
          font-family: inherit;
        }

        .stars {
          display: flex;
          flex-direction: row;
          gap: 0.2rem;
          align-items: center;
        }

        .star {
          all: unset;
          width: 3rem;
        }

        .star:hover {
          cursor: pointer;
        }

        .clear-stars-btn {
          padding: 0 0.5rem;
          color: var(--ia-link-color, #4b64ff);
          font-family: inherit;
          border: none;
          background: transparent;
          display: inline-block;
          padding-top: 0.5rem;
        }

        .clear-stars-btn:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        .action-btns {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          padding-top: 1.5rem;
        }
      `,
    ];
  }
}
