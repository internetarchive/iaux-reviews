import { html, fixture, expect, oneEvent } from '@open-wc/testing';

import type { ReviewForm } from '../src/review-form';
import { Review } from '@internetarchive/metadata-service';
import '../src/review-form';
import { MockRecaptchaManager } from './mocks/mock-recaptcha-manager';
import { IaReview, ReviewForRender } from '../src/review';

const mockOldReview: ReviewForRender = {
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

  it('replaces the form inputs with an error if an unrecoverable error is passed in, and disables submission', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .unrecoverableError=${'You must be logged in to write reviews.'}
        .oldReview=${mockOldReview}
      ></ia-review-form>`,
    );

    const inputs = el.shadowRoot?.querySelector('.inputs');
    expect(inputs).to.be.null;

    const errorDiv = el.shadowRoot?.querySelector('.unrecoverable-error');
    expect(errorDiv).to.exist;
    expect(errorDiv?.textContent).to.include(
      'You must be logged in to write reviews.',
    );

    const submitBtn = el.shadowRoot?.querySelector('button[type="submit"]');
    expect(submitBtn?.getAttribute('disabled')).to.exist;
  });

  it('does not replace the form inputs if no unrecoverable errors are passed in', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .oldReview=${mockOldReview}></ia-review-form>`,
    );

    const inputs = el.shadowRoot?.querySelector('.inputs');
    expect(inputs).to.exist;

    const errorDiv = el.shadowRoot?.querySelector('.unrecoverable-error');
    expect(errorDiv).not.to.exist;

    const submitBtn = el.shadowRoot?.querySelector('button[type="submit"]');
    expect(submitBtn?.getAttribute('disabled')).not.to.exist;
  });

  it('adds an error div if a recoverable error is passed in, and does not disable submission', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .recoverableError=${'Something went wrong on our end. Please try again.'}
        .oldReview=${mockOldReview}
      ></ia-review-form>`,
    );

    const inputs = el.shadowRoot?.querySelector('.inputs');
    expect(inputs).to.exist;

    const errorDiv = el.shadowRoot?.querySelector('.recoverable-error');
    expect(errorDiv).to.exist;
    expect(errorDiv?.textContent).to.include(
      'Something went wrong on our end. Please try again',
    );

    const submitBtn = el.shadowRoot?.querySelector('button[type="submit"]');
    expect(submitBtn?.getAttribute('disabled')).not.to.exist;
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
    const threeStarReview = {
      rawValue: new Review({ stars: 3 }),
      stars: 3,
      reviewtitle: 'What a cool book!',
      reviewbody: 'I loved it.',
      reviewer: 'Foo Bar',
      reviewdate: new Date('03/20/2025'),
      createdate: new Date('02/07/2025'),
      screenname: 'Foo Bar',
      itemname: 'foo-bar',
      domId: '12345',
    };

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

  /*
    NOTE: These tests temporarily removed because they interfere with the CI.
    Will be re-added when the submission is switched to an AJAX call and more easily intercepted.

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
  });*/

  it('displays a character counter for the subject if max length specified', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .maxSubjectLength=${100}
        .oldReview=${mockOldReview}
      ></ia-review-form>`,
    );

    const subjectCharCounter = el.shadowRoot?.querySelector(
      '.char-count.subject',
    ) as HTMLDivElement;
    expect(subjectCharCounter).to.exist;
    expect(subjectCharCounter?.innerText).to.equal('17/100');
  });

  it('does not display a subject char counter if no max specified', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .oldReview=${mockOldReview}></ia-review-form>`,
    );

    const subjectCharCounter = el.shadowRoot?.querySelector(
      '.char-count.subject',
    ) as HTMLDivElement;
    expect(subjectCharCounter).to.be.null;
  });

  it('shows the correct error states if the subject is too long', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .maxSubjectLength=${10}
        .oldReview=${mockOldReview}
      ></ia-review-form>`,
    );

    const subjectCharCounter = el.shadowRoot?.querySelector(
      '.char-count.subject',
    ) as HTMLDivElement;
    expect(subjectCharCounter?.innerText).to.equal('17/10');

    const subjectInputBox = el.shadowRoot?.getElementById('subject-input');
    expect(subjectInputBox?.className).to.contain('error');

    const submitBtn = el.shadowRoot?.querySelector('button[type="submit"');
    expect(submitBtn?.getAttribute('disabled')).to.exist;
  });

  it('does not show the error states if the subject is not too long', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .maxSubjectLength=${100}
        .oldReview=${mockOldReview}
      ></ia-review-form>`,
    );

    const subjectInputBox = el.shadowRoot?.getElementById('subject-input');
    expect(subjectInputBox?.className).not.to.contain('error');

    const submitBtn = el.shadowRoot?.querySelector('button[type="submit"');
    expect(submitBtn?.getAttribute('disabled')).not.to.exist;
  });

  it('displays a character counter for the body if max length specified', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .maxBodyLength=${100}
        .oldReview=${mockOldReview}
      ></ia-review-form>`,
    );

    const bodyCharCounter = el.shadowRoot?.querySelector(
      '.char-count.body',
    ) as HTMLDivElement;
    expect(bodyCharCounter).to.exist;
    expect(bodyCharCounter?.innerText).to.equal('11/100');
  });

  it('does not display a body char counter if no max specified', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form .oldReview=${mockOldReview}></ia-review-form>`,
    );

    const bodyCharCounter = el.shadowRoot?.querySelector(
      '.char-count.body',
    ) as HTMLDivElement;
    expect(bodyCharCounter).to.be.null;
  });

  it('shows the correct error states if the body is too long', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .maxBodyLength=${10}
        .oldReview=${mockOldReview}
      ></ia-review-form>`,
    );

    const bodyCharCounter = el.shadowRoot?.querySelector(
      '.char-count.body',
    ) as HTMLDivElement;
    expect(bodyCharCounter?.innerText).to.equal('11/10');

    const bodyInputBox = el.shadowRoot?.getElementById('body-input');
    expect(bodyInputBox?.className).to.contain('error');

    const errorMsg = bodyInputBox?.querySelector('.input-error');
    expect(errorMsg).to.exist;

    const submitBtn = el.shadowRoot?.querySelector('button[type="submit"]');
    expect(submitBtn?.getAttribute('disabled')).to.exist;
  });

  it('does not show the error states if the body is not too long', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .maxBodyLength=${100}
        .oldReview=${mockOldReview}
      ></ia-review-form>`,
    );

    const bodyInputBox = el.shadowRoot?.getElementById('body-input');
    expect(bodyInputBox?.className).not.to.contain('error');

    const submitBtn = el.shadowRoot?.querySelector('button[type="submit"');
    expect(submitBtn?.getAttribute('disabled')).not.to.exist;
  });

  it('shows a review instead of the review form if requested', async () => {
    const el = await fixture<ReviewForm>(
      html`<ia-review-form
        .maxBodyLength=${100}
        .oldReview=${mockOldReview}
        .displayMode=${'review'}
      ></ia-review-form>`,
    );

    const reviewElement = el.shadowRoot?.querySelector('ia-review') as IaReview;
    expect(reviewElement).to.exist;
    expect(reviewElement?.review).to.equal(mockOldReview);
  });
});
