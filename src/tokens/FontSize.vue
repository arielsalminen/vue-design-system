<template>
  <!-- This component will pull max 64 font-sizes from tokens -->
  <component :is="type" class="font-sizes">
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
    <div class="font"></div>
  </component>
</template>

<script>
  export default {
    name: 'FontSize',
    props: {
      /**
       * The html element name used for the component
       */
      type: {
        type: String,
        default: 'div'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .font-sizes {
    overflow: hidden;
    width: 100%;
  }
  .font {
    @include reset;
    line-height: $line-height-heading;
    color: map-get($color, primary-rich-black);
    font-family: $font-primary;
    margin-bottom: map-get($spacing, small);
    font-style: normal;
    font-weight: 700;
  }
  @each $property, $value in $font-size {
    $i: index(($font-size), ($property $value));
    .font:nth-of-type(#{$i}) {
      font-size: $value;
      &::before {
        content: "$font-size, #{$property}";
      }
    }
  }
</style>

<docs>
  ```jsx
  <FontSize/>
  ```
</docs>
