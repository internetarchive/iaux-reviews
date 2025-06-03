import { html, fixture, expect } from '@open-wc/testing';

import type { IaReviews } from '../src/ia-reviews';
import { Review } from '@internetarchive/metadata-service';
import '../src/ia-reviews';
import { ReviewForm } from '../src/review-form';

const mockReview1 = new Review({
  stars: 5,
  reviewtitle: 'What a cool book!',
  reviewbody: 'I loved it.',
  reviewer: 'Foo Bar',
  reviewdate: '03/20/2025',
  createdate: '02/07/2025',
  reviewer_itemname: '@foo-bar',
});

const mockReview2 = new Review({
  stars: 2,
  reviewtitle: 'Eh, just ok.',
  reviewbody: 'It is just fine.',
  reviewer: 'Bar Baz',
  reviewdate: '03/20/2025',
  createdate: '03/20/2025',
  reviewer_itemname: '@bar-baz',
});

const mockReviews: Review[] = [mockReview1, mockReview2];

describe('IaReviews', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        .displayReviews=${true}
      ></ia-reviews>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });

  it('renders all the reviews that are passed to it', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        .displayReviews=${true}
      ></ia-reviews>`,
    );

    const reviews = el.shadowRoot?.querySelectorAll('ia-review');
    expect(reviews?.length).to.equal(2);
  });

  it('shows the correct number of reviews in parentheses', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        .displayReviews=${true}
      ></ia-reviews>`,
    );

    const reviewsTitle = el.shadowRoot?.querySelector('h2');
    expect(reviewsTitle?.textContent?.trim()).to.equal('Reviews (2)');
  });

  it("includes the patron's own review in the count", async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        .ownReview=${mockReview1}
        .displayReviews=${true}
      ></ia-reviews>`,
    );

    const reviewsTitle = el.shadowRoot?.querySelector('h2');
    expect(reviewsTitle?.textContent?.trim()).to.equal('Reviews (3)');
  });

  it("includes the patron's own review in the count even if no other reviews", async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .ownReview=${mockReview1}></ia-reviews>`,
    );

    const reviewsTitle = el.shadowRoot?.querySelector('h2');
    expect(reviewsTitle?.textContent?.trim()).to.equal('Reviews (1)');
  });

  it('does not show any number if there are no reviews', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .displayReviews=${true}></ia-reviews>`,
    );

    const reviewsTitle = el.shadowRoot?.querySelector('h2');
    expect(reviewsTitle?.textContent?.trim()).to.equal('Reviews');
  });

  it('does not display the review form by default', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        .displayReviews=${true}
      ></ia-reviews>`,
    );

    const reviewForm = el.shadowRoot?.querySelector(
      'ia-review-form',
    ) as ReviewForm;
    expect(reviewForm).not.to.exist;
  });

  it('does display the review form if requested', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        .displayReviews=${true}
        .displayReviewForm=${true}
      ></ia-reviews>`,
    );

    const reviewForm = el.shadowRoot?.querySelector(
      'ia-review-form',
    ) as ReviewForm;
    expect(reviewForm).to.exist;
  });

  it('includes a button to add or edit a review', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${mockReviews}></ia-reviews>`,
    );

    const addEditButton = el.shadowRoot?.querySelector('.add-edit-btn');
    expect(addEditButton).to.exist;
  });

  it('the add/edit button reads edit if you have a review', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .ownReview=${mockReviews[0]}
        .reviews=${mockReviews}
      ></ia-reviews>`,
    );

    const addEditButton = el.shadowRoot?.querySelector('.add-edit-btn');
    expect(addEditButton).to.exist;
    expect(addEditButton?.textContent).to.contain('Edit My Review');
  });

  it("the add/edit button reads add if you don't have a review", async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${mockReviews}></ia-reviews>`,
    );

    const addEditButton = el.shadowRoot?.querySelector('.add-edit-btn');
    expect(addEditButton).to.exist;
    expect(addEditButton?.textContent).to.contain('Add Review');
  });

  it('displays the review form if add/edit button clicked', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .ownReview=${mockReviews[0]}
        .reviews=${mockReviews}
      ></ia-reviews>`,
    );

    const addEditButton = el.shadowRoot?.querySelector(
      '.add-edit-btn',
    ) as HTMLButtonElement;
    addEditButton?.click();

    await el.updateComplete;
    const reviewForm = el.shadowRoot?.querySelector(
      'ia-review-form',
    ) as ReviewForm;
    expect(reviewForm).to.exist;
    const reviews = el.shadowRoot?.querySelectorAll('ia-review');
    expect(reviews?.length).to.equal(2);
  });
});
