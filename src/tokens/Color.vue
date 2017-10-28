<template>
  <!-- This component will pull max 64 colors from tokens -->
  <component :is="type" class="colors">
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
  </component>
</template>

<script>
  export default {
    name: 'Color',
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

<style lang="scss">
  .colors {
    overflow: hidden;
    width: 100%;
  }
  .color {
    margin-right: map-get($spacing, tiny);
    width: 100%;
    font-size: map-get($font-size, small);
    font-family: $font-primary;
    color: map-get($color, primary-white);
    box-shadow: inset 0 0 0 1px rgba(92,106,196,.1);
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
