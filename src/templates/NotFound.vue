<template>
  <component :is="type">
    <wrapper>
      <heading level="h3">404 Error</heading>
      <text-style>Couldn’t find a component that would match the URL you entered. Double check configuration in router/index.js.</text-style>
    </wrapper>
  </component>
</template>

<script>
  import Heading from '@/elements/Heading';
  import TextStyle from '@/elements/TextStyle';
  import Wrapper from '@/elements/Wrapper';

  export default {
    name: 'NotFound',
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
        default: 'div'
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>

<docs>
  ```jsx
  <not-found/>
  ```
</docs>
