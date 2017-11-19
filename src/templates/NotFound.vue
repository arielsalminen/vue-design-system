<template>
  <component :is="type" class="not-found">
    <nav-bar active="NotFound" :navItems="[
      {name: 'Template', component: 'Index', href: '/#/'},
      {name: 'Style Guide', href: 'http://localhost:6060/'}
    ]"/>
    <wrapper>
      <heading level="h1">404 Error</heading>
      <text-style>Couldn’t find a component that would match the URL you entered. Double check configuration in router/index.js.</text-style>
    </wrapper>
  </component>
</template>

<script>
import Heading from "@/elements/Heading";
import TextStyle from "@/elements/TextStyle";
import Wrapper from "@/elements/Wrapper";

/**
   * @version `prototype`
   */
export default {
  name: "NotFound",
  components: {
    heading: Heading,
    textStyle: TextStyle,
    wrapper: Wrapper
  },
  props: {
    /**
       * The html element name used for the component
       */
    type: {
      type: String,
      default: "div"
    }
  }
};
</script>

<style lang="scss" scoped>

  // Local component variables
  $color-template-background: $color-rich-black;
  $color-template-background-top: tint($color-template-background, 5%);
  $color-template-background-bottom: shade($color-template-background, 5%);
  $color-template-text: $color-white;
  $color-template-link: $color-bleu-de-france;

  .not-found {
    min-height: $space-xx-large * 4;
    background: $color-template-background;
    background: linear-gradient(0deg, $color-template-background-bottom, $color-template-background-top 100%);
    text-align: center;
    position: relative;
    float: left;
    height: 100%;
    width: 100%;
    .heading { color: $color-template-text }
    .text-style { color: $color-template-text }
    .text-link { color: $color-template-link }
    .wrapper {
      max-width: $space-xx-large * 4.5;
      transform: translateX(-50%) translateY(-50%);
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }
</style>

<docs>
  ```jsx
  <not-found />
  ```
</docs>
