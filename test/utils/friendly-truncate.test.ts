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
});
