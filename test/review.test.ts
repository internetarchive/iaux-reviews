import { html, fixture, expect } from '@open-wc/testing';

import type { IaReview, ReviewForRender } from '../src/review';
import { Review } from '@internetarchive/metadata-service';
import '../src/review';

const mockReview: ReviewForRender = {
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

describe('IaReview', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });

  it('renders an error if no review provided', async () => {
    const el = await fixture<IaReview>(html`<ia-review></ia-review>`);

    const error = el.shadowRoot?.querySelector('.error');
    expect(error).to.exist;
  });

  it('adds the DOM ID to the review', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const review = el.shadowRoot?.querySelector('.review');
    expect(review?.id).to.equal('12345');
  });

  it('always renders the reviewer screenname', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const topLine = el.shadowRoot?.querySelector('.top-line');
    expect(topLine?.textContent).to.contain('Foo Bar');
  });

  it('adds a link to the reviewer details page if itemname provided', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const reviewerLink = el.shadowRoot?.querySelector(
      '.reviewer-link',
    ) as HTMLAnchorElement;
    expect(reviewerLink?.href).to.contain('/details/foo-bar');
  });

  it('uses a custom basehost for the reviewer details link if requested', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review
        .review=${mockReview}
        .baseHost=${'foo.archive.org'}
      ></ia-review>`,
    );

    const reviewerLink = el.shadowRoot?.querySelector(
      '.reviewer-link',
    ) as HTMLAnchorElement;
    expect(reviewerLink?.href).to.contain('foo.archive.org/details/foo-bar');
  });

  it('defaults to archive.org if no custom host requested', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const reviewerLink = el.shadowRoot?.querySelector(
      '.reviewer-link',
    ) as HTMLAnchorElement;
    expect(reviewerLink?.href).to.contain(
      'https://archive.org/details/foo-bar',
    );
  });

  it('does not add a link to the reviewer details page if itemname not provided', async () => {
    const reviewNoItemname = Object.assign({}, mockReview);
    reviewNoItemname.itemname = undefined;

    const el = await fixture<IaReview>(
      html`<ia-review .review=${reviewNoItemname}></ia-review>`,
    );

    const reviewerLink = el.shadowRoot?.querySelector('.reviewer-link');
    expect(reviewerLink).not.to.exist;
  });

  it('adds the correct number of stars, if provided', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const reviewStars = el.shadowRoot?.querySelectorAll('.review-star');
    expect(reviewStars?.length).to.equal(5);
  });

  it('adds a title with the number of stars', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const reviewStarSection = el.shadowRoot?.querySelector(
      '.review-stars',
    ) as HTMLDivElement;
    expect(reviewStarSection?.title).to.equal('5 out of 5 stars');
  });

  it('includes a prettified version of the create date', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const topLine = el.shadowRoot?.querySelector('.top-line');
    expect(topLine?.textContent).to.contain('February 7, 2025');
  });

  it('adds (edited) if the review date differs from the create date', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const topLine = el.shadowRoot?.querySelector('.top-line');
    expect(topLine?.textContent).to.contain('February 7, 2025 (edited)');
  });

  it('does not add (edited) if the review date does not differ from the create date', async () => {
    const uneditedReview = {
      rawValue: new Review({ stars: 5 }),
      stars: 5,
      reviewtitle: 'What a cool book!',
      reviewbody: 'I loved it.',
      reviewer: 'Foo Bar',
      reviewdate: new Date('02/07/2025'),
      createdate: new Date('02/07/2025'),
      screenname: 'Foo Bar',
      itemname: 'foo-bar',
      domId: '12345',
    };

    const el = await fixture<IaReview>(
      html`<ia-review .review=${uneditedReview}></ia-review>`,
    );

    const topLine = el.shadowRoot?.querySelector('.top-line');
    expect(topLine?.textContent).to.contain('February 7, 2025');
    expect(topLine?.textContent).not.to.contain('(edited)');
  });

  it('renders the review subject', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const subject = el.shadowRoot?.querySelector('.subject');
    expect(subject?.textContent).to.contain('What a cool book!');
  });

  it('renders the review body', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const body = el.shadowRoot?.querySelector('.body');
    expect(body?.textContent).to.contain('I loved it.');
  });

  it('truncates the review subject if too long', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review
        .review=${mockReview}
        .maxSubjectLength=${6}
      ></ia-review>`,
    );

    const subject = el.shadowRoot?.querySelector('.subject');
    expect(subject?.textContent).to.contain('What a...');
  });

  it('truncates the review body if too long', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview} .maxBodyLength=${6}></ia-review>`,
    );

    const subject = el.shadowRoot?.querySelector('.body');
    expect(subject?.textContent).to.contain('I love...');
  });

  it('shows a more button if subject/body are truncated', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review
        .review=${mockReview}
        .maxSubjectLength=${6}
        .maxBodyLength=${7}
      ></ia-review>`,
    );

    const moreBtn = el.shadowRoot?.querySelector('.more-btn');
    expect(moreBtn).to.exist;
  });

  it('does not show a more button if subject/body are not truncated', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const moreBtn = el.shadowRoot?.querySelector('.more-btn');
    expect(moreBtn).not.to.exist;
  });

  it('expands text on more button click', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review
        .review=${mockReview}
        .maxSubjectLength=${6}
        .maxBodyLength=${7}
      ></ia-review>`,
    );

    const subject = el.shadowRoot?.querySelector('.subject');
    const body = el.shadowRoot?.querySelector('.body');
    expect(subject?.textContent).to.contain('What a...');
    expect(body?.textContent).to.contain('I loved...');

    const moreBtn = el.shadowRoot?.querySelector(
      '.more-btn',
    ) as HTMLButtonElement;
    expect(moreBtn).to.exist;

    moreBtn.click();
    await el.updateComplete;

    expect(subject?.textContent).to.contain('What a cool book!');
    expect(body?.textContent).to.contain('I loved it.');
  });

  it('hides expanded text on less button click', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review
        .review=${mockReview}
        .maxSubjectLength=${6}
        .maxBodyLength=${7}
      ></ia-review>`,
    );

    const moreBtn = el.shadowRoot?.querySelector(
      '.more-btn',
    ) as HTMLButtonElement;
    expect(moreBtn).to.exist;

    moreBtn.click();
    await el.updateComplete;

    const subject = el.shadowRoot?.querySelector('.subject');
    const body = el.shadowRoot?.querySelector('.body');
    expect(subject?.textContent).to.contain('What a cool book!');
    expect(body?.textContent).to.contain('I loved it.');

    const lessBtn = el.shadowRoot?.querySelector(
      '.less-btn',
    ) as HTMLButtonElement;
    expect(lessBtn).to.exist;

    lessBtn.click();
    await el.updateComplete;

    expect(subject?.textContent).to.contain('What a...');
    expect(body?.textContent).to.contain('I loved...');
  });
});
