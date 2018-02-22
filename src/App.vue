<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
}
</script>

<style lang="scss">
// These styles exist to highlight issues with scoping
//
// Elements and Components should have fonts, spacing, etc.
// defined in them to keep things as modular as possible.
#app {
  font: normal normal 100%/normal "Comic Sans MS", "Comic Sans", cursive;
  height: 100%;
  color: red;
}
* {
  border-color: red;
}
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
