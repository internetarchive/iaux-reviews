/**
 * Truncates a string, given the original string and a max length.
 * Continues up to 20 chars after the limit to find the last space,
 * if possible.
 *
 * Avoids breaking up anchor tags.
 *
 * @param {string} str The original string
 * @param {number} maxLength The max length to truncate to
 * @param {boolean} useSpaceTruncation Whether to truncate at the last space
 * @returns {string} The truncated field
 */
export default function friendlyTruncate(
  str: string,
  maxLength: number = 100,
  useSpaceTruncation: boolean = true,
): string {
  if (str.length < maxLength) return str;

  let cutoffPoint = maxLength;

  if (useSpaceTruncation) {
    const lastSpace = str.indexOf(' ', maxLength);

    cutoffPoint =
      lastSpace > maxLength && lastSpace - maxLength <= 20
        ? lastSpace
        : maxLength;
  }

  return str.slice(0, cutoffPoint).concat('...');
}
