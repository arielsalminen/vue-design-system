<template>
  <component :is="type" :aria-label="ariaLabel" class="icon">
  </component>
</template>

<script>
  let cache = new Map();
  const path = require('path')

  export default {
    name: 'Icon',
    props: {
      /**
       * The name of the icon to display
       */
      name: {
        type: String,
        default: 'settings'
      },
      /**
       * The fill color of the SVG icon
       */
      fill: {
        type: String,
        default: '#00264c',
      },
      /**
       * Descriptive text to be read to screenreaders
       */
      ariaLabel: {
        type: String,
        default: 'icon'
      },
      /**
       * The html element name used for the icon
       */
      type: {
        type: String,
        default: 'span'
      }
    },
    async mounted() {
      const currPath = path.join(__dirname, 'static/icons/' + this.name + '.svg');
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
      }
    }
  };
</script>

<style lang="scss">
  .icon {
    svg {
      width: 16px;
      height: 16px;
    }
  }
</style>

<docs>
  ```jsx
  <icon name="settings" aria-label="App Settings" fill="#00264c" />
  ```
</docs>
