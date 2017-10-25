<template>
  <div>
    <navigation/>
    <heading>Template 2</heading>
  </div>
</template>

<script>
  import Heading from '@/elements/Heading';
  import Navigation from '@/components/styleguide/Navigation';

  export default {
    name: 'Template2',
    components: {
      heading: Heading,
      navigation: Navigation,
    },
  };
</script>

<style lang="scss" scoped>
</style>

<docs>
  ```jsx
  <template-2/>
  ```
</docs>
