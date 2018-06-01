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
      const oldElem = document.querySelector(".vueds-html")
      if (oldElem) {
        oldElem.parentNode.removeChild(oldElem)
      }
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
      const elem = document.createElement("pre")
      const parent = this.$el.parentNode.parentNode.parentNode.parentNode.querySelector("div[class^='rsg--tab']")
      elem.className = "rsg--pre-58 vueds-html"
      elem.appendChild(document.createTextNode(elemText.trim()))
      if (parent) {
        // Allow some time to pass to make sure codemirror is visible first
        setTimeout(() => {
          parent.appendChild(elem)
        }, 100)
      }
    },
  }
}
