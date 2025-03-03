import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import type { Review } from '../src/types/types';
import '../src/review-form';

const mockOldReview: Review = {
  stars: 5,
  subject: 'What a cool book!',
  body: 'I loved it.',
};

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <div class="container">
        <ia-review-form
          .identifier=${'goody'}
          .baseHost=${'https://archive.org'}
          .oldReview=${mockOldReview}
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
