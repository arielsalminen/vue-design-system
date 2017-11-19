<template>
  <component :is="type" :aria-label="ariaLabel" class="svg-icon">
  </component>
</template>

<script>
let cache = new Map();
const req = require.context("@/assets/icons/", true, /^\.\/.*\.svg$/);

/**
 * @version `wip`
 */
export default {
  name: "SvgIcon",
  props: {
    /**
     * The name of the icon to display
     */
    name: {
      required: true,
      default: "settings"
    },
    /**
     * The fill color of the SVG icon
     */
    fill: {
      type: String,
      default: "#00264c"
    },
    /**
     * Descriptive text to be read to screenreaders
     */
    ariaLabel: {
      type: String,
      default: "icon"
    },
    /**
     * The html element name used for the icon
     */
    type: {
      type: String,
      default: "span"
    },
    /**
     * The size of the icon
     */
    size: {
      type: String,
      default: "16px"
    }
  },
  async mounted() {
    let currPath = req("./" + this.name + ".svg");
    if (!cache.has(currPath)) {
      try {
        cache.set(currPath, fetch(currPath).then(r => r.text()));
      } catch (e) {
        cache.delete(currPath);
      }
    }
    if (cache.has(currPath)) {
      this.$el.innerHTML = await cache.get(currPath);
      this.$el.children[0].style.fill = this.fill;
      this.$el.children[0].style.width = this.size;
      this.$el.children[0].style.height = this.size;
    }
  }
};
</script>

<docs>
  ```jsx
  <svg-icon name="settings" aria-label="App Settings" fill="#00264c" size="16px" />
  ```
</docs>
