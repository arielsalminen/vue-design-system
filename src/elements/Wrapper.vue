<template>
  <component :is="type" class="wrapper">
    <slot/>
  </component>
</template>

<script>
/**
 * Used to build the outer wrapper of a page, including the page title and associated actions.
 */
export default {
  name: "Wrapper",
  version: "review",
  addedInVersion: "1.0.0",
  props: {
    /**
     * The html element name used for the wrapper
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  @include reset;
  padding: $space-large;
  width: 100%;
  @media #{$media-query-large} {
    padding: $space-large;
  }
}
</style>


<docs>
  ```jsx
  <wrapper type="div">Wrapper can be used to wrap any components together.</wrapper>
  ```
</docs>
