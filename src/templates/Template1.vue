<template>
  <div>
    <navigation/>
    <heading>Template 1</heading>
  </div>
</template>

<script>
  import Heading from '@/elements/Heading';
  import Navigation from '@/components/styleguide/Navigation';

  export default {
    name: 'Template1',
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
  <template-1/>
  ```
</docs>
