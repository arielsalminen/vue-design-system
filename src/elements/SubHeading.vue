<template>
  <h2>
    <slot/>
  </h2>
</template>

<script>
  export default {
    name: 'SubHeading'
  }
</script>

<style lang="scss" scoped>
  h2 {
    @include reset;
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
  <sub-heading>The quick brown fox</sub-heading>
  ```
</docs>
