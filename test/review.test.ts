import { html, fixture, expect } from '@open-wc/testing';

import type { IaReview } from '../src/review';
import { Review } from '@internetarchive/metadata-service';
import '../src/review';

const mockReview: Review = new Review({
  stars: 5,
  reviewtitle: 'What a cool book!',
  reviewbody: 'I loved it.',
  reviewer: 'Foo Bar',
  reviewdate: '03/20/2025',
  createdate: '02/07/2025',
  reviewer_itemname: '@foo-bar',
});

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

  it('generates the correct Dom ID for the review', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const review = el.shadowRoot?.querySelector('.review');
    expect(review?.id).to.contain('review-1738');
  });

  it('always renders the reviewer screenname', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const topLine = el.shadowRoot?.querySelector('.top-line');
    expect(topLine?.textContent).to.contain('Foo Bar');
  });

  it('truncates the reviewer screenname if more than 40 characters', async () => {
    const longScreennameReview = new Review({
      reviewer: 'Foo Bar 123456789123456789123456789123456789',
    });

    const el = await fixture<IaReview>(
      html`<ia-review .review=${longScreennameReview}></ia-review>`,
    );

    const topLine = el.shadowRoot?.querySelector('.top-line');
    expect(topLine?.textContent).to.contain(
      'Foo Bar 12345678912345678912345678912345...',
    );
  });

  it('adds a link to the reviewer details page if itemname provided', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const reviewerLink = el.shadowRoot?.querySelector(
      '.reviewer-link',
    ) as HTMLAnchorElement;
    expect(reviewerLink?.href).to.contain('/details/@foo-bar');
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
    expect(reviewerLink?.href).to.contain('foo.archive.org/details/@foo-bar');
  });

  it('defaults to archive.org if no custom host requested', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const reviewerLink = el.shadowRoot?.querySelector(
      '.reviewer-link',
    ) as HTMLAnchorElement;
    expect(reviewerLink?.href).to.contain(
      'https://archive.org/details/@foo-bar',
    );
  });

  it('does not add a link to the reviewer details page if itemname not provided', async () => {
    const reviewNoItemname = new Review({ reviewtitle: 'test' });

    const el = await fixture<IaReview>(
      html`<ia-review .review=${reviewNoItemname}></ia-review>`,
    );

    const reviewerLink = el.shadowRoot?.querySelector('.reviewer-link');
    expect(reviewerLink).to.be.null;
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
      reviewer_itemname: 'foo-bar',
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

    const body = el.shadowRoot?.querySelector('.body');
    expect(body?.textContent).to.contain('I loved...');
  });

  it('can skip truncation if requested', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review
        .review=${mockReview}
        .maxSubjectLength=${6}
        .maxBodyLength=${6}
        ?bypassTruncation=${true}
      ></ia-review>`,
    );

    const subject = el.shadowRoot?.querySelector('.subject');
    expect(subject?.textContent).to.contain('What a cool book!');
    const body = el.shadowRoot?.querySelector('.body');
    expect(body?.textContent).to.contain('I loved it.');
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

  it('does not show a more button if truncation is bypassed', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review
        .review=${mockReview}
        .maxSubjectLength=${6}
        .maxBodyLength=${6}
        ?bypassTruncation=${true}
      ></ia-review>`,
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

  it('removes any HTML tags aside from anchor links prior to render', async () => {
    const mockHTMLReview = new Review({
      reviewtitle: 'What a cool book!',
      reviewbody:
        'I loved it.<img src="foo" /> <b>I am bold!</b> <script>doStuff()</script> <style></style>',
    });

    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockHTMLReview}></ia-review>`,
    );

    const reviewBody = el.shadowRoot?.querySelector('.body');
    expect(reviewBody).to.exist;

    const reviewImages = reviewBody?.querySelectorAll('img');
    expect(reviewImages?.length).to.equal(0);

    const reviewBoldText = reviewBody?.querySelectorAll('b');
    expect(reviewBoldText?.length).to.equal(0);

    const reviewScriptTags = reviewBody?.querySelectorAll('script');
    expect(reviewScriptTags?.length).to.equal(0);

    const reviewStyleTags = reviewBody?.querySelectorAll('style');
    expect(reviewStyleTags?.length).to.equal(0);

    expect(reviewBody?.innerHTML.trim()).to.contain('I loved it. I am bold!');
  });

  it('adds rel and target to anchor links before render', async () => {
    const mockHTMLReview = new Review({
      reviewtitle: 'What a cool book!',
      reviewbody: 'I loved it.<a href="/details/foo">So good!</a>',
    });

    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockHTMLReview}></ia-review>`,
    );

    const reviewBody = el.shadowRoot?.querySelector('.body');
    const reviewLink = reviewBody?.querySelector('a') as HTMLAnchorElement;

    expect(reviewLink).to.exist;
    expect(reviewLink.target).to.equal('_blank');
    expect(reviewLink.rel).to.equal('ugc nofollow');
  });

  it('converts inline links to live anchor links', async () => {
    const mockHTMLReview = new Review({
      reviewtitle: 'What a cool book!',
      reviewbody: 'I loved it. archive.org/details/foo',
    });

    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockHTMLReview}></ia-review>`,
    );

    const reviewBody = el.shadowRoot?.querySelector('.body');
    const reviewLink = reviewBody?.querySelector('a') as HTMLAnchorElement;

    expect(reviewLink).to.exist;
    expect(reviewLink.href).to.equal('https://archive.org/details/foo');
    expect(reviewLink.target).to.equal('_blank');
    expect(reviewLink.rel).to.equal('ugc nofollow');
    expect(reviewLink.innerText).to.equal('archive.org/details/foo');
  });

  it('collapses internal space prior to render', async () => {
    const mockHTMLReview = new Review({
      reviewtitle: 'What a cool book!',
      reviewbody: 'I loved it.\n\n\nSo great.',
    });

    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockHTMLReview}></ia-review>`,
    );

    const reviewBody = el.shadowRoot?.querySelector('.body');
    expect(reviewBody?.innerHTML.trim()).to.contain('I loved it.<br>So great.');
  });

  it('includes a delete button if specified', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview} ?canDelete=${true}></ia-review>`,
    );

    const deleteBtn = el.shadowRoot?.querySelector('.delete-btn');
    expect(deleteBtn).to.exist;
  });

  it('does not include a delete button by default', async () => {
    const el = await fixture<IaReview>(
      html`<ia-review .review=${mockReview}></ia-review>`,
    );

    const deleteBtn = el.shadowRoot?.querySelector('.delete-btn');
    expect(deleteBtn).not.to.exist;
  });
});
