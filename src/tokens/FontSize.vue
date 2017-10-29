<template>
  <!--
    This component will pull max 64 font-size tokens.
    The task will be more automated in the future when
    we move onto having the design tokens in JSON.

    Want to help? Get in touch with @viljamis.
  -->
  <div class="font-sizes">
    <div class="font"></div>
  </div>
</template>

<script>
  export default {
    name: 'FontSize'
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
    color: $color-primary-rich-black;
    font-family: $font-family-primary;
    margin-bottom: $space-small;
    font-style: normal;
    font-weight: 700;
  }
</style>

<docs>
  ```jsx
  <FontSize/>
  ```
</docs>
