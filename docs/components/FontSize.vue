<template>
  <component :is="type" class="font-sizes">
    <div v-for="token in designTokens" class="font" />
  </component>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.json";

export default {
  name: "FontSize",
  props: {
    type: {
      type: String,
      default: "div"
    }
  },
  data() {
    return {
      designTokens
    };
  }
};
</script>

<style lang="scss" scoped>
  .font-sizes {
    overflow: hidden;
    width: 100%;
  }
  .font {
    @include reset;
    font-family: $font-family-heading;
    font-weight: $font-weight-bold;
    line-height: $line-height-heading;
    color: $color-primary-rich-black;
    margin-bottom: $space-small;
    font-style: normal;
  }
  @each $property, $value in $tokens-map {
    $i: index(($tokens-map), ($property $value));
    @if str_index($property, "font-size") {
      .font:nth-of-type(#{$i}) {
        font-size: $value;
        &::before {
          content: "$#{$property}";
        }
      }
    }
  }
</style>

<docs>
  ```jsx
  <FontSize/>
  ```
</docs>
