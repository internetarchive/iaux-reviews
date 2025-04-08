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
    reviewtitle:
      'What a cool book!What a cool book!What a cool book!What a cool book!What a cool book!What a cool book!What a cool book!What a cool book!',
    reviewbody: 'I loved it.',
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

  private errors: string[] = [
    "Sorry, we couldn't submit your review.",
    'Write a better one.',
  ];

  @state()
  private recaptchaManager?: RecaptchaManagerInterface;

  @state()
  private bypassRecaptcha: boolean = false;

  @state()
  private showErrors: boolean = false;

  @state()
  private useCharCounts: boolean = true;

  @state()
  private useReviewDisplay: boolean = false;

  render() {
    return html`${!this.recaptchaManager
        ? html`<button
              @click=${() =>
                (this.recaptchaManager = this.goodRecaptchaManager)}
            >
              Turn on ReCaptcha (good site key)</button
            ><button
              @click=${() => (this.recaptchaManager = this.badRecaptchaManager)}
            >
              Turn on ReCaptcha (bad site key)
            </button> `
        : nothing}
      <button @click=${() => (this.bypassRecaptcha = !this.bypassRecaptcha)}>
        ${!this.bypassRecaptcha ? 'Bypass' : 'Enable'} ReCaptcha
      </button>
      <button @click=${() => (this.showErrors = !this.showErrors)}>
        ${this.showErrors ? 'Hide' : 'Show'} pre-filled errors
      </button>
      <button @click=${() => (this.useCharCounts = !this.useCharCounts)}>
        ${this.useCharCounts ? 'Remove' : 'Use'} char count limits
      </button>
      <button @click=${() => (this.useReviewDisplay = !this.useReviewDisplay)}>
        Switch to ${this.useReviewDisplay ? 'form view' : 'review view'}
      </button>
      <div class="container">
        <ia-review-form
          .identifier=${'goody'}
          .oldReview=${this.mockOldReview}
          .recaptchaManager=${this.recaptchaManager}
          .prefilledErrors=${this.showErrors ? this.errors : []}
          .maxSubjectLength=${this.useCharCounts ? 100 : undefined}
          .maxBodyLength=${this.useCharCounts ? 1000 : undefined}
          .displayMode=${this.useReviewDisplay ? 'review' : 'form'}
          ?bypassRecaptcha=${this.bypassRecaptcha}
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
