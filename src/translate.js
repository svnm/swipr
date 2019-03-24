/**
 * translate function: translates to a given position in a given time in milliseconds
 *
 * @to        {number} number in pixels where to translate to
 * @duration  {number} time in milliseconds for the transistion
 * @ease      {string} easing css property
 */
export const translate = (to, duration, ease, style) => {
  if (!style) {
    return
  }

  style.transitionTimingFunction = ease
  style.transitionDuration = duration + 'ms'
  style.transform = 'translate3d(' + to + 'px, 0, 0)'
}
