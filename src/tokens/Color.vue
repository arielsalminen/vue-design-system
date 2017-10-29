<template>
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
    font-size: $font-size-small;
    font-family: $font-family-primary;
    color: $color-primary-white;
    box-shadow: $box-shadow-inset-tiny;
    width: 100%;
    text-align: center;
    float: left;
  }
  @each $property, $value in $tokens-map {
    $i: index(($tokens-map), ($property $value));
    @if type-of($value) == 'color' {
      .color:nth-of-type(#{$i}) {
        height: $space-large;
        line-height: $space-large;
        background-color: $value;
        color: set-text-color($value);
        &::before {
          content: "$#{$property}";
        }
      }
    }
  }
</style>

<docs>
  ```jsx
  <color/>
  ```
</docs>
