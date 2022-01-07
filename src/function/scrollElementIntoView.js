/** Scrolls the element into view
 * Manually created since Safari does not support the native one inside an iframe
 */
export const scrollElementIntoView = (element, behavior) => {
  let scrollTop = window.pageYOffset || element.scrollTop;

  //   Furthermore, if you have for example a header outside the iframe
  //   you need to factor in its dimensions when calculating the position to scroll to
  const headerOutsideIframe = document.getElementById("header").clientHeight;

  const finalOffset =
    element.getBoundingClientRect().top + scrollTop + headerOutsideIframe;

  window.parent.scrollTo({
    top: finalOffset,
    behavior: behavior || "auto",
  });
};
