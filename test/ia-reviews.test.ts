import { html, fixture, expect, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';

import type { IaReviews } from '../src/ia-reviews';
import { Review } from '@internetarchive/metadata-service';
import '../src/ia-reviews';
import { ReviewForm } from '../src/review-form';
import { IaReview } from '../src/review';

const mockReview1 = new Review({
  stars: 5,
  reviewtitle: 'What a cool book!',
  reviewbody: 'I loved it.',
  reviewer: 'Foo Bar',
  reviewdate: '03/21/2025',
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

/** Makes `count` reviews by different patrons, newest first, a day apart */
function makeReviews(count: number): Review[] {
  return Array.from(
    { length: count },
    (_, i) =>
      new Review({
        stars: 3,
        reviewtitle: `Review ${i + 1}`,
        reviewbody: 'Some thoughts.',
        reviewer: `Reviewer ${i + 1}`,
        reviewdate: `2025-01-${String(28 - i).padStart(2, '0')}`,
        createdate: `2025-01-${String(28 - i).padStart(2, '0')}`,
        reviewer_itemname: `@reviewer-${i + 1}`,
      }),
  );
}

/** The reviews in the list, in render order */
function listedReviews(el: IaReviews): IaReview[] {
  return [
    ...(el.shadowRoot?.querySelectorAll(
      '.reviews-list > ia-review',
    ) as NodeListOf<IaReview>),
  ];
}

/** The reviewer link inside a rendered review */
function reviewerLink(review: IaReview): HTMLAnchorElement | null | undefined {
  return review.shadowRoot?.querySelector<HTMLAnchorElement>('.reviewer-link');
}

/**
 * Where focus is in the list, e.g. "Reviewer 6: reviewer-link". A string keeps a failing assertion
 * readable, where comparing elements makes the runner try to serialize the whole DOM.
 */
function focusedSpot(el: IaReviews): string {
  const active = el.shadowRoot?.activeElement;
  if (!(active instanceof IaReview)) return active?.tagName ?? 'nothing';

  const inner = active.shadowRoot?.activeElement;
  return `${active.review?.reviewer}: ${inner?.classList[0] ?? 'host'}`;
}

/** Clicks "Show more" from the keyboard's position and waits for focus to move */
async function showMore(el: IaReviews): Promise<void> {
  const showMoreBtn = el.shadowRoot?.querySelector(
    '.show-more-btn',
  ) as HTMLButtonElement;
  showMoreBtn.focus();
  showMoreBtn.click();
  await waitUntil(
    () => el.shadowRoot?.activeElement?.tagName === 'IA-REVIEW',
    'focus never moved to a revealed review',
  );
}

/** The reviewer names of the reviews in the list, in render order */
function listedReviewers(el: IaReviews): (string | undefined)[] {
  const reviews = el.shadowRoot?.querySelectorAll(
    '.reviews-list > ia-review',
  ) as NodeListOf<IaReview>;
  return [...reviews].map(review => review.review?.reviewer);
}

describe('IaReviews', () => {
  it('passes the a11y audit for the reviews list', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${mockReviews}></ia-reviews>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });

  it('passes the a11y audit for the review form', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        .displayReviewForm=${true}
      ></ia-reviews>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });

  it('renders all the reviews that are passed to it', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${mockReviews}></ia-reviews>`,
    );

    const reviews = el.shadowRoot?.querySelectorAll('ia-review');
    expect(reviews?.length).to.equal(2);
  });

  it("identifies and splits off the patron's own review, if found", async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        .submitterItemname=${'@foo-bar'}
      ></ia-reviews>`,
    );

    const ownReviewContainer = el.shadowRoot?.querySelector(
      '.own-review-container',
    );
    expect(ownReviewContainer).to.exist;

    const ownReview = ownReviewContainer?.querySelector(
      'ia-review',
    ) as IaReview;
    expect(ownReview).to.exist;
    expect(ownReview?.review?.reviewer_itemname).to.equal('@foo-bar');
  });

  it('sorts reviews descending by createdate', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${mockReviews}></ia-reviews>`,
    );

    const reviews = el.shadowRoot?.querySelectorAll(
      'ia-review',
    ) as NodeListOf<IaReview>;
    expect(reviews).to.exist;
    expect(reviews[0].review?.reviewer).to.equal('Bar Baz');
    expect(reviews[1].review?.reviewer).to.equal('Foo Bar');
  });

  it('shows the reviews by default', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${mockReviews}></ia-reviews>`,
    );

    const reviews = el.shadowRoot?.querySelectorAll('ia-review');
    expect(reviews?.length).to.equal(2);
    expect(el.shadowRoot?.querySelector('.show-more-btn')).not.to.exist;
  });

  it('shows only the 5 newest reviews, with a button for the rest', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${makeReviews(8).reverse()}></ia-reviews>`,
    );

    expect(listedReviewers(el)).to.deep.equal([
      'Reviewer 1',
      'Reviewer 2',
      'Reviewer 3',
      'Reviewer 4',
      'Reviewer 5',
    ]);

    const showMoreBtn = el.shadowRoot?.querySelector(
      '.show-more-btn',
    ) as HTMLButtonElement;
    expect(showMoreBtn).to.exist;
    expect(showMoreBtn.innerText).to.equal('Show 3 more reviews');
  });

  it('uses the singular when only one review is hidden', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${makeReviews(6)}></ia-reviews>`,
    );

    const showMoreBtn = el.shadowRoot?.querySelector(
      '.show-more-btn',
    ) as HTMLButtonElement;
    expect(showMoreBtn.innerText).to.equal('Show 1 more review');
  });

  it('shows no button when there are exactly 5 reviews', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${makeReviews(5)}></ia-reviews>`,
    );

    expect(listedReviewers(el).length).to.equal(5);
    expect(el.shadowRoot?.querySelector('.show-more-btn')).not.to.exist;
  });

  it('shows the rest of the reviews on button click', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${makeReviews(8)}></ia-reviews>`,
    );

    const showMoreBtn = el.shadowRoot?.querySelector(
      '.show-more-btn',
    ) as HTMLButtonElement;
    showMoreBtn.click();
    await el.updateComplete;

    expect(listedReviewers(el).length).to.equal(8);
    expect(el.shadowRoot?.querySelector('.show-more-btn')).not.to.exist;
  });

  it("moves focus to the first revealed review's reviewer link on button click", async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${makeReviews(8)}></ia-reviews>`,
    );

    await showMore(el);

    expect(focusedSpot(el)).to.equal('Reviewer 6: reviewer-link');
  });

  it('keeps the first revealed review in the tab order', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${makeReviews(8)}></ia-reviews>`,
    );
    await showMore(el);
    const [, , , , fifth, , seventh] = listedReviews(el);

    // Back into it from the review after it
    reviewerLink(seventh)?.focus();
    await sendKeys({ down: 'Shift' });
    await sendKeys({ press: 'Tab' });
    await sendKeys({ up: 'Shift' });
    expect(focusedSpot(el)).to.equal('Reviewer 6: reviewer-link');

    // And forward into it from the review before it
    reviewerLink(fifth)?.focus();
    await sendKeys({ press: 'Tab' });
    expect(focusedSpot(el)).to.equal('Reviewer 6: reviewer-link');
  });

  it('passes the a11y audit with reviews hidden behind the button', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${makeReviews(8)}></ia-reviews>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });

  it('uses maxInitialReviews as the cap when set', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${makeReviews(4)}
        .maxInitialReviews=${2}
      ></ia-reviews>`,
    );

    expect(listedReviewers(el)).to.deep.equal(['Reviewer 1', 'Reviewer 2']);
    const showMoreBtn = el.shadowRoot?.querySelector(
      '.show-more-btn',
    ) as HTMLButtonElement;
    expect(showMoreBtn.innerText).to.equal('Show 2 more reviews');
  });

  it("does not count the patron's own review toward the cap", async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${makeReviews(6)}
        .submitterItemname=${'@reviewer-1'}
      ></ia-reviews>`,
    );

    const ownReview = el.shadowRoot?.querySelector(
      '.own-review-container ia-review',
    ) as IaReview;
    expect(ownReview.review?.reviewer).to.equal('Reviewer 1');
    expect(listedReviewers(el).length).to.equal(5);
    expect(listedReviewers(el)).not.to.include('Reviewer 1');
    expect(el.shadowRoot?.querySelector('.show-more-btn')).not.to.exist;
  });

  it("drops the patron's extra reviews so they don't count toward the cap", async () => {
    const extraOwnReview = new Review({
      reviewtitle: 'Second try',
      reviewbody: 'Changed my mind.',
      reviewer: 'Reviewer 1',
      reviewdate: '2025-02-01',
      createdate: '2025-02-01',
      reviewer_itemname: '@reviewer-1',
    });
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${[...makeReviews(6), extraOwnReview]}
        .submitterItemname=${'@reviewer-1'}
      ></ia-reviews>`,
    );

    const ownReviews = el.shadowRoot?.querySelectorAll(
      '.own-review-container ia-review',
    );
    expect(ownReviews?.length).to.equal(1);
    expect(listedReviewers(el)).not.to.include('Reviewer 1');
    expect(listedReviewers(el).length).to.equal(5);
    expect(el.shadowRoot?.querySelector('.show-more-btn')).not.to.exist;
  });

  it('keeps the cap when the review form opens', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${makeReviews(8)}></ia-reviews>`,
    );

    el.displayReviewForm = true;
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector('ia-review-form')).to.exist;
    expect(listedReviewers(el).length).to.equal(5);
    expect(el.shadowRoot?.querySelector('.show-more-btn')).to.exist;
  });

  it('shows every review, with no button, if displayReviewsByDefault is set', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${makeReviews(8)}
        ?displayReviewsByDefault=${true}
      ></ia-reviews>`,
    );

    expect(listedReviewers(el).length).to.equal(8);
    expect(el.shadowRoot?.querySelector('.show-more-btn')).not.to.exist;
  });

  it('shows reviews by default if requested', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        ?displayReviewsByDefault=${true}
      ></ia-reviews>`,
    );

    const reviews = el.shadowRoot?.querySelectorAll('ia-review');
    expect(reviews?.length).to.equal(2);
  });

  it('displays a message instead of the reviews or review form if there are no reviews yet', async () => {
    const el = await fixture<IaReviews>(html`<ia-reviews></ia-reviews>`);

    const reviewForm = el.shadowRoot?.querySelector(
      'ia-review-form',
    ) as ReviewForm;
    expect(reviewForm).not.to.exist;

    const noReviewsMsg = el.shadowRoot?.querySelector(
      '.message',
    ) as HTMLDivElement;
    expect(noReviewsMsg).to.exist;
    expect(noReviewsMsg?.innerText).to.include(
      'There are no reviews yet. Be the first one to write a review.',
    );
  });

  it('displays the review form on no reviews button click', async () => {
    const el = await fixture<IaReviews>(html`<ia-reviews></ia-reviews>`);

    const noReviewsBtn = el.shadowRoot?.querySelector(
      '.no-reviews-btn',
    ) as HTMLButtonElement;
    expect(noReviewsBtn).to.exist;
    noReviewsBtn.click();

    await el.updateComplete;
    const reviewForm = el.shadowRoot?.querySelector(
      'ia-review-form',
    ) as ReviewForm;
    expect(reviewForm).to.exist;
  });

  it('does not display the review form by default', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .reviews=${mockReviews}></ia-reviews>`,
    );

    const reviewForm = el.shadowRoot?.querySelector(
      'ia-review-form',
    ) as ReviewForm;
    expect(reviewForm).not.to.exist;
  });

  it('displays the review form if requested', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        .displayReviewForm=${true}
      ></ia-reviews>`,
    );

    await el.updateComplete;
    const reviewForm = el.shadowRoot?.querySelector(
      'ia-review-form',
    ) as ReviewForm;
    expect(reviewForm).to.exist;
    const reviews = el.shadowRoot?.querySelectorAll('ia-review');
    expect(reviews?.length).to.equal(2);
  });

  it('fully disables the reviews if requested', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        ?reviewsDisabled=${true}
      ></ia-reviews>`,
    );

    const reviews = el.shadowRoot?.querySelectorAll('ia-review');
    expect(reviews?.length).to.equal(0);

    const disabledMessage = el.shadowRoot?.querySelector(
      '.message',
    ) as HTMLDivElement;
    expect(disabledMessage.innerText).to.include(
      'Reviews have been disabled for this item.',
    );

    const addEditButton = el.shadowRoot?.querySelector('.add-edit-btn');
    expect(addEditButton).not.to.exist;
  });

  it('displays reviews but prevents adding reviews if frozen', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        ?reviewsFrozen=${true}
      ></ia-reviews>`,
    );

    const reviews = el.shadowRoot?.querySelectorAll('ia-review');
    expect(reviews?.length).to.equal(2);

    const frozenMessage = el.shadowRoot?.querySelector(
      '.message',
    ) as HTMLDivElement;
    expect(frozenMessage.innerText).to.include(
      'Reviews can no longer be added to this item.',
    );

    const addEditButton = el.shadowRoot?.querySelector('.add-edit-btn');
    expect(addEditButton).not.to.exist;
  });

  it('shows the correct message if reviews frozen and no reviews yet', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews ?reviewsFrozen=${true}></ia-reviews>`,
    );

    const frozenMessage = el.shadowRoot?.querySelector(
      '.message',
    ) as HTMLDivElement;
    expect(frozenMessage.innerText).to.include(
      'Reviews cannot be added to this item.',
    );

    const addEditButton = el.shadowRoot?.querySelector('.add-edit-btn');
    expect(addEditButton).not.to.exist;
  });

  it('closes the review form if requested', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        .displayReviewForm=${true}
      ></ia-reviews>`,
    );

    let reviewForm = el.shadowRoot?.querySelector('ia-review-form');
    expect(reviewForm).to.exist;

    const event = new CustomEvent('reviewEditCanceled');
    reviewForm?.dispatchEvent(event);

    await el.updateComplete;

    reviewForm = el.shadowRoot?.querySelector('ia-review-form');
    expect(reviewForm).not.to.exist;
  });

  it('also hides the reviews if the review form is closed and there are no reviews', async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews .displayReviewForm=${true}></ia-reviews>`,
    );

    let reviewForm = el.shadowRoot?.querySelector('ia-review-form');
    expect(reviewForm).to.exist;

    const event = new CustomEvent('reviewEditCanceled');
    reviewForm?.dispatchEvent(event);

    await el.updateComplete;

    reviewForm = el.shadowRoot?.querySelector('ia-review-form');
    expect(reviewForm).not.to.exist;
    const noReviewsMsg = el.shadowRoot?.querySelector(
      '.message',
    ) as HTMLDivElement;
    expect(noReviewsMsg).to.exist;
    expect(noReviewsMsg?.innerText).to.include(
      'There are no reviews yet. Be the first one to write a review.',
    );
  });

  it("updates the patron's own review if requested", async () => {
    const el = await fixture<IaReviews>(
      html`<ia-reviews
        .reviews=${mockReviews}
        .displayReviewForm=${true}
      ></ia-reviews>`,
    );

    let reviewForm = el.shadowRoot?.querySelector('ia-review-form');
    expect(reviewForm).to.exist;

    const event = new CustomEvent<Review>('reviewUpdated', {
      detail: new Review({
        reviewtitle: 'I am a test!',
        reviewbody: 'Testing 123',
      }),
    });
    reviewForm?.dispatchEvent(event);

    await el.updateComplete;

    reviewForm = el.shadowRoot?.querySelector('ia-review-form');
    expect(reviewForm).not.to.exist;
    const patronsOwnReview = el.shadowRoot?.querySelectorAll(
      'ia-review',
    )[0] as IaReview;
    expect(patronsOwnReview.review?.reviewtitle).to.equal('I am a test!');
    expect(patronsOwnReview?.review?.reviewbody).to.equal('Testing 123');
  });
});
