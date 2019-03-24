/**
 * clamp function: Returns a number whose value is limited to the given range.
 *
 * @min {number} minimum number in range
 * @max {number} maximum number in range
 */
export const clamp = (min, max) => {
  if (typeof max === 'undefined') {
    max = min
    min = 0
  }

  if (min > max) {
    var tmp = min
    min = max
    max = tmp
  }

  return value => Math.min(Math.max(value, min), max)
}
