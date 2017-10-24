<template>
  <div>
    <navigation/>
    <heading-1>Template 3</Heading-1>
  </div>
</template>

<script>
  import Heading1 from '@/elements/Heading1';
  import Navigation from '@/components/styleguide/Navigation';

  export default {
    name: 'Template3',
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
  <template-3/>
  ```
</docs>
