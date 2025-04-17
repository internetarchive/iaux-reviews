import { expect } from '@open-wc/testing';
import linkUrlsInText from '../../src/utils/link-urls-in-text';

describe('linkUrlsInText', () => {
  it('leaves a string with no URLs unchanged', () => {
    expect(linkUrlsInText('I am a test')).to.equal('I am a test');
  });

  it('preserves existing URLs in the text', () => {
    expect(linkUrlsInText('I am a <a href="archive.org">test</a>')).to.equal(
      'I am a <a href="archive.org">test</a>',
    );
  });

  it('converts URLs from text into live links', () => {
    expect(linkUrlsInText('I am a test for archive.org')).to.equal(
      'I am a test for <a href="archive.org" rel="ugc nofollow" target="_blank">archive.org</a>',
    );
  });

  it('preserves existing URLs while converting others', () => {
    expect(
      linkUrlsInText('I am a <a href="archive.org">test</a> for archive.org'),
    ).to.equal(
      'I am a <a href="archive.org">test</a> for <a href="archive.org" rel="ugc nofollow" target="_blank">archive.org</a>',
    );
  });
});
