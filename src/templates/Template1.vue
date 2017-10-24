<template>
  <div>
    <navigation/>
    <heading-1>Template 1</heading-1>
  </div>
</template>

<script>
  import Heading1 from '@/elements/Heading1';
  import Navigation from '@/components/styleguide/Navigation';

  export default {
    name: 'Template1',
    components: {
      heading1: Heading1,
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
