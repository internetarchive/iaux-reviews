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

import { Review } from '@internetarchive/metadata-service';

import starBasic from './assets/star-basic';
import { truncateScreenname } from './utils/truncate-screenname';

/* Further properties for reviews added before render */
export interface ReviewForRender extends Review {
  screenname: string;
  domId: string;
  itemname?: string;
}

/**
 * Renders a single IA review
 */
@customElement('ia-review')
export class IaReview extends LitElement {
  /* The review to be rendered */
  @property({ type: Object }) review?: ReviewForRender;

  /* Maximum length for subject */
  @property({ type: Number }) maxSubjectLength = 100;

  /* Maximum length for body */
  @property({ type: Number }) maxBodyLength = 1000;

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
          <article class="review" id=${this.review.domId}>
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

  private get subjectTemplate(): string {
    if (!this.review?.reviewtitle) return '';

    return this.review.reviewtitle.length <= this.maxSubjectLength ||
      this.showTruncatedContent
      ? this.review.reviewtitle
      : this.review.reviewtitle.slice(0, this.maxSubjectLength).concat('...');
  }

  private get bodyTemplate(): string {
    if (!this.review?.reviewbody) return '';

    return this.review.reviewbody.length <= this.maxBodyLength ||
      this.showTruncatedContent
      ? this.review.reviewbody
      : this.review.reviewbody.slice(0, this.maxBodyLength).concat('...');
  }

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

  private get lessButtonTemplate(): HTMLTemplateResult {
    return html`<button
      class="simple-link less-btn"
      @click=${() => (this.showTruncatedContent = false)}
    >
      ${msg('...Less')}
    </button>`;
  }

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
        : html`${this.review.screenname}`;
  }

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

      .simple-link {
        color: var(--ia-link-color, #4b64ff);
        text-decoration: none;
        background: transparent;
        border: none;
        padding: 0px;
      }

      .simple-link:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      .subject {
        margin-bottom: 0.5rem;
      }
    `;
  }
}
