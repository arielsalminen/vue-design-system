<template>
  <component :is="type" :class="['text-style ', variation]">
    <slot/>
  </component>
</template>

<script>
/**
 * Text style enhances text with additional visual meaning. For example, using
 * disabled text to de-emphasize it from its surrounding text. Don’t use text
 * styles only for aesthetic effect.
 */
export default {
  name: "TextStyle",
  status: "ready",
  release: "1.0.0",
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
// Design Tokens with local scope
$positive-text: #7cb518;

.text-style {
  @include reset;
  @include stack-space($space-small);
  color: $color-rich-black;
  font-family: $font-family-text;
  font-weight: $font-weight-regular;
  font-size: $font-size-base;
  line-height: $line-height-base;
  @media #{$media-query-large} {
    // This is how you’d use design tokens with media queries
  }
  &.disabled {
    color: tint($color-rich-black, 50%);
    text-decoration: line-through;
  }
  &.strong {
    font-weight: $font-weight-semi-bold;
  }
  &.positive {
    color: shade($positive-text, 20%);
  }
  &.negative {
    color: $color-vermilion;
  }
}
</style>


<docs>
  ```jsx
  <div>
    <text-style variation="default">Design isn’t just about the look and feel. Design is how it works.</text-style>
    <text-style variation="disabled">Design isn’t just about the look and feel.</text-style>
    <text-style variation="strong">Design isn’t just about</text-style>
  </div>
  ```
</docs>
