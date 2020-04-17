<template>
  <component :is="type" class="vds-not-found">
    <VdsNavBar
      active="VdsNotFound"
      :navItems="[
        { name: 'Template', component: 'VdsIndex', href: '/#/' },
        { name: 'Documentation', href: 'http://localhost:6060/' },
      ]"
    />
    <VdsWrapper>
      <VdsHeading>404 Error</VdsHeading>
      <VdsParagraph
        >Couldn’t find a component that would match the URL you entered. Double check configuration
        in router/index.js.</VdsParagraph
      >
    </VdsWrapper>
  </component>
</template>

<script>
/**
 * Shows how to layout and structure an error page.
 */
export default {
  name: "VdsNotFound",
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

.vds-not-found {
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
  .vds-heading {
    color: $color-template-text;
  }
  .vds-paragraph {
    color: $color-template-text;
  }
  .vds-text-link {
    color: $color-template-link;
  }
  .vds-wrapper {
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
  <VdsNotFound />
  ```
</docs>
