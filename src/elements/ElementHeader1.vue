<template>
  <h1>
    <slot/>
  </h1>
</template>

<script>
  export default {
    name: 'ElementHeader1'
  }
</script>

<style lang="scss" scoped>
  h1 {
    line-height: $line-height-heading;
    color: $color-primary-rich-black;
    font-size: $font-size-xx-large;
    font-family: $font-primary;
    margin-bottom: $space-small;
    letter-spacing: -1px;
    font-style: normal;
    font-weight: 700;
  }
</style>

<docs>
  ```jsx
  <element-header1>The quick brown fox</element-header1>
  ```
</docs>
