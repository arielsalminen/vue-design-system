<template>
  <h3>
    <slot/>
  </h3>
</template>

<style lang="scss" scoped>
  h3 {
    font-family: $font-primary;
    margin-bottom: $space-small;
    color: $color-primary-rich-black;
    line-height: $line-height-heading;
    font-size: $font-size-large;
    letter-spacing: -0.25px;
    font-style: normal;
    font-weight: 700;
  }
</style>
