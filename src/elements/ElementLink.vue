<template>
  <a :href="href">
    <slot/>
  </a>
</template>

<script>
  export default {
    name: 'ElementLink',
    props: ['href'],
  };
</script>

<style lang="scss" scoped>
  a {
    font-family: $font-primary;
    color: $color-primary-vermilion;
  }
</style>

<docs>
  ```jsx
  <element-link>I am a link!</element-link>
  ```
</docs>
