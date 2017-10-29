<template>
  <!--
    This component will pull max 64 color tokens.
    The task will be more automated in the future when
    we move onto having the design tokens in JSON.

    Want to help? Get in touch with @viljamis.
  -->
  <div class="colors">
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
  </div>
</template>

<script>
  export default {
    name: 'Color'
  }
</script>

<style lang="scss">
  .colors {
    overflow: hidden;
    width: 100%;
  }
  .color {
    font-size: map-get($font-size, small);
    font-family: $font-primary;
    color: map-get($color, primary-white);
    box-shadow: $shadow-inset-tiny;
    width: 100%;
    text-align: center;
    float: left;
  }
  @each $property, $value in $color {
    $i: index(($color), ($property $value));
    .color:nth-of-type(#{$i}) {
      height: map-get($spacing, large);
      line-height: map-get($spacing, large);
      background-color: $value;
      color: set-text-color($value);
      &::before {
        content: "$color, #{$property}";
      }
    }
  }
</style>

<docs>
  ```jsx
  <color/>
  ```
</docs>
