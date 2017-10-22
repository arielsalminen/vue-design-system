<template>
  <p>
    <slot/>
  </p>
</template>

<script>
  export default {
    name: 'elementParagraph',
  };
</script>

<style lang="scss" scoped>
  p {
    line-height: $line-height-base;
    font-family: $font-primary;
    font-size: $font-size-base;
    margin-bottom: $space-small;
    color: $color-text-default;
    font-style: normal;
    font-weight: 400;
    &:last-child { margin-bottom: 0 }
  }
</style>
