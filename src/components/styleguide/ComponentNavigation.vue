<template>
  <nav>
    <router-link :to="{ name: 'StyleGuide' }" exact>Style Guide</router-link>
    <router-link :to="{ name: 'Template1' }" exact>Template 1</router-link>
    <router-link :to="{ name: 'Template2' }" exact>Template 2</router-link>
    <router-link :to="{ name: 'Template3' }" exact>Template 3</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'componentNavigation',
  };
</script>

<style lang="scss" scoped>
  nav {
    background: $color-primary-rich-black;
    line-height: $line-height-base;
    font-family: $font-primary;
    font-size: $font-size-small;
    text-align: center;
    float: left;
    width: 100%;
    a {
      padding: $space-small $space-tiny;
      text-decoration: none;
      display: inline-block;
      color: $color-primary-bleu-de-france;
      &.router-link-active {
        color: $color-primary-white;
        cursor: default;
      }
    }
  }
</style>
