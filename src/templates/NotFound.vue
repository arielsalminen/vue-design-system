<template>
  <component :is="type" class="not-found">
    <NavBar
      active="NotFound"
      :navItems="[
        {name: 'Template', component: 'Index', href: '/#/'},
        {name: 'Documentation', href: 'http://localhost:6060/'}
      ]"
    />
    <Wrapper>
      <Heading>404 Error</Heading>
      <Paragraph>Couldn’t find a component that would match the URL you entered. Double check configuration in router/index.js.</Paragraph>
    </Wrapper>
  </component>
</template>

<script>
/**
 * Shows how to layout and structure an error page.
 */
export default {
  name: "NotFound",
  metaInfo: {
    title: "Page Not Found | Vue Design System",
    htmlAttrs: {
      lang: "en",
    },
  },
  props: {
    /**
     * The html element name used for the component.
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped>
// Design Tokens with local scope
$color-template-background: $color-rich-black;
$color-template-background-top: tint($color-template-background, 5%);
$color-template-background-bottom: shade($color-template-background, 5%);
$color-template-text: $color-white;
$color-template-link: $color-bleu-de-france;

.not-found {
  @include reset;
  @include inset-space($space-m);
  min-height: $space-xxl * 4;
  background: $color-template-background;
  background: linear-gradient(
    0deg,
    $color-template-background-bottom,
    $color-template-background-top 100%
  );
  text-align: center;
  position: relative;
  float: left;
  height: 100%;
  width: 100%;
  .heading {
    color: $color-template-text;
  }
  .paragraph {
    color: $color-template-text;
  }
  .text-link {
    color: $color-template-link;
  }
  .wrapper {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: $space-xxl * 4.5;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
}
</style>

<docs>
  ```jsx
  <NotFound />
  ```
</docs>
