<template>
  <div>
    <navigation/>
    <heading>Template 3</heading>
  </div>
</template>

<script>
  import Heading from '@/elements/Heading';
  import Navigation from '@/components/styleguide/Navigation';

  export default {
    name: 'Template3',
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
  <template-3/>
  ```
</docs>
