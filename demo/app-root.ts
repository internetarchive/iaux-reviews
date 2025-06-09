import { css, html, HTMLTemplateResult, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { Review } from '@internetarchive/metadata-service';
import {
  RecaptchaManager,
  RecaptchaManagerInterface,
} from '@internetarchive/recaptcha-manager';

import '../src/review-form';
import '../src/review';
import '../src/ia-reviews';

import { MockFetchHandler } from '../test/mocks/mock-fetch-handler';
import type { FetchHandlerInterface } from '@internetarchive/fetch-handler-service';

@customElement('app-root')
export class AppRoot extends LitElement {
  private mockOldReview = new Review({
    stars: 5,
    reviewtitle: 'What a cool book!',
    reviewbody: 'I loved it.',
    reviewer: 'Foo Bar',
    reviewdate: '03/20/2025',
    createdate: '02/07/2025',
    reviewer_itemname: '@foo-bar',
  });

  private longReview = new Review({
    stars: 5,
    reviewtitle:
      'What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ',
    reviewbody: new Array(100).fill('I loved it.').join(' '),
    reviewer: 'Foo Bar',
    reviewdate: '03/20/2025',
    createdate: '02/07/2025',
    reviewer_itemname: '@foo-bar',
  });

  private reviewWithLink = new Review({
    stars: 5,
    reviewtitle: 'What a cool book!',
    reviewbody:
      'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',
    reviewer: 'Foo Bar',
    reviewdate: '03/20/2025',
    createdate: '02/07/2025',
    reviewer_itemname: '@foo-bar',
  });

  private reviewWithTextLink = new Review({
    stars: 5,
    reviewtitle: 'What a cool book!',
    reviewbody: 'I loved it. You can read it here: archive.org/details/goody',
    reviewer: 'Foo Bar',
    reviewdate: '03/20/2025',
    createdate: '02/07/2025',
    reviewer_itemname: '@foo-bar',
  });

  private reviews = [
    this.mockOldReview,
    new Review({
      stars: 2,
      reviewtitle: 'Eh, just ok',
      reviewbody: 'It was fine.',
      reviewer: 'Bar Baz',
      reviewdate: '04/20/2025',
      createdate: '04/07/2025',
      reviewer_itemname: '@bar-baz',
    }),
    new Review({
      stars: 5,
      reviewtitle: 'My favorite book!!!!!',
      reviewbody: 'Wow, what a great read',
      reviewer: 'Bar Foo',
      reviewdate: '04/19/2025',
      createdate: '04/19/2025',
      reviewer_itemname: '@bar-foo',
    }),
  ];

  private fetchHandler: FetchHandlerInterface = new MockFetchHandler();

  private mockRecaptchaManager: RecaptchaManagerInterface =
    new RecaptchaManager({
      defaultSiteKey: 'demo-key',
    });

  @state()
  private bypassRecaptcha: boolean = true;

  @state()
  private unrecoverableError: boolean = false;

  @state()
  private useCharCounts: boolean = true;

  @state()
  private allowDeletion: boolean = false;

  @state()
  private useExistingReviews: boolean = true;

  @state()
  private review: Review = this.mockOldReview;

  @state()
  private reviewsDisabled: boolean = false;

  @state()
  private reviewsFrozen: boolean = false;

  render() {
    return html` <h2>General Settings</h2>
      <button
        @click=${() => (this.useExistingReviews = !this.useExistingReviews)}
      >
        ${this.useExistingReviews ? 'Remove' : 'Show'} existing reviews
      </button>
      <button @click=${() => (this.reviewsDisabled = !this.reviewsDisabled)}>
        ${this.reviewsDisabled ? 'Enable' : 'Disable'} reviews
      </button>
      <button @click=${() => (this.reviewsFrozen = !this.reviewsFrozen)}>
        ${this.reviewsFrozen ? 'Unfreeze' : 'Freeze'} reviews
      </button>
      <button @click=${() => (this.bypassRecaptcha = !this.bypassRecaptcha)}>
        ${!this.bypassRecaptcha ? 'Bypass' : 'Enable'} ReCaptcha
      </button>
      <h2>Toggle errors</h2>
      <button
        @click=${() => (this.unrecoverableError = !this.unrecoverableError)}
      >
        ${this.unrecoverableError ? 'Hide' : 'Show'} unrecoverable error
      </button>
      <button @click=${() => (this.useCharCounts = !this.useCharCounts)}>
        ${this.useCharCounts ? 'Remove' : 'Use'} char count limits
      </button>
      <h2>Toggle review display</h2>
      ${this.renderReviewToggle(this.mockOldReview, 'normal review')}
      ${this.renderReviewToggle(this.longReview, 'long review')}
      ${this.renderReviewToggle(this.reviewWithLink, 'review with link')}
      ${this.renderReviewToggle(
        this.reviewWithTextLink,
        'review with text link',
      )}
      <button @click=${() => (this.allowDeletion = !this.allowDeletion)}>
        ${this.allowDeletion ? 'Prevent' : 'Allow'} deletion
      </button>

      <div class="container">
        <ia-reviews
          .identifier=${'goody'}
          .reviews=${this.useExistingReviews ? this.reviews : []}
          .recaptchaManager=${this.mockRecaptchaManager}
          .submitterItemname=${'@foo-bar'}
          .submitterScreenname=${'Foo Bar'}
          .reviewSubmissionError=${this.unrecoverableError
            ? 'You must be logged in to write reviews.'
            : undefined}
          .maxSubjectLength=${this.useCharCounts ? 100 : undefined}
          .maxBodyLength=${this.useCharCounts ? 1000 : undefined}
          .fetchHandler=${this.fetchHandler}
          ?canDelete=${this.allowDeletion}
          ?bypassRecaptcha=${this.bypassRecaptcha}
          ?reviewsDisabled=${this.reviewsDisabled}
          ?reviewsFrozen=${this.reviewsFrozen}
        ></ia-reviews>
      </div>`;
  }

  private renderReviewToggle(
    review: Review,
    reviewName: string,
  ): HTMLTemplateResult {
    return html`
      <button
        @click=${() => {
          this.switchInOutReview(review);
        }}
      >
        ${this.review !== review ? 'Prefill' : 'Remove'} ${reviewName}
      </button>
    `;
  }

  private switchInOutReview(review: Review): void {
    this.useExistingReviews = true;

    if (this.review !== review) {
      this.review = review;
    } else this.review = this.mockOldReview;
  }

  static styles = css`
    .container {
      max-width: 750px;
      margin: 10px auto;
      font-size: 1.4rem;
      margin-top: 50px;
    }

    h2,
    textarea {
      font-family: 'Helvetica', sans-serif;
    }

    .review-body-form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .review-body-form textarea {
      width: 400px;
      height: 100px;
    }
  `;
}
