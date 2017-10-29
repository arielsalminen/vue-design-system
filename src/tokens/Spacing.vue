<template>
  <!--
    This component will pull max 64 space tokens now.
    The task will be more automated in the future when
    we move onto having the design tokens in JSON.

    Want to help? Get in touch with @viljamis.
  -->
  <div class="spacing">
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
    <div class="space"></div>
    <div class="space"></div>
  </div>
</template>

<script>
  export default {
    name: 'Spacing'
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
