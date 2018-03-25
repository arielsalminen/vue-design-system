/**
 * Provides collapsible nav for Vue Styleguidist
 */

export default {
  mounted() {
    const currentURL = window.location.hash
    const sidebar = document.querySelector("div[class^='rsg--sidebar']")
    const navLinks = sidebar.querySelectorAll("div[class^='rsg--root'] > ul > li > a")
    const currentPage = sidebar.querySelector("div[class^='rsg--root'] > ul > li > a[href='/" + currentURL + "']")
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
