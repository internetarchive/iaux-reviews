import { html, fixture, expect, oneEvent } from '@open-wc/testing';

import type { ReviewForm } from '../src/review-form';
import { Review } from '@internetarchive/metadata-service';
import '../src/review-form';
import { MockRecaptchaManager } from './mocks/mock-recaptcha-manager';

const mockOldReview = new Review({
  stars: 5,
  reviewtitle: 'What a cool book!',
  reviewbody: 'I loved it.',
});

const mockRecaptchaManager = new MockRecaptchaManager();

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

  it('defaults to the correct endpoint for form submission', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form></ia-review-form>`,
    );

    const form = el.shadowRoot?.querySelector('form');
    expect(form?.getAttribute('action')).to.contain('/write-review.php');
  });

  it('uses a custom endpoint path for form submission if desired', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .baseHost=${'https://archive.org'}
        .endpointPath=${'/foo'}
      ></ia-review-form>`,
    );

    const form = el.shadowRoot?.querySelector('form');
    expect(form?.getAttribute('action')).to.equal('https://archive.org/foo');
  });

  it('defaults to the prod base host for form submission', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .identifier=${'foo'}></ia-review-form>`,
    );

    const form = el.shadowRoot?.querySelector('form');
    expect(form?.getAttribute('action')).to.equal(
      'https://archive.org/write-review.php',
    );

    const cancelBtn = el.shadowRoot?.querySelector(
      'a[data-testid=cancel-btn]',
    ) as HTMLAnchorElement;
    expect(cancelBtn.href).to.equal('https://archive.org/details/foo');
  });

  it('uses a custom base host for form submission if desired', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .baseHost=${'https://foo.archive.org'}
        .identifier=${'foo'}
      ></ia-review-form>`,
    );

    const form = el.shadowRoot?.querySelector('form');
    expect(form?.getAttribute('action')).to.equal(
      'https://foo.archive.org/write-review.php',
    );

    const cancelBtn = el.shadowRoot?.querySelector(
      'a[data-testid=cancel-btn]',
    ) as HTMLAnchorElement;
    expect(cancelBtn.href).to.equal('https://foo.archive.org/details/foo');
  });

  it('renders any errors that are passed in', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .prefilledErrors=${['Too good of a review.', 'Please make it worse.']}
      ></ia-review-form>`,
    );

    const errors = el.shadowRoot?.querySelector(
      '.prefilled-errors',
    ) as HTMLDivElement;
    expect(errors?.innerText).to.equal(
      'Too good of a review. Please make it worse.',
    );
  });

  it('does not render the error div if no errors are passed in', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form></ia-review-form>`,
    );

    const errors = el.shadowRoot?.querySelector(
      '.prefilled-errors',
    ) as HTMLDivElement;
    expect(errors).to.be.null;
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

  it('prefills with zero stars if no previous review provided', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form></ia-review-form>`,
    );

    const starsInput = el.shadowRoot?.querySelector(
      'input[name="field_stars"]',
    ) as HTMLInputElement;
    expect(starsInput).to.exist;
    expect(starsInput.value).to.equal('0');
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
    const threeStarReview = new Review({
      stars: 3,
      reviewtitle: 'What a cool book!',
      reviewbody: 'I loved it.',
    });

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
      'a[data-testid=cancel-btn]',
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

  it('adds the recaptcha token on submit if recaptcha manager provided', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .oldReview=${mockOldReview}
        .recaptchaManager=${mockRecaptchaManager}
      ></ia-review-form>`,
    );

    const submitBtn = el.shadowRoot?.querySelector(
      'button[name="submit"]',
    ) as HTMLButtonElement;

    submitBtn?.click();

    const recaptchaFinishedPromise = oneEvent(el, 'recaptchaFinished');
    await recaptchaFinishedPromise;
    await el.updateComplete;

    const recaptchaInput = el.shadowRoot?.querySelector(
      'input[name="g-recaptcha-response"]',
    ) as HTMLInputElement;
    expect(recaptchaInput).to.exist;
    expect(recaptchaInput.value).to.equal('mock-token');
  });

  it('shows an error on submit if no recaptcha manager/widget is provided', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .oldReview=${mockOldReview}></ia-review-form>`,
    );

    const submitBtn = el.shadowRoot?.querySelector(
      'button[name="submit"]',
    ) as HTMLButtonElement;

    submitBtn?.click();

    await el.updateComplete;

    const recaptchaInput = el.shadowRoot?.querySelector(
      'input[name="g-recaptcha-response"]',
    ) as HTMLInputElement;
    expect(recaptchaInput.value).not.to.equal('mock-token');

    const recaptchaErrorDiv = el.shadowRoot?.querySelector('.recaptcha-error');
    expect(recaptchaErrorDiv).to.exist;
  });

  it('skips recaptcha if the bypass switch is activated', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .oldReview=${mockOldReview}
        ?bypassRecaptcha=${true}
        .baseHost=${'#'}
        .endpointPath=${'#'}
      ></ia-review-form>`,
    );

    const submitBtn = el.shadowRoot?.querySelector(
      'button[name="submit"]',
    ) as HTMLButtonElement;

    submitBtn?.click();

    await el.updateComplete;

    const recaptchaInput = el.shadowRoot?.querySelector(
      'input[name="g-recaptcha-response"]',
    ) as HTMLInputElement;
    expect(recaptchaInput.value).not.to.equal('mock-token');

    const recaptchaErrorDiv = el.shadowRoot?.querySelector('.recaptcha-error');
    expect(recaptchaErrorDiv).not.to.exist;
  });

  it('skips recaptcha if the bypass switch is activated, even with recaptcha manager', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .oldReview=${mockOldReview}
        .recaptchaManager=${mockRecaptchaManager}
        ?bypassRecaptcha=${true}
        .baseHost=${'#'}
        .endpointPath=${'#'}
      ></ia-review-form>`,
    );

    const submitBtn = el.shadowRoot?.querySelector(
      'button[name="submit"]',
    ) as HTMLButtonElement;

    submitBtn?.click();

    await el.updateComplete;

    const recaptchaInput = el.shadowRoot?.querySelector(
      'input[name="g-recaptcha-response"]',
    ) as HTMLInputElement;
    expect(recaptchaInput.value).not.to.equal('mock-token');

    const recaptchaErrorDiv = el.shadowRoot?.querySelector('.recaptcha-error');
    expect(recaptchaErrorDiv).not.to.exist;
  });
});
