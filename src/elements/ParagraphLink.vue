<template>
  <a :href="href">
    <slot/>
  </a>
</template>

<script>
  export default {
    name: 'ParagraphLink',
    props: ['href'],
  };
</script>

<style lang="scss" scoped>
  a {
    font-family: $font-primary;
    color: $color-primary-vermilion;
    margin: 0;
  }
</style>

<docs>
  ```jsx
  <paragraph-link>I am a link!</paragraph-link>
  ```
</docs>
