<template>
  <h2>
    <slot/>
  </h2>
</template>

<script>
  export default {
    name: 'Heading2'
  }
</script>

<style lang="scss" scoped>
  h2 {
    margin: 0 0 $space-small;
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
  <heading-2>The quick brown fox</heading-2>
  ```
</docs>
