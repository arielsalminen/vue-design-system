<template>
  <component :is="level" class="heading">
    <slot/>
  </component>
</template>

<script>
/**
 * Headings are used as the titles of each major section of a page in the interface. For example, templates generally use headings as their title.
 */
export default {
  name: "Heading",
  status: "prototype",
  release: "1.0.0",
  props: {
    /**
     * The heading level used for the heading.
     * `h1, h2, h3, h4, h5, h6`
     */
    level: {
      type: String,
      default: "h1",
      validator: value => {
        return value.match(/(h1|h2|h3|h4|h5|h6)/)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.heading {
  @include reset;
  font-family: $font-family-heading;
  line-height: $line-height-heading;
  color: $color-rich-black;
  margin-bottom: $space;
  @media #{$media-query-l} {
    // This is how you’d use design tokens with media queries
  }
  &:last-child {
    margin-bottom: 0;
  }
}
h1 {
  letter-spacing: $letter-spacing-tiny;
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  @media #{$media-query-l} {
    font-size: $font-size-xxl;
  }
}
h2 {
  letter-spacing: $letter-spacing-small;
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
}
h3 {
  font-size: $font-size-l;
  font-weight: $font-weight-bold;
}
h4 {
  font-size: $font-size;
  font-weight: $font-weight-semi-bold;
}
h5 {
  font-size: $font-size-s;
  font-weight: $font-weight-regular;
}
h6 {
  font-size: $font-size-xs;
  font-weight: $font-weight-regular;
}
</style>

<docs>
  ```jsx
  <heading level="h1">The quick brown fox</heading>
  ```
</docs>
