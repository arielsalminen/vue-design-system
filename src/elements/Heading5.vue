<template>
  <h5>
    <slot/>
  </h5>
</template>

<script>
  export default {
    name: 'Heading5'
  }
</script>

<style lang="scss" scoped>
  h5 {
    font-family: $font-primary;
    margin: 0 0 $space-small;
    color: $color-primary-rich-black;
    line-height: $line-height-heading;
    font-size: $font-size-small;
    font-style: normal;
    font-weight: 700;
  }
</style>

<docs>
  ```jsx
  <heading-5>The quick brown fox</heading-5>
  ```
</docs>
