<template>
  <component :is="type" class="wrapper">
    <slot/>
  </component>
</template>

<script>
  /**
   * <label class="status status-ready">Ready<label>
   */
  export default {
    name: 'Wrapper',
    props: {
      /**
       * The html element name used for the wrapper
       */
      type: {
        type: String,
        default: 'div'
      }
    }
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
