<template>
  <div>
    <component-navigation/>
    <div class="wrapper">

      <section>
        <span class="divider">Color</span>
        <div class="color primary-vermilion"></div>
        <div class="color primary-ucla-gold"></div>
        <div class="color primary-bleu-de-france"></div>
        <div class="color primary-rich-black"></div>
        <div class="color primary-oxford-blue"></div>
        <div class="color primary-white"></div>
      </section>

      <section>
        <span class="divider">Typography</span>
        <element-header1>The quick brown fox</element-header1>
        <element-header2>The quick brown fox</element-header2>
        <element-header3>The quick brown fox</element-header3>
        <element-header4>The quick brown fox</element-header4>
        <element-header5>The quick brown fox</element-header5>
        <element-header6>The quick brown fox</element-header6>
        <element-paragraph>Design isn’t just about the look and feel. <element-link href="https://viljamis.com/2017/design-tools-processes/">Design is how it works</element-link>, and we believe the best way to focus on this is to work as close to the end result as possible. That’s why we start all our projects with simple sketches, and quickly transition into design­ing working prototypes in code. This is done by the same designers who started the work, which ensures that our original design intent is carried all the way to the end product.</element-paragraph>
        <element-paragraph>Our core belief is that the products we design should work across anything that can access the web. Whether it’s a laptop, a smartphone, a watch, or even a browser integrated into a car’s dashboard. Previously, we worked in Silicon Valley designing digital products for everyone from startups to Fortune 500 companies. Today, we’re focused on helping our own clients to succeed in their businesses. <element-link href="https://viljamisdesign.com/">Have a project in mind?</element-link></element-paragraph>
      </section>

      <section>
        <span class="divider">Iconography</span>
        <icon-arrow-left/>
        <icon-close/>
        <icon-settings/>
        <icon-delete/>
      </section>

      <section>
        <span class="divider">Spacing</span>
        <div class="space tiny"><i>tiny</i></div>
        <div class="space small"><i>small</i></div>
        <div class="space base"><i>base</i></div>
        <div class="space large"><i>large</i></div>
        <div class="space x-large"><i>x-large</i></div>
        <div class="space xx-large"><i>xx-large</i></div>
        <div class="space xxx-large"><i>xxx-large</i></div>
      </section>
    </div>
  </div>
</template>

<script>
  import ElementHeader1 from '@/elements/ElementHeader1';
  import ElementHeader2 from '@/elements/ElementHeader2';
  import ElementHeader3 from '@/elements/ElementHeader3';
  import ElementHeader4 from '@/elements/ElementHeader4';
  import ElementHeader5 from '@/elements/ElementHeader5';
  import ElementHeader6 from '@/elements/ElementHeader6';
  import ElementParagraph from '@/elements/ElementParagraph';
  import ElementLink from '@/elements/ElementLink';

  import IconClose from '@/elements/icons/iconClose';
  import IconArrowLeft from '@/elements/icons/iconArrowLeft';
  import IconSettings from '@/elements/icons/iconSettings';
  import IconDelete from '@/elements/icons/iconDelete';

  import ComponentNavigation from '@/components/styleguide/ComponentNavigation';

  export default {
    name: 'StyleGuide',
    components: {
      elementHeader1: ElementHeader1,
      elementHeader2: ElementHeader2,
      elementHeader3: ElementHeader3,
      elementHeader4: ElementHeader4,
      elementHeader5: ElementHeader5,
      elementHeader6: ElementHeader6,
      elementParagraph: ElementParagraph,
      elementLink: ElementLink,

      iconClose: IconClose,
      iconArrowLeft: IconArrowLeft,
      iconSettings: IconSettings,
      iconDelete: IconDelete,

      componentNavigation: ComponentNavigation,
    },
  };
</script>


<style lang="scss" scoped>
  .wrapper {
    padding: $space-base $space-x-large $space-x-large;
    overflow: hidden;
  }

  section {
    float: left;
    width: 100%;
  }

  .divider {
    border-bottom: 1px solid $color-border-default;
    font-family: $font-primary;
    line-height: $line-height-base;
    font-size: $font-size-small;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    float: left;
    width: 100%;
    color: $color-text-light;
    padding: $space-small 0;
    margin: $space-large 0 $space-base;
  }

  .color {
    box-shadow: $shadow-inset-tiny;
    margin-right: $space-tiny;
    margin-bottom: $space-tiny;
    height: $space-xx-large;
    width: $space-xx-large;
    float: left;

    &.primary-vermilion { background: $color-primary-vermilion }
    &.primary-ucla-gold { background: $color-primary-ucla-gold }
    &.primary-bleu-de-france { background: $color-primary-bleu-de-france }
    &.primary-rich-black { background: $color-primary-rich-black }
    &.primary-oxford-blue { background: $color-primary-oxford-blue }
    &.primary-white { background: $color-primary-white }
  }

  .icon {
    fill: $color-primary-rich-black;
    margin-right: $space-tiny;
    margin-bottom: $space-tiny;
    width: $space-small;
    height: $space-small;
    float: left;
  }

  .space {
    background: darken($color-primary-white, 5%);
    margin-bottom: $space-tiny;
    margin-right: $space-tiny;
    font-size: $font-size-tiny;
    font-family: $font-primary;
    color: $color-text-light;
    text-align: center;
    position: relative;
    overflow: hidden;
    float: left;

    &.tiny { width: $space-tiny; height: $space-tiny }
    &.small { width: $space-small; height: $space-small }
    &.base { width: $space-base; height: $space-base }
    &.large { width: $space-large; height: $space-large }
    &.x-large { width: $space-x-large; height: $space-x-large }
    &.xx-large { width: $space-xx-large; height: $space-xx-large }
    &.xxx-large { width: $space-xxx-large; height: $space-xxx-large }

    i {
      transform: translateX(-50%) translateY(-50%);
      white-space: nowrap;
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }
</style>
