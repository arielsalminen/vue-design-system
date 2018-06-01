import CodeMirror from "codemirror"

function format(node, level) {
  const indentBefore = new Array(level++ + 1).join("  ")
  const indentAfter = new Array(level - 1).join("  ")
  let textNode

  for (let i = 0; i < node.children.length; i++) {
    textNode = document.createTextNode("\n" + indentBefore)
    node.insertBefore(textNode, node.children[i])

    format(node.children[i], level)

    if (node.lastElementChild == node.children[i]) {
      textNode = document.createTextNode("\n" + indentAfter)
      node.appendChild(textNode)
    }
  }

  return node
}

function initTabs() {
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
          container.querySelectorAll("div")[0].classList.add("vueds-hidden")
        } else {
          const container = document.querySelector("article div[class^='rsg--tab']")
          document.querySelector(".vueds-html").classList.add("vueds-hidden")
        }
      })
    })
  }
}

export default previewComponent => {
  // https://vuejs.org/v2/guide/render-function.html
  return {
    render(createElement) {
      return createElement(previewComponent)
    },
    mounted() {
      const oldElem = document.querySelector(".vueds-html")
      const oldTabs = document.querySelector(".vueds-tabs")
      if (oldElem || oldTabs) {
        oldElem.parentNode.removeChild(oldElem)
        oldTabs.parentNode.removeChild(oldTabs)
      }

      const tabs = document.createElement("div")
      tabs.className = "vueds-tabs"
      tabs.innerHTML =
        "<button class='vueds-tab vue vueds-tab--active'>VUE</button><button class='vueds-tab html'>HTML</button>"

      const strDiv = this.$el.innerHTML.replace(/<!---->/g, "").replace(/data-v-\w*=""/g, "")
      const div = document.createElement("div")
      div.innerHTML =
        "<" +
        this.$el.localName +
        " class='" +
        this.$el.className +
        "'>" +
        strDiv.trim() +
        "</" +
        this.$el.localName +
        ">"

      const elemText = format(div, 0).innerHTML.replace(/ class=""/g, "")
      const elem = document.createElement("div")
      const pre = document.createElement("pre")
      const parent = document.querySelector("article div[class^='rsg--tab']")
      pre.appendChild(document.createTextNode(elemText.trim()))
      elem.appendChild(pre)
      if (parent) {
        // Allow some time to pass to make sure codemirror is visible first
        setTimeout(() => {
          parent.appendChild(elem)
          parent.appendChild(tabs)

          CodeMirror(
            function(code) {
              elem.parentNode.replaceChild(code, elem)
              code.className += " vueds-html vueds-hidden"
            },
            {
              value: pre.innerText || pre.textContent,
              mode: "jsx",
              lineNumbers: false,
              readOnly: true,
              dragDrop: false,
              theme: "night",
            }
          )

          initTabs()
        }, 150)
      }
    },
  }
}
