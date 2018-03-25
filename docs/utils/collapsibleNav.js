/**
 * Provides collapsible nav for Vue Styleguidist
 */

export default {
  mounted() {
    if (!document.querySelector(".vueds-collapse")) {
      const subNavs = document.querySelectorAll("div[class^='rsg--sidebar'] div[class^='rsg--root'] > ul > li ul")

      if (subNavs) {
        let i
        for (i = 0; i < subNavs.length; i++) {
          subNavs[i].classList.add("vueds-collapse")
        }
      }

      const topItems = document.querySelectorAll("div[class^='rsg--sidebar'] div[class^='rsg--root'] > ul > li > a")

      if (topItems) {
        let i2
        for (i2 = 0; i2 < topItems.length; i2++) {
          topItems[i2].addEventListener("click", function() {
            let i3
            for (i3 = 0; i3 < subNavs.length; i3++) {
              subNavs[i3].classList.add("vueds-collapse")
            }
            this.parentNode.querySelector("ul").classList.remove("vueds-collapse")
          })
        }
      }
    }
  },
}
