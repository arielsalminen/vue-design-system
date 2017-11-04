<template>
  <component :is="type" class="spacing">
    <div v-for="token in designTokens" class="space" />
  </component>
</template>

<script>
  import designTokens from '@/tokens/compiled/tokens.json';

  export default {
    name: 'Spacing',
    props: {
      type: {
        type: String,
        default: 'div'
      },
    },
    data() {
      return {
        designTokens
      };
    }
  }
</script>

<style lang="scss" scoped>
  .spacing {
    overflow: hidden;
    width: 100%;
  }
  .space {
    font-size: $font-size-tiny;
    font-family: $font-family-text;
    color: $color-primary-rich-black;
    text-align: center;
    position: relative;
    float: left;
    width: 100%;
  }
  @each $property, $value in $tokens-map {
    $i: index(($tokens-map), ($property $value));
    @if str_index($property, "space") {
      .space:nth-of-type(#{$i}) {
        border: 1px solid rgba(92,106,196,.07);
        margin-bottom: $space-tiny;
        background: #f4f6f8;
        line-height: $value;
        height: $value;
        &::before {
          content: "$#{$property}";
        }
      }
    }
  }
</style>

<docs>
  ```jsx
  <spacing/>
  ```
</docs>
