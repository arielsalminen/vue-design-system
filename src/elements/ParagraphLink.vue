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
    @include reset;
    font-family: $font-primary;
    color: $color-primary-vermilion;
  }
</style>

<docs>
  ```jsx
  <paragraph-link>I am a link!</paragraph-link>
  ```
</docs>
