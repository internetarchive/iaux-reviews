import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import type { Review } from '@internetarchive/metadata-service';
import '../src/review-form';

const mockOldReview: Review = {
  rawValue: { value: 'test' },
  stars: 3,
  reviewtitle: 'What a cool book!',
  reviewbody: 'I loved it.',
  reviewer: 'foo-bar',
  reviewdate: new Date('2025-03-03 18:13:36'),
  createdate: new Date('2025-02-25 14:28:19'),
};

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <div class="container">
        <ia-review-form
          .identifier=${'goody'}
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
