<template>
  <h3>
    <slot/>
  </h3>
</template>

<script>
  export default {
    name: 'ElementHeader3'
  }
</script>

<style lang="scss" scoped>
  h3 {
    font-family: $font-primary;
    margin-bottom: $space-small;
    color: $color-primary-rich-black;
    line-height: $line-height-heading;
    font-size: $font-size-large;
    letter-spacing: -0.25px;
    font-style: normal;
    font-weight: 700;
  }
</style>

<docs>
  ```jsx
  <element-header3>The quick brown fox</element-header3>
  ```
</docs>
