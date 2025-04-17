import DOMPurify from 'dompurify';

const ALLOWED_TAGS = ['a'];

/**
 * Uses DOMpurify to sanitize a given review body.
 * Currently only allows a tags.
 *
 * @param {string} reviewBody The review to be sanitized
 * @returns {string} The sanitized review
 */
export default function sanitizeReviewBody(reviewBody: string): string {
  return DOMPurify.sanitize(reviewBody, { ALLOWED_TAGS: ALLOWED_TAGS });
}
