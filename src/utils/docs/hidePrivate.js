/**
 * This is “a hack” to hide the private components from the styleguide.
 * See styleguide.config.js for more information.
 */
export default {
  mounted() {
    const contentHeading = document.getElementById("private-components")
    const navHeading = document.querySelector("a[href='#private-components']")

    if (contentHeading && navHeading) {
      contentHeading.parentNode.classList.add("hide-private")
      navHeading.parentNode.classList.add("hide-private")
    }
  },
}
