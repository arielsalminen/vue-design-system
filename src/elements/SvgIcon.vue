<template>
  <component :is="type" :aria-label="ariaLabel" class="svg-icon">
  </component>
</template>

<script>
let cache = new Map()
const req = require.context("@/assets/icons/", true, /^\.\/.*\.svg$/)

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. They can act as wayfinding tools to help users more
 * easily understand where they are in the product.
 */
export default {
  name: "SvgIcon",
  status: "review",
  release: "1.0.0",
  props: {
    /**
     * The name of the icon to display.
     */
    name: {
      required: true,
      default: "settings",
    },
    /**
     * The fill color of the SVG icon.
     */
    fill: {
      type: String,
      default: "#00264c",
    },
    /**
     * Descriptive text to be read to screenreaders.
     */
    ariaLabel: {
      type: String,
      default: "icon",
    },
    /**
     * The html element name used for the icon.
     */
    type: {
      type: String,
      default: "span",
    },
    /**
     * The size of the icon.
     */
    size: {
      type: String,
      default: "16px",
    },
  },
  async mounted() {
    let currPath = req("./" + this.name + ".svg")
    if (!cache.has(currPath)) {
      try {
        cache.set(currPath, fetch(currPath).then(r => r.text()))
      } catch (e) {
        cache.delete(currPath)
      }
    }
    if (cache.has(currPath)) {
      this.$el.innerHTML = await cache.get(currPath)
      this.$el.children[0].style.fill = this.fill
      this.$el.children[0].style.width = this.size
      this.$el.children[0].style.height = this.size
    }
  },
}
</script>

<docs>
  ```jsx
  <div>
    <svg-icon name="ready" aria-label="Component is ready" fill="#7cb518" size="24px" />
    <svg-icon name="review" fill="rgb(255, 186, 10)" size="24px" />
    <svg-icon name="deprecated" fill="rgb(235, 59, 36)" size="24px" />
    <svg-icon name="prototype" fill="rgb(37, 138, 239)" size="24px" />
  </div>
  ```
</docs>
