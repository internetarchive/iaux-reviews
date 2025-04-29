import { expect } from '@open-wc/testing';
import { truncateScreenname } from '../../src/utils/truncate-screenname';
import { html } from 'lit';
import { fixture } from '@open-wc/testing-helpers';

describe('truncateScreenname', () => {
  it('leaves a screenname with fewer than 40 chars unchanged', () => {
    expect(truncateScreenname('test')).to.equal('test');
  });

  it('correctly truncates a longer screenname', async () => {
    const truncatedHTML = truncateScreenname(
      'test567891123456789212345678931234567894123456789',
    );
    expect(truncatedHTML).to.exist;

    const el = (await fixture(html`${truncatedHTML}`)) as HTMLSpanElement;
    expect(el).to.exist;
    expect(el.nodeName.toLowerCase()).to.equal('span');
    expect(el.title).to.equal(
      'test567891123456789212345678931234567894123456789',
    );
    expect(el.textContent).to.equal(
      'test567891123456789212345678931234567894...',
    );
  });

  it('can handle a falsey input', () => {
    expect(truncateScreenname('')).to.equal('');
  });
});
