/**
 * This is Vue Design System’s helper util that makes
 * sure that filtering will reveal hidden links too.
 */

export default {
  methods: {
    showLinks() {
      const links = document.querySelectorAll(
        "div[class^='rsg--sidebar'] ul ul[class^='rsg--list']"
      )
      if (links) {
        ;[].forEach.call(links, function(element) {
          element.classList.add("vueds-visible")
        })
      }
    },
    hideLinks() {
      const activeLinks = document.querySelectorAll(".vueds-visible")
      if (activeLinks) {
        ;[].forEach.call(activeLinks, function(element) {
          element.classList.remove("vueds-visible")
        })
      }
    },
    init() {
      const search = document.querySelector("div[class^='rsg--search'] input")
      let writing = false
      if (search) {
        search.addEventListener("keydown", () => {
          if (!writing || search.value) {
            writing = true
            if (this.showLinks) {
              this.showLinks()
            } else {
              this.methods.showLinks()
            }
          } else {
            if (this.hideLinks) {
              this.hideLinks()
            } else {
              this.methods.hideLinks()
            }
            writing = false
          }
        })
        search.addEventListener("blur", event => {
          if (event.target && event.target.value === "") {
            if (this.hideLinks) {
              this.hideLinks()
            } else {
              this.methods.hideLinks()
            }
          }
        })
      }
    },
  },
  mounted() {
    this.init()
  },
}
