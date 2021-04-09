import CodeTabs from "../utils/tabs.js"
import { highlight as prismHighlight, languages } from "prismjs"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-jsx"

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

export default previewComponent => {
  // https://vuejs.org/v2/guide/render-function.html
  return {
    render(createElement) {
      return createElement(previewComponent)
    },
    mounted() {
      CodeTabs.clean()
      const tabs = CodeTabs.create()
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

      const elemText = Array.from(div.childNodes)
        .map(n => format(n, 0).innerHTML.replace(/ class=""/g, ""))
        .join("\n")
      const elem = document.createElement("div")
      elem.className = "language-html"
      const pre = document.createElement("pre")
      const parent = document.querySelector("article div[class^='rsg--tab']")
      pre.innerHTML = prismHighlight(elemText.trim(), languages["html"], "html")
      elem.appendChild(pre)
      if (parent) {
        parent.appendChild(elem)
        parent.appendChild(tabs)

        pre.className = "language-html vueds-html vueds-hidden"
        CodeTabs.init()
      }
    },
  }
}
