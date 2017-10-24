<template>
  <h6>
    <slot/>
  </h6>
</template>

<script>
  export default {
    name: 'Heading6'
  }
</script>

<style lang="scss" scoped>
  h6 {
    font-family: $font-primary;
    margin: 0 0 $space-small;
    color: $color-primary-rich-black;
    line-height: $line-height-heading;
    font-size: $font-size-tiny;
    font-style: normal;
    font-weight: 700;
  }
</style>

<docs>
  ```jsx
  <heading-6>The quick brown fox</heading-6>
  ```
</docs>
