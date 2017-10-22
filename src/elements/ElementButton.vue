<template>
  <a href="">
    <slot/>
  </a>
</template>

<script>
  export default {
    name: 'elementButton',
  };
</script>

<style lang="scss" scoped>
  a {
    font-family: $font-primary;
  }
</style>
