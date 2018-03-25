/**
 * Provides collapsible nav for Vue Styleguidist
 */

export default {
  methods: {
    clearActiveLinks() {
      const activeLinks = document.querySelectorAll(".vueds-active")
      ;[].forEach.call(activeLinks, function(element) {
        element.classList.remove("vueds-active")
      })
    },
  },
  mounted() {
    const currentURL = window.location.hash
    const sidebar = document.querySelector("div[class^='rsg--sidebar']")
    const navLinks = sidebar.querySelectorAll("div[class^='rsg--root'] > ul > li > a")
    const subNavLinks = sidebar.querySelectorAll("div[class^='rsg--root'] > ul > li ul a")
    const currentPage = sidebar.querySelector("div[class^='rsg--root'] > ul > li > a[href='/" + currentURL + "']")
    const self = this

    if (currentURL && currentPage) {
      currentPage.parentNode.classList.add("vueds-active")
    }

    if (navLinks) {
      ;[].forEach.call(navLinks, function(element) {
        element.addEventListener("click", function() {
          self.clearActiveLinks()
          this.parentNode.classList.add("vueds-active")
        })
      })
    }

    if (subNavLinks) {
      ;[].forEach.call(subNavLinks, function(element) {
        element.addEventListener("click", function() {
          self.clearActiveLinks()
          this.parentNode.parentNode.parentNode.classList.add("vueds-active")
        })
      })
    }
  },
}
