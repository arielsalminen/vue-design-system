<template>
  <h6>
    <slot/>
  </h6>
</template>

<style lang="scss" scoped>
  h6 {
    font-family: $font-primary;
    margin-bottom: $space-small;
    color: $color-primary-rich-black;
    line-height: $line-height-heading;
    font-size: $font-size-tiny;
    font-style: normal;
    font-weight: 700;
  }
</style>
