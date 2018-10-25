<template>
  <component :is="type" :aria-label="ariaLabel" :class="['icon', size]" v-html="svg"/>
</template>

<script>
const req = require.context("@/assets/icons/", true, /^\.\/.*\.svg$/)

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. They can act as wayfinding tools to help users more
 * easily understand where they are in the product.
 */
export default {
  name: "Icon",
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
      default: "currentColor",
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
     * The size of the icon. Defaults to medium.
     * `small, medium, large`
     */
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return value.match(/(small|medium|large)/)
      },
    },
  },
  data() {
    return {
      svg: req("./" + this.name + ".svg").replace(/^<svg /, `<svg style="fill: ${this.fill}" `),
    }
  },
}
</script>

<style lang="scss">
// This is here just to provide defaults if the original tokens are removed.
// Can be removed once you’re ready to start defining your own sizes.
@import "../../docs/docs.tokens.scss";

// We don’t want to use scoped since these styles need to cascade down to SVGs.
// We also want to be able to style .icon inside buttons etc.
.icon {
  @include reset;
  &.large svg {
    width: $space-l;
    height: $space-l;
  }
  &.medium svg {
    width: $space-m;
    height: $space-m;
  }
  &.small svg {
    width: $space-s;
    height: $space-s;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <Icon name="ready" aria-label="Component is ready" fill="#7cb518" />
    <Icon name="review" fill="rgb(255,186,10)" />
    <Icon name="deprecated" fill="rgb(235,59,36)" />
    <Icon name="prototype" fill="rgb(37,138,239)" />
  </div>
  ```
</docs>
