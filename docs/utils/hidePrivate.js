/**
 * This is “a hack” to hide the private components from the styleguide.
 * See styleguide.config.js for more information.
 */

export default {
  mounted() {
    if (!document.querySelector(".hide-private")) {
      const navHeading = document.querySelector("a[href='/#!/Private Components']")
      const gettingStarted = document.querySelector("ul a[href='/#!/Getting Started']")
      const placeholderSections = document.querySelectorAll("ul a[href$='?id=section']")
      console.log(placeholderSections)
      if (navHeading && navHeading.parentNode) {
        navHeading.parentNode.classList.add("hide-private")
      }
      if (gettingStarted && gettingStarted.parentNode) {
        gettingStarted.parentNode.querySelector("ul").classList.add("hide-private")
      }
      if (placeholderSections) {
        ;[].forEach.call(placeholderSections, function(element) {
          element.parentNode.classList.add("hide-private")
        })
      }
    }
  },
}
