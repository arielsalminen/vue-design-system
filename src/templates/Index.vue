<template>
  <component :is="type" class="index">
    <nav-bar active="Index" :navItems="[
      {name: 'Template', component: 'Index', href: '/#/'},
      {name: 'Style Guide', href: 'http://localhost:6060/'}
    ]"/>
    <wrapper>
      <heading level="h1">Vue Design System</heading>
      <text-style><text-link href="https://vueds.com">Vue Design System</text-link> is an open-source tool for prototyping UI design systems. It provides you and your team a set of organized tools, patterns &amp; practices to build upon, so that you can get started with the actual design system faster.</text-style>
    </wrapper>
  </component>
</template>

<script>
  import Heading from '@/elements/Heading';
  import TextStyle from '@/elements/TextStyle';
  import TextLink from '@/elements/TextLink';
  import Wrapper from '@/elements/Wrapper';
  import NavBar from '@/patterns/NavBar';

  export default {
    name: 'Index',
    components: {
      heading: Heading,
      textStyle: TextStyle,
      textLink: TextLink,
      navBar: NavBar,
      wrapper: Wrapper
    },
    props: {
      /**
       * The html element name used for the component
       */
      type: {
        type: String,
        default: 'div'
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Local component variables
  $color-template-background: $color-primary-rich-black;
  $color-template-background-top: tint($color-template-background, 5%);
  $color-template-background-bottom: shade($color-template-background, 5%);
  $color-template-text: $color-primary-white;
  $color-template-link: $color-primary-bleu-de-france;

  .index {
    position: relative;
    float: left;
    width: 100%;
    height: 100%;
    min-height: $space-xx-large * 4;
    background: $color-template-background;
    background: linear-gradient(0deg, $color-template-background-bottom, $color-template-background-top 100%);
    text-align: center;
    .heading {
      color: $color-template-text;
    }
    .text-style {
      color: $color-template-text;
    }
    .text-link {
      color: $color-template-link;
    }
    .wrapper {
      transform: translateX(-50%) translateY(-50%);
      position: absolute;
      top: 50%;
      left: 50%;
      max-width: 600px;
    }
  }
</style>

<docs>
  ```jsx
  <index />
  ```
</docs>
