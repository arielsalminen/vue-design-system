<template>
  <component :is="type">
    <slot>
      <navigation/>
    </slot>
    <wrapper>
      <heading>Quick Brown Fox Jumps</heading>
      <text-style>Design isn’t just about the look and feel. <text-link href="https://viljamis.com/2017/design-tools-processes/" target="_blank">Design is how it works</text-link>, and we believe the best way to focus on this is to work as close to the end result as possible. That’s why we start all our projects with simple sketches, and quickly transition into designing working prototypes in code. This is done by the same designers who started the work, which ensures that our original design intent is carried all the way to the end product.</text-style>
    </wrapper>
  </component>
</template>

<script>
  import Heading from '@/elements/Heading';
  import TextStyle from '@/elements/TextStyle';
  import TextLink from '@/elements/TextLink';
  import Wrapper from '@/elements/Wrapper';
  import Navigation from '@/patterns/Navigation';

  export default {
    name: 'Test',
    components: {
      heading: Heading,
      textStyle: TextStyle,
      textLink: TextLink,
      navigation: Navigation,
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
</style>

<docs>
  ```jsx
  <test>
    <navigation>
      <a href="http://localhost:8080" class="router-link-active">Test Template</a>
      <a href="http://localhost:6060">Style Guide</a>
    </navigation>
  </test>
  ```
</docs>
