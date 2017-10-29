<template>
  <!--
    This component will pull max 64 space tokens now.
    The task will be more automated in the future when
    we move onto having the design tokens in JSON.

    Want to help? Get in touch with @viljamis.
  -->
  <div class="spacing">
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
    font-size: $font-size-tiny;
    font-family: $font-family-primary;
    color: $color-primary-rich-black;
    width: 100%;
    text-align: center;
    position: relative;
    float: left;
  }
</style>

<docs>
  ```jsx
  <spacing/>
  ```
</docs>
