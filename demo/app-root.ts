import { css, html, LitElement, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { Review } from '@internetarchive/metadata-service';
import {
  RecaptchaManager,
  RecaptchaManagerInterface,
} from '@internetarchive/recaptcha-manager';

import type { ReviewForRender } from '../src/review';
import '../src/review-form';
import '../src/review';

@customElement('app-root')
export class AppRoot extends LitElement {
  private mockOldReview: ReviewForRender = {
    rawValue: new Review({ stars: 5 }),
    stars: 5,
    reviewtitle: 'What a cool book!',
    reviewbody: 'I loved it.',
    reviewer: 'Foo Bar',
    reviewdate: new Date('03/20/2025'),
    createdate: new Date('02/07/2025'),
    screenname: 'Foo Bar',
    itemname: 'foo-bar',
    domId: '12345',
  };

  private longReview: ReviewForRender = {
    rawValue: new Review({ stars: 5 }),
    stars: 5,
    reviewtitle:
      'What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ',
    reviewbody: new Array(100).fill('I loved it.').join(' '),
    reviewer: 'Foo Bar',
    reviewdate: new Date('03/20/2025'),
    createdate: new Date('02/07/2025'),
    screenname: 'Foo Bar',
    itemname: 'foo-bar',
    domId: '12345',
  };

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
  private useReviewDisplay: boolean = false;

  @state()
  private useLongReview: boolean = false;

  render() {
    return html`${!this.recaptchaManager
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
      <button @click=${() => (this.useReviewDisplay = !this.useReviewDisplay)}>
        Switch to ${this.useReviewDisplay ? 'form view' : 'review view'}
      </button>
      <button @click=${() => (this.useLongReview = !this.useLongReview)}>
        Prefill ${this.useLongReview ? 'normal review' : 'too-long review'}
      </button>
      <div class="container">
        <ia-review-form
          .identifier=${'goody'}
          .oldReview=${this.useLongReview
            ? this.longReview
            : this.mockOldReview}
          .recaptchaManager=${this.recaptchaManager}
          .unrecoverableError=${this.unrecoverableError
            ? "Sorry, you're not cool enough to write a review for this item."
            : undefined}
          .recoverableError=${this.recoverableError
            ? "Why not try submitting again? What's the worst thing that could happen?"
            : undefined}
          .maxSubjectLength=${this.useCharCounts ? 100 : undefined}
          .maxBodyLength=${this.useCharCounts ? 1000 : undefined}
          .displayMode=${this.useReviewDisplay ? 'review' : 'form'}
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
  `;
}
