<template>
  <component :is="type" :class="['text-style', variation]">
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
     * The html element used for the text style.
     * `span, em, i, strong`
     */
    type: {
      type: String,
      default: "span",
      validator: value => {
        return value.match(/(span|em|i|strong)/)
      },
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
  @include stack-space($space-s);
  color: $color-rich-black;
  font-family: $font-text;
  font-weight: $weight-normal;
  font-size: $size-m;
  line-height: $line-height-m;
  @media #{$media-query-l} {
    // This is how you’d use design tokens with media queries
  }
  &.disabled {
    color: tint($color-rich-black, 50%);
    text-decoration: line-through;
  }
  &.strong {
    font-weight: $weight-semi-bold;
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
    <TextStyle variation="default">Design isn’t just about the look and feel.</TextStyle>
    <br />
    <TextStyle variation="disabled">Design isn’t just about</TextStyle>
    <br />
    <TextStyle variation="strong">Design isn’t</TextStyle>
  </div>
  ```
</docs>
