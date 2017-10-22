<template>
  <h4>
    <slot/>
  </h4>
</template>

<script>
  export default {
    name: 'elementHeader4',
  };
</script>

<style lang="scss" scoped>
  h4 {
    line-height: $line-height-heading;
    color: $color-primary-rich-black;
    font-family: $font-primary;
    font-size: $font-size-base;
    margin-bottom: $space-small;
    font-style: normal;
    font-weight: 700;
  }
</style>
