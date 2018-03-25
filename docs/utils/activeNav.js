/**
 * Provides collapsible nav for Vue Styleguidist
 */

export default {
  mounted() {
    const currentURL = window.location.hash
    const navLinks = document.querySelectorAll("div[class^='rsg--sidebar'] div[class^='rsg--root'] > ul > li > a")
    const currentPage = document.querySelector("div[class^='rsg--sidebar'] a[href='/" + currentURL + "']")
    if (currentURL && currentPage) {
      currentPage.classList.add("vueds-active")
    }

    if (navLinks) {
      ;[].forEach.call(navLinks, function(element) {
        element.addEventListener("click", function() {
          ;[].forEach.call(navLinks, function(element) {
            element.classList.remove("vueds-active")
          })
          this.classList.add("vueds-active")
        })
      })
    }
  },
}
