import { expect } from '@open-wc/testing';
import collapseSpace from '../../src/utils/collapse-space';

describe('collapseSpace', () => {
  it('leaves a field with no extra spaces unchanged', () => {
    expect(collapseSpace('I am a test')).to.equal('I am a test');
  });

  it('strips leading and trailing whitespace', () => {
    expect(collapseSpace('     I am a test    ')).to.equal('I am a test');
  });

  it('collapses internal extra whitespace', () => {
    expect(collapseSpace('I       am a     test')).to.equal('I am a test');
  });

  it('flattens existing returns', () => {
    expect(collapseSpace('I am a test\n\n\n\nYes I am.')).to.equal(
      'I am a test<br />Yes I am.',
    );
  });

  it('flattens existing \r\n returns', () => {
    expect(collapseSpace('I am a test\r\n\r\n\r\n\r\nYes I am.')).to.equal(
      'I am a test<br />Yes I am.',
    );
  });

  it('flattens duplicate line breaks', () => {
    expect(collapseSpace('I am a test<br><br><br>Yes I am.')).to.equal(
      'I am a test<br />Yes I am.',
    );

    expect(collapseSpace('I am a test<br  /><br /><br />Yes I am.')).to.equal(
      'I am a test<br />Yes I am.',
    );

    expect(collapseSpace('I am a test<br></br>Yes I am.')).to.equal(
      'I am a test<br />Yes I am.',
    );

    expect(collapseSpace('I am a test<br></br><br></br>Yes I am.')).to.equal(
      'I am a test<br />Yes I am.',
    );
  });

  it('flattens mixed line breaks', () => {
    expect(
      collapseSpace('I am a test\r\n\r\n\n\n<br></br><br />Yes I am.'),
    ).to.equal('I am a test<br />Yes I am.');
  });
});
