<template>
  <component :is="type" class="index">
    <NavBar
      active="Welcome"
      :navItems="[
        { name: 'Welcome', component: 'Welcome', href: '/#/' },
        { name: 'Blog', component: 'BlogPage', href: '/#/Blog' },
        { name: 'Impressum', component: 'Impressum', href: '/#/Impressum/' },
      ]"
    />
    <Wrapper>
      <Heading>Unsere Ziele und Träume</Heading>
      <Paragraph>
        Wir sind GT-Global und unsere Ziele sind einfach. Zugang zu Technologie und KnowHow für
        jeden Menschen.
      </Paragraph>
      <Paragraph>
        Wie schaffen wir das? Wir setzen auf OpenSource und die Freiheit sich zu entscheiden was man
        will. Mit OpenSource haben Sie die Möglichkeit sich ohne andauernden Finaziellen Aufwand zu
        erweitern und zu verbessern.<br />
        Mit OpenSource stärken Sie die Sichrheit und Entwicklung unseres Internets. Denn nur wenn
        das Internet für alle ein Sichererer Ort ist kann man Selbst sagen das das Internet Sicher
        ist.
      </Paragraph>
    </Wrapper>
    <Wrapper> </Wrapper>
  </component>
</template>

<script>
/**
 * Shows how to layout and structure a home page.
 */
export default {
  name: "Welcome",
  status: "deprecated",
  release: "1.0.0",
  metaInfo: {
    title: "Wilkommen",
    htmlAttrs: {
      lang: "de",
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

.index {
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
  .heading {
    color: $color-template-text;
    font-size: $size-l;
  }
  .paragraph {
    color: $color-template-text;
    font-size: $size-s;
  }
  .text-link {
    color: $color-template-link;
  }
  .wrapper {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: $space-xxl * 8;
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
  <Index />
  ```
</docs>
