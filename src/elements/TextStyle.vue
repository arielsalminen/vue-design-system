<template>
  <component :is="type" :class="['text-style ', variation]">
    <slot/>
  </component>
</template>

<script>
/**
 * Text style enhances text with additional visual meaning. For example, using subdued text to de-emphasize it from its surrounding text.
 */
export default {
  name: "TextStyle",
  version: "ready",
  addedInVersion: "1.0.0",
  props: {
    /**
     * The html element name used for the text
     */
    type: {
      type: String,
      default: "p",
    },
    /**
     * Style variation to give additional meaning.
     * `default, disabled, strong, positive, negative`
     */
    variation: {
      type: String,
      default: "default",
      validator: value => {
        return value.match(/(default|disabled|strong|positive|negative)/)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.text-style {
  @include reset;
  color: $color-rich-black;
  font-family: $font-family-text;
  font-weight: $font-weight-regular;
  font-size: $font-size-base;
  line-height: $line-height-base;
  margin-bottom: $space-small;
  @media #{$media-query-large} {
    // This is how you’d use design tokens with media queries
  }
  &:last-child {
    margin-bottom: 0;
  }
  &.disabled {
    color: tint($color-rich-black, 50%);
  }
  &.strong {
    font-weight: $font-weight-semi-bold;
  }
  &.positive {
    color: shade($color-bleu-de-france, 50%);
    font-style: italic;
  }
  &.negative {
    color: $color-vermilion;
    font-style: italic;
  }
}
</style>


<docs>
  ```jsx
  <text-style variation="default">Design isn’t just about the look and feel. Design is how it works, and we believe the best way to focus on this is to work as close to the end result as possible. That’s why we start all our projects with simple sketches, and quickly transition into designing working prototypes in code. This is done by the same designers who started the work, which ensures that our original design intent is carried all the way to the end product.</text-style>
  ```
</docs>
