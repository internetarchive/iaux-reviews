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

import { Review } from '@internetarchive/metadata-service';

import starBasic from './assets/star-basic';

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

  /* Whether to show truncated review title / body */
  @state()
  private showTruncatedContent: boolean = false;

  /* Maximum lengths for title and body */
  private MAX_TITLE_LENGTH = 100;
  private MAX_BODY_LENGTH = 1000;

  render() {
    return !this.review
      ? html`<div class="error">Could not render review.</div>`
      : html`<article class="review" id=${this.review.domId}>
          <div class="top-line">
            <b>${msg('Reviewer: ')}</b>${this.reviewerTemplate} -
            ${this.starsTemplate}${this.createDateTemplate}
          </div>
          <div class="subject">
            <b>${msg('Subject: ')}</b>${this.subjectTemplate}
          </div>
          <div class="body">${this.review.reviewbody}</div>
        </article>`;
  }

  private get subjectTemplate(): HTMLTemplateResult | typeof nothing {
    if (!this.review?.reviewtitle) return nothing;
    return html`${this.review.reviewtitle}`;
  }

  private get reviewerTemplate(): HTMLTemplateResult | typeof nothing {
    return !this.review
      ? nothing
      : this.review.itemname
        ? html`<a
            href="/details/${this.review.itemname}"
            class="reviewer-link simple-link"
            data-event-click-tracking="ItemReviews|ReviewerLink"
            >${this.review.screenname}</a
          >`
        : html`${this.review.screenname}`;
  }

  private get starsTemplate(): HTMLTemplateResult | typeof nothing {
    if (!this.review || !this.review.stars) return nothing;
    return html`<div
        class="review-stars"
        title="${msg(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(this.review.stars)
          .fill(null)
          .map(() => html`<div class="review-star">${starBasic}</div>`)}
      </div>
      - `;
  }

  private get createDateTemplate(): string | typeof nothing {
    if (!this.review) return nothing;
    const prettyDate = this.review.createdate?.toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    const hasBeenEdited =
      this.review.reviewdate?.getTime() !== this.review.createdate?.getTime();

    return msg(`${prettyDate} ${hasBeenEdited ? '(edited)' : ''}`);
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
        display: flex;
        flex-direction: row;
        gap: 3px;
        margin-bottom: 0.5rem;
      }

      .review-star {
        width: 1rem;
      }

      .review-stars {
        display: flex;
        flex-direction: row;
      }

      .simple-link {
        color: var(--ia-link-color, #4b64ff);
        text-decoration: none;
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
