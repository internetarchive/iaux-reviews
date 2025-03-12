import { css, html, LitElement, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { Review } from '@internetarchive/metadata-service';
import '../src/review-form';
import {
  RecaptchaManager,
  RecaptchaManagerInterface,
} from '@internetarchive/recaptcha-manager';

@customElement('app-root')
export class AppRoot extends LitElement {
  private mockOldReview = new Review({
    stars: 3,
    reviewtitle: 'What a cool book!',
    reviewbody: 'I loved it.',
    reviewer: 'foo-bar',
    reviewdate: '2025-03-03 18:13:36',
    createdate: '2025-02-25 14:28:19',
  });

  private goodRecaptchaManager: RecaptchaManagerInterface =
    new RecaptchaManager({
      defaultSiteKey: '6Ld64a8UAAAAAGbDwi1927ztGNw7YABQ-dqzvTN2',
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
        ${this.showErrors ? 'Hide' : 'Show'} Pre-filled Errors
      </button>
      <div class="container">
        <ia-review-form
          .identifier=${'goody'}
          .oldReview=${this.mockOldReview}
          .recaptchaManager=${this.recaptchaManager}
          .prefilledErrors=${this.showErrors ? this.errors : []}
          .bypassRecaptcha=${this.bypassRecaptcha}
        ></ia-review-form>
      </div> `;
  }

  static styles = css`
    .container {
      max-width: 750px;
      margin: 10px auto;
    }
  `;
}
