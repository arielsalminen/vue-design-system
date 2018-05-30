/**
 * This is Vue Design System’s helper util that makes
 * sure that filtering will reveal hidden links too.
 */

export default {
  showLinks() {
    const links = document.querySelectorAll("div[class^='rsg--sidebar'] ul ul[class^='rsg--list']")

    links.forEach(function(element) {
      element.classList.add("vueds-visible")
    })
  },
  hideLinks() {
    const activeLinks = document.querySelectorAll(".vueds-visible")

    activeLinks.forEach(function(element) {
      element.classList.remove("vueds-visible")
    })
  },
  init() {
    const search = document.querySelector("div[class^='rsg--search'] input")
    let writing = false

    search.addEventListener("input", event => {
      if (!writing || search.value) {
        writing = true
        this.showLinks()
      } else {
        this.hideLinks()
        writing = false
      }
    })

    search.addEventListener("blur", event => {
      if (event.target && event.target.value === "") {
        this.hideLinks()
      }
    })
  },
}
