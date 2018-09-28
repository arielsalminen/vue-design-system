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
  @include stack-space($space-m);
  font-family: $font-heading;
  line-height: $line-height-xs;
  color: $color-rich-black;
  @media #{$media-query-l} {
    // This is how you’d use design tokens with media queries
  }
}
h1 {
  letter-spacing: $spacing-xs;
  font-size: $size-xxl;
  font-weight: $weight-semi-bold;
  @media #{$media-query-l} {
    font-size: $size-xxxl;
  }
}
h2 {
  letter-spacing: $spacing-s;
  font-size: $size-xxl;
  font-weight: $weight-semi-bold;
}
h3 {
  font-size: $size-xl;
  font-weight: $weight-semi-bold;
}
h4 {
  font-size: $size-l;
  font-weight: $weight-semi-bold;
}
h5 {
  font-size: $size-m;
  font-weight: $weight-normal;
}
h6 {
  font-size: $size-s;
  font-weight: $weight-normal;
}
</style>

<docs>
  ```jsx
  <div>
    <Heading>The quick brown fox</Heading>
    <Heading level="h2">The quick brown fox</Heading>
    <Heading level="h3">The quick brown fox</Heading>
    <Heading level="h4">The quick brown fox</Heading>
  </div>
  ```
</docs>
