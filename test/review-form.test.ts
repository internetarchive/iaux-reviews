import { html, fixture, expect } from '@open-wc/testing';

import type { ReviewForm } from '../src/review-form';
import type { Review } from '../src/types/types';
import '../src/review-form';

const mockOldReview: Review = {
  stars: 5,
  subject: 'What a cool book!',
  body: 'I loved it.',
};

describe('ReviewForm', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form></ia-review-form>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });

  it('renders a basic form', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form></ia-review-form>`,
    );

    const form = el.shadowRoot?.querySelector('form');
    expect(form).to.exist;
  });

  it('uses the correct endpoint for form submission', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form></ia-review-form>`,
    );

    const form = el.shadowRoot?.querySelector('form');
    expect(form?.action).to.contain('/write-review.php');
  });

  it('uses a custom base host for form submission if desired', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .baseHost=${'https://archive.org'}
      ></ia-review-form>`,
    );

    const form = el.shadowRoot?.querySelector('form');
    expect(form?.action).to.equal('https://archive.org/write-review.php');
  });

  it('uses a custom endpoint path for form submission if desired', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .baseHost=${'https://archive.org'}
        .endpointPath=${'/foo'}
      ></ia-review-form>`,
    );

    const form = el.shadowRoot?.querySelector('form');
    expect(form?.action).to.equal('https://archive.org/foo');
  });

  it('renders any errors that are passed in', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .errors=${['Too good of a review.', 'Please make it worse.']}
      ></ia-review-form>`,
    );

    const errors = el.shadowRoot?.querySelector('.errors') as HTMLDivElement;
    expect(errors?.innerText).to.equal(
      'Too good of a review. Please make it worse.',
    );
  });

  it('does not render the error div if no errors are passed in', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form></ia-review-form>`,
    );

    const errors = el.shadowRoot?.querySelector('.errors') as HTMLDivElement;
    expect(errors).not.to.exist;
  });

  it('prefills the old review body if provided', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .oldReview=${mockOldReview}></ia-review-form>`,
    );

    const subjectInput = el.shadowRoot?.querySelector(
      'input[name="field_reviewtitle"]',
    ) as HTMLInputElement;
    expect(subjectInput).to.exist;
    expect(subjectInput.value).to.equal('What a cool book!');
  });

  it('prefills the old review body if provided', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .oldReview=${mockOldReview}></ia-review-form>`,
    );

    const bodyInput = el.shadowRoot?.querySelector(
      'textarea[name="field_reviewbody"]',
    ) as HTMLInputElement;
    expect(bodyInput).to.exist;
    expect(bodyInput.value).to.equal('I loved it.');
  });

  it('prefills the hidden star input if non-zero number provided', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .oldReview=${mockOldReview}></ia-review-form>`,
    );

    const starsInput = el.shadowRoot?.querySelector(
      'input[name="field_stars"]',
    ) as HTMLInputElement;
    expect(starsInput).to.exist;
    expect(starsInput.value).to.equal('5');
  });

  it('shows the same number of selected stars as rating', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .oldReview=${mockOldReview}></ia-review-form>`,
    );

    const selectedStars = el.shadowRoot?.querySelectorAll('.star-selected');
    expect(selectedStars).to.exist;
    expect(selectedStars?.length).to.equal(5);
  });

  it('shows the same number of unselected stars as rating', async () => {
    const threeStarReview = { ...mockOldReview };
    threeStarReview.stars = 3;

    const el = await fixture<ReviewForm>(
      html`<ia-review-form .oldReview=${threeStarReview}></ia-review-form>`,
    );

    const selectedStars = el.shadowRoot?.querySelectorAll('.star-selected');
    const unselectedStars = el.shadowRoot?.querySelectorAll('.star-unselected');
    expect(selectedStars).to.exist;
    expect(unselectedStars).to.exist;
    expect(selectedStars?.length).to.equal(3);
    expect(unselectedStars?.length).to.equal(2);
  });

  it('changes the stars on star click', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .oldReview=${mockOldReview}></ia-review-form>`,
    );

    const secondStar = el.shadowRoot?.querySelector(
      '.star-2',
    ) as HTMLImageElement;
    secondStar!.click();

    await el.updateComplete;

    const selectedStars = el.shadowRoot?.querySelectorAll('.star-selected');
    const unselectedStars = el.shadowRoot?.querySelectorAll('.star-unselected');
    expect(selectedStars?.length).to.equal(2);
    expect(unselectedStars?.length).to.equal(3);

    const starsInput = el.shadowRoot?.getElementById(
      'stars-input',
    ) as HTMLInputElement;
    expect(starsInput?.value).to.equal('2');
  });

  it('clears the stars if current star rating clicked', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .oldReview=${mockOldReview}></ia-review-form>`,
    );

    const currentStar = el.shadowRoot?.querySelector(
      '.star-5',
    ) as HTMLImageElement;
    currentStar!.click();

    await el.updateComplete;

    const selectedStars = el.shadowRoot?.querySelectorAll('.star-selected');
    const unselectedStars = el.shadowRoot?.querySelectorAll('.star-unselected');
    expect(selectedStars).to.be.empty;
    expect(unselectedStars?.length).to.equal(5);

    const starsInput = el.shadowRoot?.getElementById(
      'stars-input',
    ) as HTMLInputElement;
    expect(starsInput?.value).to.equal('0');
  });

  it('clears the stars if clear button clicked', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .oldReview=${mockOldReview}></ia-review-form>`,
    );

    const clearBtn = el.shadowRoot?.querySelector(
      '.clear-stars-btn',
    ) as HTMLButtonElement;
    clearBtn!.click();

    await el.updateComplete;

    const selectedStars = el.shadowRoot?.querySelectorAll('.star-selected');
    const unselectedStars = el.shadowRoot?.querySelectorAll('.star-unselected');
    expect(selectedStars).to.be.empty;
    expect(unselectedStars?.length).to.equal(5);

    const starsInput = el.shadowRoot?.getElementById(
      'stars-input',
    ) as HTMLInputElement;
    expect(starsInput?.value).to.equal('0');
  });

  it('prefills the identifier if provided', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .identifier=${'foo'}></ia-review-form>`,
    );

    const identifierInput = el.shadowRoot?.querySelector(
      'input[name="identifier"]',
    ) as HTMLInputElement;
    expect(identifierInput).to.exist;
    expect(identifierInput.value).to.equal('foo');
  });

  it('shows a cancel button that routes to the detail page if identifier provided', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .identifier=${'foo'}></ia-review-form>`,
    );

    const cancelBtn = el.shadowRoot?.querySelector(
      '*[data-testid=cancel-btn]',
    ) as HTMLAnchorElement;
    expect(cancelBtn).to.exist;
    expect(cancelBtn.href).to.contain('/details/foo');
  });

  it('prefills the token if provided', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .token=${'12345a'}></ia-review-form>`,
    );

    const tokenInput = el.shadowRoot?.querySelector(
      'input[name="field_reviewtoken"]',
    ) as HTMLInputElement;
    expect(tokenInput).to.exist;
    expect(tokenInput.value).to.equal('12345a');
  });
});
