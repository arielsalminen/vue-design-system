<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import './styles/fonts.scss';
  import './styles/reset.scss';

  export default {
    name: 'app',
  };
</script>

<style lang="scss">
  // These styles exist mostly to highlight issues with scoping
  //
  // Elements and Components should have fonts, spacing, etc.
  // defined in them to keep things as modular as possible.
  #app {
    font: normal normal 100%/20 "Comic Sans MS", "Comic Sans", cursive;
    color: red;
  }
  * {
    border-color: red;
  }
</style>
