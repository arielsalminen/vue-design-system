<template>
  <a :href="href">
    <slot/>
  </a>
</template>

<script>
  export default {
    props: ['href'],
  };
</script>

<style lang="scss" scoped>
  a {
    font-family: $font-primary;
    color: $color-primary-vermilion;
  }
</style>
