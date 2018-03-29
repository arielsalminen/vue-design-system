/**
 * This is Vue Design System’s helper util that
 * highlights the currently active nav item.
 */

export default {
  methods: {
    clearActiveLinks() {
      const activeLinks = document.querySelectorAll(".vueds-active")
      activeLinks.forEach(function(element) {
        element.classList.remove("vueds-active")
      })
    },
  },
  mounted() {
    const currentURL = window.location.hash.split("?")[0].replace("%20", " ")
    const sidebar = document.querySelector("div[class^='rsg--sidebar']")
    const navLinks = sidebar.querySelectorAll("div[class^='rsg--root'] > ul > li > a")
    const subNavLinks = sidebar.querySelectorAll("div[class^='rsg--root'] > ul > li ul a")
    const currentPage = sidebar.querySelector("div[class^='rsg--root'] > ul > li > a[href='/" + currentURL + "']")
    const search = sidebar.querySelector("div[class^='rsg--search'] input")
    const self = this

    if (currentURL && currentPage) {
      currentPage.parentNode.classList.add("vueds-active")
    }

    if (search && !search.classList.contains("set")) {
      search.setAttribute("placeholder", "Type to filter")
    }

    if (navLinks) {
      navLinks.forEach(function(element) {
        element.addEventListener("click", function() {
          self.clearActiveLinks()
          this.parentNode.classList.add("vueds-active")
        })
      })
    }

    if (subNavLinks) {
      subNavLinks.forEach(function(element) {
        element.addEventListener("click", function() {
          self.clearActiveLinks()
          this.parentNode.parentNode.parentNode.classList.add("vueds-active")
        })
      })
    }
  },
}
