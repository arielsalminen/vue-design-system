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
    font-family: $font-family-heading;
    line-height: $line-height-heading;
    color: $color-primary-rich-black;
    margin-bottom: $space-base;
    @media #{$media-query-large} {
      // This is how you’d use design tokens with media queries
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  h1 {
    letter-spacing: $letter-spacing-tiny;
    font-size: $font-size-xx-large;
    font-weight: $font-weight-bold;
  }
  h2 {
    letter-spacing: $letter-spacing-small;
    font-size: $font-size-x-large;
    font-weight: $font-weight-bold;
  }
  h3 {
    font-size: $font-size-large;
    font-weight: $font-weight-bold;
  }
  h4 {
    font-size: $font-size-base;
    font-weight: $font-weight-semi-bold;
  }
  h5 {
    font-size: $font-size-small;
    font-weight: $font-weight-regular;
  }
  h6 {
    font-size: $font-size-tiny;
    font-weight: $font-weight-regular;
  }
</style>

<docs>
  ```jsx
  <heading level="h1">The quick brown fox</heading>
  ```
</docs>
