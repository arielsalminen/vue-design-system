<template>
  <h3>
    <slot/>
  </h3>
</template>

<script>
  export default {
    name: 'Heading3'
  }
</script>

<style lang="scss" scoped>
  h3 {
    font-family: $font-primary;
    margin: 0 0 $space-small;
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
  <heading-3>The quick brown fox</heading-3>
  ```
</docs>
