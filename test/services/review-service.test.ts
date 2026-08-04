import { expect } from '@open-wc/testing';

import { ReviewService } from '../../src/services/review-service';
import { MockFetchHandler } from '../mocks/mock-fetch-handler';

const submission = {
  identifier: 'foo',
  title: 'Great',
  body: 'Really great.',
  stars: '5',
};

const deletion = {
  identifier: 'foo',
  reviewer: 'Joe Blow',
  reviewerItemname: '@joe',
};

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

describe('ReviewService', () => {
  describe('submitReview', () => {
    it('sends the CSRF token as an X-CSRF-Token header', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({ fetchHandler, csrfToken: 'tok123' });

      await service.submitReview(submission);

      expect(fetchHandler.headerOnLastFetch('X-CSRF-Token')).to.equal('tok123');
    });

    it('also sends the token as field_reviewtoken for the legacy endpoint', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({ fetchHandler, csrfToken: 'tok123' });

      await service.submitReview(submission);

      expect(fetchHandler.bodyOnLastFetch().get('field_reviewtoken')).to.equal(
        'tok123',
      );
    });

    it('omits the token entirely when it has none, leaving it to the fetch handler', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({ fetchHandler });

      await service.submitReview(submission);

      expect(fetchHandler.headerOnLastFetch('X-CSRF-Token')).to.be.undefined;
      expect(fetchHandler.bodyOnLastFetch().get('field_reviewtoken')).to.be
        .null;
    });

    it('maps the submission onto the wire field names', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({ fetchHandler });

      await service.submitReview({ ...submission, recaptchaToken: 'rc' });

      const body = fetchHandler.bodyOnLastFetch();
      expect(body.get('identifier')).to.equal('foo');
      expect(body.get('field_reviewtitle')).to.equal('Great');
      expect(body.get('field_reviewbody')).to.equal('Really great.');
      expect(body.get('field_stars')).to.equal('5');
      expect(body.get('g-recaptcha-response')).to.equal('rc');
      expect(body.get('submitter')).to.equal('review-form');
    });

    it('defaults stars to 0 and omits an absent recaptcha token', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({ fetchHandler });

      await service.submitReview({
        identifier: 'foo',
        title: 'Great',
        body: 'Really great.',
      });

      const body = fetchHandler.bodyOnLastFetch();
      expect(body.get('field_stars')).to.equal('0');
      expect(body.get('g-recaptcha-response')).to.be.null;
    });

    it('sends credentials and posts to the configured endpoint', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({
        fetchHandler,
        baseHost: 'https://example.archive.org',
        submitPath: '/services/offshoot/details-page/review.php',
      });

      await service.submitReview(submission);

      expect(fetchHandler.lastFetch.url).to.equal(
        'https://example.archive.org/services/offshoot/details-page/review.php',
      );
      expect(fetchHandler.lastFetch.init?.method).to.equal('POST');
      expect(fetchHandler.lastFetch.init?.credentials).to.equal('include');
    });

    it('defaults to the legacy write endpoint', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({ fetchHandler, baseHost: '' });

      await service.submitReview(submission);

      expect(fetchHandler.lastFetch.url).to.equal('/write-review.php');
    });

    it('reports the error message the backend supplies', async () => {
      const fetchHandler = new MockFetchHandler();
      fetchHandler.response = () =>
        jsonResponse({ success: false, error: 'Reviews are not allowed.' });
      const service = new ReviewService({ fetchHandler });

      const result = await service.submitReview(submission);

      expect(result.success).to.be.false;
      expect(result.error).to.equal('Reviews are not allowed.');
    });

    it('reports failure when the request throws', async () => {
      const fetchHandler = new MockFetchHandler();
      fetchHandler.response = () => {
        throw new Error('network down');
      };
      const service = new ReviewService({ fetchHandler });

      const result = await service.submitReview(submission);

      expect(result.success).to.be.false;
      expect(result.error).to.exist;
    });
  });

  describe('deleteReview', () => {
    it('keeps the CSRF token out of the query string', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({ fetchHandler, csrfToken: 'tok123' });

      await service.deleteReview(deletion);

      expect(fetchHandler.lastFetch.url).to.not.contain('tok123');
      expect(fetchHandler.lastFetch.url).to.not.contain('csrf_token');
      expect(fetchHandler.headerOnLastFetch('X-CSRF-Token')).to.equal('tok123');
    });

    it('sends credentials', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({ fetchHandler });

      await service.deleteReview(deletion);

      expect(fetchHandler.lastFetch.init?.credentials).to.equal('include');
    });

    it('identifies the review by reviewer in the query string', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({ fetchHandler, baseHost: '' });

      await service.deleteReview(deletion);

      const query = new URLSearchParams(
        fetchHandler.lastFetch.url.split('?')[1],
      );
      expect(query.get('identifier')).to.equal('foo');
      expect(query.get('deleteReviewer')).to.equal('Joe Blow');
      expect(query.get('deleteReviewerItemname')).to.equal('@joe');
    });

    it('omits the reviewer itemname when there is none', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({ fetchHandler, baseHost: '' });

      await service.deleteReview({ identifier: 'foo', reviewer: 'Joe Blow' });

      expect(fetchHandler.lastFetch.url).to.not.contain(
        'deleteReviewerItemname',
      );
    });

    it('posts to the legacy endpoint by default', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({ fetchHandler, baseHost: '' });

      await service.deleteReview(deletion);

      expect(fetchHandler.lastFetch.url).to.contain('/edit-reviews.php');
      expect(fetchHandler.lastFetch.init?.method).to.equal('POST');
    });

    it('uses the configured verb and path', async () => {
      const fetchHandler = new MockFetchHandler();
      const service = new ReviewService({
        fetchHandler,
        baseHost: '',
        deletePath: '/services/offshoot/details-page/review.php',
        deleteMethod: 'DELETE',
      });

      await service.deleteReview(deletion);

      expect(fetchHandler.lastFetch.url).to.contain(
        '/services/offshoot/details-page/review.php',
      );
      expect(fetchHandler.lastFetch.init?.method).to.equal('DELETE');
    });

    it('reports failure when the server rejects the request', async () => {
      const fetchHandler = new MockFetchHandler();
      fetchHandler.response = () =>
        jsonResponse(
          { success: false, error: 'You must be logged in to edit reviews' },
          401,
        );
      const service = new ReviewService({ fetchHandler });

      const result = await service.deleteReview(deletion);

      expect(result.success).to.be.false;
      expect(result.error).to.equal('You must be logged in to edit reviews');
    });

    it('reports failure on a non-2xx with no JSON body', async () => {
      const fetchHandler = new MockFetchHandler();
      fetchHandler.response = () =>
        new Response('<html>nope</html>', { status: 500 });
      const service = new ReviewService({ fetchHandler });

      const result = await service.deleteReview(deletion);

      expect(result.success).to.be.false;
      expect(result.error).to.exist;
    });

    it('treats an HTML 200 from the legacy endpoint as success', async () => {
      const fetchHandler = new MockFetchHandler();
      fetchHandler.response = () =>
        new Response('<html>queued</html>', { status: 200 });
      const service = new ReviewService({ fetchHandler });

      const result = await service.deleteReview(deletion);

      expect(result.success).to.be.true;
    });
  });
});
