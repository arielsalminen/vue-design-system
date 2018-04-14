<template>
  <component :is="level" class="heading">
    <slot/>
  </component>
</template>

<script>
/**
 * Headings are used as the titles of each major section of a page in the
 * interface. For example, templates generally use headings as their title.
 * Heading element provides an option to change the level of the heading.
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
  @include stack-space($space-base);
  font-family: $font-family-heading;
  line-height: $line-height-heading;
  color: $color-rich-black;
  @media #{$media-query-large} {
    // This is how you’d use design tokens with media queries
  }
}
h1 {
  letter-spacing: $letter-spacing-x-small;
  font-size: $font-size-xx-large;
  font-weight: $font-weight-bold;
  @media #{$media-query-large} {
    font-size: $font-size-xxx-large;
  }
}
h2 {
  letter-spacing: $letter-spacing-small;
  font-size: $font-size-xx-large;
  font-weight: $font-weight-bold;
}
h3 {
  font-size: $font-size-x-large;
  font-weight: $font-weight-bold;
}
h4 {
  font-size: $font-size-large;
  font-weight: $font-weight-semi-bold;
}
h5 {
  font-size: $font-size-base;
  font-weight: $font-weight-regular;
}
h6 {
  font-size: $font-size-small;
  font-weight: $font-weight-regular;
}
</style>

<docs>
  ```jsx
  <div>
    <heading level="h1">The quick brown fox</heading>
    <heading level="h2">The quick brown fox</heading>
    <heading level="h3">The quick brown fox</heading>
    <heading level="h4">The quick brown fox</heading>
  </div>
  ```
</docs>
