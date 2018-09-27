/**
 * This is Vue Design System’s helper util for code tabs
 */

export default {
  clean() {
    const oldElem = document.querySelector(".vueds-html")
    const oldTabs = document.querySelector(".vueds-tabs")
    if (oldElem) {
      oldElem.parentNode.removeChild(oldElem)
    }
    if (oldTabs) {
      oldTabs.parentNode.removeChild(oldTabs)
    }
  },
  create() {
    const tabs = document.createElement("div")
    tabs.className = "vueds-tabs"
    tabs.innerHTML =
      "<button class='vueds-tab vue vueds-tab--active'>VUE</button><button class='vueds-tab html'>HTML</button>"
    return tabs
  },
  init() {
    const tabs = document.querySelectorAll(".vueds-tab")
    if (tabs) {
      tabs.forEach(function(element) {
        element.addEventListener("click", event => {
          event.preventDefault()
          document.querySelector(".vueds-tab--active").classList.remove("vueds-tab--active")
          element.classList.add("vueds-tab--active")
          document.querySelector(".vueds-hidden").classList.remove("vueds-hidden")
          if (event.target.classList.contains("html")) {
            const container = document.querySelector("article div[class^='rsg--tab']")
            container.querySelector("div").classList.add("vueds-hidden")
          } else {
            document.querySelector(".vueds-html").classList.add("vueds-hidden")
          }
        })
      })
    }
  },
}
