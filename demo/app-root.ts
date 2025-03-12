import { css, html, LitElement } from 'lit';
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

  private recaptchaManager: RecaptchaManagerInterface = new RecaptchaManager({
    defaultSiteKey: '6Ld64a8UAAAAAGbDwi1927ztGNw7YABQ-dqzvTN2',
  });

  @state()
  recaptchaOn: boolean = false;

  render() {
    return html`
      <button @click=${() => (this.recaptchaOn = true)}>
        Turn on ReCaptcha
      </button>
      <div class="container">
        <ia-review-form
          .identifier=${'goody'}
          .oldReview=${this.mockOldReview}
          .recaptchaManager=${this.recaptchaOn
            ? this.recaptchaManager
            : undefined}
        ></ia-review-form>
      </div>
    `;
  }

  static styles = css`
    .container {
      max-width: 750px;
      margin: 0 auto;
    }
  `;
}
