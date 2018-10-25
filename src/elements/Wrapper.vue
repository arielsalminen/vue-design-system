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
  @include inset-space($space-l);
  font-family: $font-text;
  font-weight: $weight-normal;
  font-size: $size-m;
  line-height: $line-height-m;
  width: 100%;
  @media #{$media-query-l} {
    @include inset-space($space-xl);
  }
}
</style>


<docs>
  ```jsx
  <Wrapper>Wrapper can be used to wrap any components together.</Wrapper>
  ```
</docs>
