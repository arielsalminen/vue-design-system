<template>
  <component :is="level" class="heading">
    <slot/>
  </component>
</template>

<script>
  export default {
    name: 'Heading',
    props: {
      /**
       * The heading level used for the heading.
       * `h1, h2, h3, h4, h5, h6`
       */
      level: {
        type: String,
        default: 'h1'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .heading {
    @include reset;
    line-height: $line-height-heading;
    color: $color-primary-rich-black;
    font-family: $font-family-primary;
    margin-bottom:  $space-small;
    font-style: normal;
  }
  h1 {
    font-size: $font-size-xx-large;
    letter-spacing: -1px;
    font-weight: 700;
  }
  h2 {
    font-size: $font-size-x-large;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
  h3 {
    font-size: $font-size-large;
    font-weight: 700;
  }
  h4 {
    font-size: $font-size-base;
    font-weight: 600;
  }
  h5 {
    font-size: $font-size-small;
    font-weight: 400;
  }
  h6 {
    font-size: $font-size-tiny;
    font-weight: 400;
  }
</style>

<docs>
  ```jsx
  <heading level="h1">The quick brown fox</heading>
  ```
</docs>
