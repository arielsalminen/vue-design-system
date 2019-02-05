<template>
  <component :is="type" :class="['myoffers']">
    <NavBar
      active="MyOffers"
      :navItems="[
        { name: 'Willkommen', component: 'Index', href: '/#/' },
        { name: 'Angebot', component: 'MyOffers', href: '/#/Angebot' },
        { name: 'Kontakt', component: 'ContactPage', href: '/#/Kontakt/' },
        { name: 'Impressum', component: 'ImpressumPage', href: '/#/Impressum/' },
      ]"
    />
    <div id="MyOffers">
      <wrapper>
        <Paragraph>
          <h2>Service</h2>
          Ich bin ein default Post für mein Blog. Es ist nur ein Test und wir passen es gut an. Also
          viel freude und Spass mit meinen Blog.
        </Paragraph>
        <Paragraph>
          <h2>Praxis</h2>
          Ich bin ein default Post für mein Blog. Es ist nur ein Test und wir passen es gut an. Also
          viel freude und Spass mit meinen Blog. Hier ist mehr Zeug das wir posten wollen.
        </Paragraph>
        <Paragraph>
          <h2>Büro</h2>
          Ich bin ein default Post für mein Blog. Es ist nur ein Test und wir passen es gut an. Also
          viel freude und Spass mit meinen Blog. Hier ist mehr Zeug das wir posten wollen.
        </Paragraph>
      </wrapper>
      <slot />
    </div>
  </component>
</template>

<script>
/**
 * Example component is used to visually communicate core parts of the product
 * and available actions.
 */
export default {
  /**
   * Component names should be short, pronounceable and Capitalized.
   */
  name: "Angebot",
  /**
   * Components in the system are labelled with status labels that reflect their
   * state of completion. See example below. All available statuses are:
   *
   * STATUS:        COLOR:     DESCRIPTION:
   *
   * deprecated     Red        Component is deprecated
   * prototype      Blue       Prototype, do not implement!
   * under-review   Yellow     Component is currently being reviewed
   * ready          Green      Ready to be used
   */
  status: "prototype",
  /**
   * Release indicates when this component was added into the system.
   * (in which design system version)
   */
  release: "0.0.1",
  /**
   * Prop definitions should be as detailed as possible, specifying at least
   * type(s). See examples below:
   */
  props: {
    /**
     * The html element name used for the container of Example component.
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * Style variation to give additional meaning.
     * `default, strong, positive, negative`
     */
    variation: {
      type: String,
      default: "default",
      validator: value => {
        return value.match(/(default|strong|positive|negative)/)
      },
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

.myoffers {
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
  z-index: 0;
  @media #{$media-query-l} {
    // This is how you’d use design tokens with media queries
  }
  .heading {
    color: $color-template-text;
    font-size: $size-l;
  }
  .paragraph {
    color: $color-template-text;
    background-color: $color-rich-black;
    font-size: $size-s;
    padding: 5px;
  }
  .text-link {
    color: $color-template-link;
  }
  .wrapper {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: $space-xxl * 6;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #bebebe;
  }
  a {
    font-family: $font-text;
    color: $color-bleu-de-france;
    text-decoration: underline;
  }
}
</style>

<docs>
  ```json
  <MyOffers />
  ```
</docs>
