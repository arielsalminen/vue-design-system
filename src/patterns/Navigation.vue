<template>
  <component :is="type" class="nav">
    <slot>
      <router-link :to="{ name: 'Test' }" exact>Test Template</router-link>
      <a href="http://localhost:6060" target="_blank">Style Guide</a>
    </slot>
  </component>
</template>

<script>
  export default {
    name: 'Navigation',
    props: {
      /**
       * The html element name used for the navigation
       */
      type: {
        type: String,
        default: 'nav'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav {
    margin: map-get($spacing, base) 0;
    line-height: $line-height-base;
    font-family: $font-primary;
    font-size: map-get($font-size, small);
    color: map-get($color, primary-white);
    text-align: center;
    width: 100%;
    a {
      padding: map-get($spacing, tiny) 0;
      margin: 0 map-get($spacing, tiny);
      text-decoration: none;
      display: inline-block;
      color: map-get($color, primary-oxford-blue);
      &.router-link-active {
        color: map-get($color, primary-vermilion);
        border-bottom: 2px solid map-get($color, primary-vermilion);
        cursor: default;
      }
    }
  }
</style>

<docs>
  ```jsx
  <navigation>
    <a href="/" class="router-link-active">Home</a>
    <a href="/about/">About</a>
    <a href="/projects/">Projects</a>
    <a href="/posts/">Posts</a>
    <a href="/contact/">Contact</a>
  </navigation>
  ```
</docs>
