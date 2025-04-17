import { expect } from '@open-wc/testing';
import sanitizeReviewBody from '../../src/utils/sanitize-review-body';

describe('sanitizeReviewBody', () => {
  it('leaves a review body with no HTML tags unchanged', () => {
    expect(sanitizeReviewBody('I am a test')).to.equal('I am a test');
  });

  it('removes images from a given review body', () => {
    expect(sanitizeReviewBody('I am a test <img src="foo" />').trim()).to.equal(
      'I am a test',
    );
  });

  it('removes script tags from the review body', () => {
    expect(
      sanitizeReviewBody('I am a test <script>doStuff()</script>').trim(),
    ).to.equal('I am a test');
  });

  it('preserves links in the review body but adds spam protection', () => {
    expect(
      sanitizeReviewBody('I am a <a href="archive.org">test</a>'),
    ).to.equal('I am a <a href="archive.org" rel="ugc nofollow">test</a>');
  });

  it('preserves text within HTML tags', () => {
    expect(sanitizeReviewBody('I am a <b>very bold</b> test')).to.equal(
      'I am a very bold test',
    );
  });
});
