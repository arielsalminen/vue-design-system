<template>
  <component :is="type" class="wrapper">
    <slot/>
  </component>
</template>

<script>
/**
 * Used to build the outer wrapper of a page, including the page title and
 * associated actions. Wrapper doesn’t provide customizable options.
 */
export default {
  name: "Wrapper",
  status: "review",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the wrapper.
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
  @include inset-space($space-large);
  font-family: $font-family-text;
  font-weight: $font-weight-regular;
  font-size: $font-size-base;
  line-height: $line-height-base;
  width: 100%;
  @media #{$media-query-large} {
    @include inset-space($space-x-large);
  }
}
</style>


<docs>
  ```jsx
  <wrapper type="div">Wrapper can be used to wrap any components together.</wrapper>
  ```
</docs>
