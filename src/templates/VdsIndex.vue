<template>
  <component :is="type" class="vds-index">
    <VdsNavBar
      active="VdsIndex"
      :navItems="[
        { name: 'Template', component: 'VdsIndex', href: '/#/' },
        { name: 'Documentation', href: 'http://localhost:6060/' },
      ]"
    />
    <VdsWrapper>
      <VdsHeading>Vue Design System</VdsHeading>
      <VdsParagraph>
        <a href="https://vueds.com">Vue Design System</a> is an open-source tool for building design
        systems with Vue.js. It provides you and your team a set of organized tools, patterns &amp;
        practices. It works as the foundation for your application development.
      </VdsParagraph>
    </VdsWrapper>
  </component>
</template>

<script>
/**
 * Shows how to layout and structure a home page.
 */
export default {
  name: "VdsIndex",
  status: "deprecated",
  release: "1.0.0",
  metaInfo: {
    title: "Vue Design System",
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

.vds-index {
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
  @media #{$media-query-l} {
    // This is how you’d use design tokens with media queries
  }
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
  a {
    font-family: $font-text;
    color: $color-bleu-de-france;
    text-decoration: underline;
  }
}
</style>

<docs>
  ```jsx
  <VdsIndex />
  ```
</docs>
