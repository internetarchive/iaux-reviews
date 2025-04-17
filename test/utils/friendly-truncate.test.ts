import { expect } from '@open-wc/testing';
import friendlyTruncate from '../../src/utils/friendly-truncate';

describe('friendlyTruncate', () => {
  it('leaves a field shorter than the limit unchanged', () => {
    expect(friendlyTruncate('I am a test', 12)).to.equal('I am a test');
  });

  it('truncates a field longer than the limit', () => {
    expect(friendlyTruncate('I am a test', 6)).to.equal('I am a...');
  });

  it('truncates at the last space after the limit, if possible', () => {
    expect(friendlyTruncate('I am a test', 3)).to.equal('I am...');
  });

  it('does not truncate at the last space after the limit if more than 20 chars after', () => {
    expect(
      friendlyTruncate(
        'I am a test1234567891231173648761348762312412412412441398 45729357892375',
        9,
      ),
    ).to.equal('I am a te...');
  });

  it('does not truncate at the last space if there is no space after the max length', () => {
    expect(friendlyTruncate('I am a test12345', 9)).to.equal('I am a te...');
  });

  it('does not truncate at the last space if requested not to', () => {
    expect(friendlyTruncate('I am a test', 3, false)).to.equal('I a...');
  });

  it('includes any anchor closing tags, if less than 20 chars after the max-length', () => {
    expect(
      friendlyTruncate(
        'I am a test <a href="archive.org">I love testing!</a> I just love it.',
        30,
      ),
    ).to.equal('I am a test <a href="archive.org">I love testing!</a>...');
  });

  it('does not add ellipses if the closing anchor tag is at the end of the string', () => {
    expect(
      friendlyTruncate(
        'I am a test <a href="archive.org">I love testing!</a>',
        30,
      ),
    ).to.equal('I am a test <a href="archive.org">I love testing!</a>');
  });

  it('truncates before the last opening tag if the closing tag is too far from max-length', () => {
    expect(
      friendlyTruncate(
        'I am a test <a href="archive.org">I love testing! I just love it so much. I really do. </a>',
        30,
      ),
    ).to.equal('I am a test ...');
  });

  it('can handle multiple links', () => {
    expect(
      friendlyTruncate(
        'I am <a href="archive.org">a test!</a> and wow I love testing. <a href="archive.org>Don\'t you!</a> I really do.',
        78,
      ),
    ).to.equal(
      'I am <a href="archive.org">a test!</a> and wow I love testing. <a href="archive.org>Don\'t you!</a>...',
    );
  });
});
