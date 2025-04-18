import {
  html,
  css,
  LitElement,
  nothing,
  HTMLTemplateResult,
  CSSResultGroup,
} from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { msg } from '@lit/localize';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { Review } from '@internetarchive/metadata-service';

import starBasic from './assets/star-basic';
import { truncateScreenname } from './utils/truncate-screenname';
import sanitizeReviewBody from './utils/sanitize-review-body';
import friendlyTruncate from './utils/friendly-truncate';
import linkUrlsInText from './utils/link-urls-in-text';

/* Further properties for reviews added before render */
export interface ReviewForRender extends Review {
  screenname: string;
  itemname?: string;
}

/**
 * Renders a single IA review
 */
@customElement('ia-review')
export class IaReview extends LitElement {
  /* The review to be rendered */
  @property({ type: Object }) review?: ReviewForRender;

  /* Maximum renderable length for subject */
  @property({ type: Number }) maxSubjectLength = 100;

  /* Maximum renderable length for body */
  @property({ type: Number }) maxBodyLength = 150;

  /* Base for URLs */
  @property({ type: String }) baseHost = 'https://archive.org';

  /* Whether to show truncated review title / body */
  @state()
  private showTruncatedContent: boolean = false;

  render() {
    return !this.review
      ? html`
          <div class="error">
            ${msg('This review cannot be displayed at this time.')}
          </div>
        `
      : html`
          <article class="review" id=${this.generateDomId()}>
            <div class="top-line">
              <b>${msg('Reviewer:')}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${msg('Subject: ')}</b>${this.subjectTemplate}
            </div>
            <div class="body">${this.bodyTemplate}</div>
            ${this.truncationButtonsTemplate}
          </article>
        `;
  }

  /* Renders the review subject, truncating if necessary */
  private get subjectTemplate(): string {
    if (!this.review?.reviewtitle) return '';

    return this.review.reviewtitle.length <= this.maxSubjectLength ||
      this.showTruncatedContent
      ? this.review.reviewtitle
      : friendlyTruncate(this.review.reviewtitle, this.maxSubjectLength);
  }

  /* Renders the review body, truncating if necessary */
  private get bodyTemplate(): HTMLTemplateResult | typeof nothing {
    if (!this.review?.reviewbody) return nothing;

    const sanitizedReview = sanitizeReviewBody(this.review.reviewbody);
    const truncatedReview =
      sanitizedReview.length <= this.maxBodyLength || this.showTruncatedContent
        ? sanitizedReview
        : friendlyTruncate(sanitizedReview, this.maxBodyLength);

    return html`${unsafeHTML(linkUrlsInText(truncatedReview))}`;
  }

  /* Renders the More/Less button if review is truncated */
  private get truncationButtonsTemplate(): HTMLTemplateResult | typeof nothing {
    if (!this.review?.reviewtitle || !this.review?.reviewbody) return nothing;

    const noTruncationNeeded =
      this.review.reviewtitle.length <= this.maxSubjectLength &&
      this.review.reviewbody.length <= this.maxBodyLength;

    if (noTruncationNeeded) return nothing;

    return this.showTruncatedContent
      ? this.lessButtonTemplate
      : this.moreButtonTemplate;
  }

  /* More button for truncation */
  private get moreButtonTemplate(): HTMLTemplateResult {
    return html`
      <button
        class="simple-link more-btn"
        @click=${() => (this.showTruncatedContent = true)}
      >
        ${msg('More...')}
      </button>
    `;
  }

  /* Less button for truncation */
  private get lessButtonTemplate(): HTMLTemplateResult {
    return html`<button
      class="simple-link less-btn"
      @click=${() => (this.showTruncatedContent = false)}
    >
      ${msg('...Less')}
    </button>`;
  }

  /* Reviewer name, with hyperlink and truncation if needed */
  private get reviewerTemplate(): HTMLTemplateResult | typeof nothing {
    return !this.review
      ? nothing
      : this.review.itemname
        ? html`
            <a
              href="${this.baseHost}/details/${this.review.itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${truncateScreenname(this.review.screenname)}
            </a>
          `
        : html`${truncateScreenname(this.review.screenname)}`;
  }

  /* Number of stars that corresponds to patron's rating */
  private get starsTemplate(): HTMLTemplateResult | typeof nothing {
    if (!this.review || !this.review.stars) return nothing;
    return html`
      <div
        class="review-stars"
        title="${msg(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars))
          .fill(null)
          .map(() => html`<div class="review-star">${starBasic}</div>`)}
      </div>
      -
    `;
  }

  /* Formats the review's date for render, adding (edited) if needed */
  private get createDateTemplate(): string | typeof nothing {
    if (!this.review?.createdate || !this.review?.reviewdate) return nothing;

    const reviewDate = new Date(this.review.reviewdate);
    const createDate = new Date(this.review.createdate);

    const prettyDate = createDate.toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    const editedMsg =
      reviewDate.getTime() !== createDate.getTime() ? '(edited)' : '';

    return msg(`${prettyDate} ${editedMsg}`);
  }

  /**
   * Generates a unique ID for the review, using its createdate.
   *
   * @returns {string} The ID to render
   */
  private generateDomId(): string {
    if (!this.review?.createdate) return '';

    return `review-${Date.parse(this.review.createdate.toString())}`;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        font-family: var(
          --ia-font-stack,
          'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif
        );

        font-size: inherit;
      }

      .error {
        color: var(--ia-theme-error-color, #cc0000);
      }

      .top-line {
        margin-bottom: 0.5rem;
      }

      .top-line > * {
        display: inline-block;
      }

      .review-star {
        width: 1rem;
        display: inline-block;
      }

      .simple-link,
      .body a {
        color: var(--ia-link-color, #4b64ff);
        text-decoration: none;
        background: transparent;
        border: none;
        padding: 0px;
      }

      .simple-link:hover,
      .body a:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      .subject {
        margin-bottom: 0.5rem;
      }
    `;
  }
}
