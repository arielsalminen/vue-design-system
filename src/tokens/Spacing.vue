<template>
  <!-- This component will pull max 64 space tokens -->
  <component :is="type" class="spacing">
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
    <div class="space"></div>
  </component>
</template>

<script>
  export default {
    name: 'Spacing',
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
  .spacing {
    overflow: hidden;
    width: 100%;
  }
  .space {
    font-size: map-get($font-size, tiny);
    font-family: $font-primary;
    color: map-get($color, primary-rich-black);
    width: 100%;
    text-align: center;
    position: relative;
    float: left;
  }
  @each $property, $value in $spacing {
    $i: index(($spacing), ($property $value));
    .space:nth-of-type(#{$i}) {
      border: 1px solid rgba(92,106,196,.07);
      margin-bottom: map-get($spacing, tiny);
      background: #f4f6f8;
      line-height: $value;
      height: $value;
      &::before {
        content: "$spacing, #{$property}";
      }
    }
  }
</style>

<docs>
  ```jsx
  <spacing/>
  ```
</docs>
