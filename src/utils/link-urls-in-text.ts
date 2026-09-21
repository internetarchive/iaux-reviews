/**
 * This is not designed to capture all valid URLs but simply the most common ones.
 * Highlights:
 * - Optional "http://" or "https://"
 * - Capital letter only captured if at beginning of hostname, to avoid false positives when
 *   people omit spaces e.g. "It's great.Right?"
 * - Unlimited hostname parts, separated by periods
 * - Any number of subdirectories/paths
 * - Optional querystring parameters
 * - Optional anchor
 */
const URL_REGEXP =
  /(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;

/**
 * Transforms any links in text into live clickable anchor tags.
 * Adds rel="ugc nofollow" to each for spam mitigation.
 *
 * @param {string} text The text to be linked
 * @returns {string} The text with live links added
 */
export default function linkUrlsInText(text: string): string {
  // Protect existing links by ignoring them in search. Keep this pattern free of
  // lookbehind assertions: Safari below 16.4 treats one as a syntax error and
  // fails to load the module at all.
  const textWithExistingLinksPreserved = text.replace(
    /href="([^"]+)"/,
    (_match, url: string) => `href="${url.replace('.', '__DOT__')}"`,
  );

  // Add live links
  const textWithLiveLinks = textWithExistingLinksPreserved.replace(
    URL_REGEXP,
    match =>
      (match = `<a href="${!match.match(/^(https|http)/) ? 'https://' + match : match}" rel="ugc nofollow" target="_blank">${match}</a>`),
  );

  // Restore existing links
  return textWithLiveLinks.replace('__DOT__', '.');
}
