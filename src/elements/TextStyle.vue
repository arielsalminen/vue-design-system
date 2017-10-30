<template>
  <component :is="type" :class="['text ', variation]">
    <slot/>
  </component>
</template>

<script>
  export default {
    name: 'TextStyle',
    props: {
      /**
       * The html element name used for the text
       */
      type: {
        type: String,
        default: 'p'
      },
      /**
       * Style variation to give additional meaning.
       * `default, disabled, strong, positive, negative`
       */
      variation: {
        type: String,
        default: 'default'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .text {
    @include reset;
    line-height: $line-height-base;
    font-family: $font-family-primary;
    font-size: $font-size-base;
    margin-bottom: $space-small;
    color: $color-primary-rich-black;
    font-style: normal;
    font-weight: 400;
    &:last-child {
      margin-bottom: 0;
    }
    &.disabled {
      color: tint($color-primary-rich-black, 50%);
    }
    &.strong {
      font-weight: 600;
    }
    &.positive {
      color: shade($color-primary-bleu-de-france, 50%);
      font-style: italic;
    }
    &.negative {
      color: $color-primary-vermilion;
      font-style: italic;
    }
  }
</style>


<docs>
  ```jsx
  <text-style variation="default">Design isn’t just about the look and feel. Design is how it works, and we believe the best way to focus on this is to work as close to the end result as possible. That’s why we start all our projects with simple sketches, and quickly transition into designing working prototypes in code. This is done by the same designers who started the work, which ensures that our original design intent is carried all the way to the end product.</text-style>
  ```
</docs>
