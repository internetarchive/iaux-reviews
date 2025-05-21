import { css, html, LitElement, nothing } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';

import { Review } from '@internetarchive/metadata-service';
import {
  RecaptchaManager,
  RecaptchaManagerInterface,
} from '@internetarchive/recaptcha-manager';

import '../src/review-form';
import '../src/review';
import { MockFetchHandler } from '../test/mocks/mock-fetch-handler';
import type { FetchHandlerInterface } from '@internetarchive/fetch-handler-service';
import { ReviewForm } from '../src/review-form';

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

  private fetchHandler: FetchHandlerInterface = new MockFetchHandler();

  private goodRecaptchaManager: RecaptchaManagerInterface =
    new RecaptchaManager({
      defaultSiteKey: 'demo-key',
    });

  private badRecaptchaManager: RecaptchaManagerInterface = new RecaptchaManager(
    {
      defaultSiteKey: 'i-am-a-bad-key-that-will-fail',
    },
  );

  @state()
  private recaptchaManager?: RecaptchaManagerInterface;

  @state()
  private bypassRecaptcha: boolean = true;

  @state()
  private unrecoverableError: boolean = false;

  @state()
  private recoverableError: boolean = false;

  @state()
  private useCharCounts: boolean = true;

  @state()
  private allowDeletion: boolean = false;

  @state()
  private review: Review = this.mockOldReview;

  @query('ia-review-form')
  private reviewForm!: ReviewForm;

  render() {
    return html` <h2>Toggle ReCaptcha</h2>
      ${!this.recaptchaManager
        ? html`
            <button
              @click=${() =>
                (this.recaptchaManager = this.goodRecaptchaManager)}
            >
              Turn on ReCaptcha (good site key)</button
            ><button
              @click=${() => (this.recaptchaManager = this.badRecaptchaManager)}
            >
              Turn on ReCaptcha (bad site key)
            </button>
          `
        : nothing}
      <button @click=${() => (this.bypassRecaptcha = !this.bypassRecaptcha)}>
        ${!this.bypassRecaptcha ? 'Bypass' : 'Enable'} ReCaptcha
      </button>
      <h2>Toggle errors</h2>
      <button
        @click=${() => (this.unrecoverableError = !this.unrecoverableError)}
      >
        ${this.unrecoverableError ? 'Hide' : 'Show'} unrecoverable error
      </button>
      <button
        @click=${() => {
          this.unrecoverableError = false;
          this.recoverableError = !this.recoverableError;
        }}
      >
        ${this.recoverableError ? 'Hide' : 'Show'} recoverable error
      </button>
      <button @click=${() => (this.useCharCounts = !this.useCharCounts)}>
        ${this.useCharCounts ? 'Remove' : 'Use'} char count limits
      </button>
      <h2>Toggle review display</h2>
      <button
        @click=${() => {
          this.reviewForm.displayMode = 'form';
        }}
      >
        Switch to form view
      </button>
      ${this.review !== this.mockOldReview
        ? html`<button @click=${() => (this.review = this.mockOldReview)}>
            Prefill normal review
          </button>`
        : nothing}
      ${this.review !== this.longReview
        ? html`<button @click=${() => (this.review = this.longReview)}>
            Prefill long review
          </button>`
        : nothing}
      ${this.review !== this.reviewWithLink
        ? html`<button @click=${() => (this.review = this.reviewWithLink)}>
            Prefill review with link
          </button>`
        : nothing}
      ${this.review !== this.reviewWithTextLink
        ? html`<button @click=${() => (this.review = this.reviewWithTextLink)}>
            Prefill review with text link
          </button>`
        : nothing}
      <button @click=${() => (this.allowDeletion = !this.allowDeletion)}>
        ${this.allowDeletion ? 'Prevent' : 'Allow'} deletion
      </button>

      <div class="container">
        <ia-review-form
          .identifier=${'goody'}
          .oldReview=${this.review}
          .recaptchaManager=${this.recaptchaManager}
          .unrecoverableError=${this.unrecoverableError
            ? 'You must be logged in to write reviews.'
            : undefined}
          .recoverableError=${this.recoverableError
            ? "There's a problem submitting your review, please try again later."
            : undefined}
          .maxSubjectLength=${this.useCharCounts ? 100 : undefined}
          .maxBodyLength=${this.useCharCounts ? 1000 : undefined}
          .fetchHandler=${this.fetchHandler}
          ?canDelete=${this.allowDeletion}
          ?bypassRecaptcha=${this.bypassRecaptcha}
          ?submissionInProgress=${true}
        ></ia-review-form>
      </div>`;
  }

  static styles = css`
    .container {
      max-width: 750px;
      margin: 10px auto;
      font-size: 1.4rem;
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
