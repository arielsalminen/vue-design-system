<template>
  <h2>
    <slot/>
  </h2>
</template>

<script>
  export default {
    name: 'ElementHeader2'
  }
</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: $space-small;
    line-height: $line-height-heading;
    font-family: $font-primary;
    font-size: $font-size-x-large;
    color: $color-primary-rich-black;
    letter-spacing: -0.5px;
    font-style: normal;
    font-weight: 700;
  }
</style>

<docs>
  ```jsx
  <element-header2>The quick brown fox</element-header2>
  ```
</docs>
