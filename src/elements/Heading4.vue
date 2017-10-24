<template>
  <h4>
    <slot/>
  </h4>
</template>

<script>
  export default {
    name: 'Heading4'
  }
</script>

<style lang="scss" scoped>
  h4 {
    line-height: $line-height-heading;
    color: $color-primary-rich-black;
    font-family: $font-primary;
    font-size: $font-size-base;
    margin: 0 0 $space-small;
    font-style: normal;
    font-weight: 700;
  }
</style>

<docs>
  ```jsx
  <heading-4>The quick brown fox</heading-4>
  ```
</docs>
