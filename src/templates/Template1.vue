<template>
  <div>
    <component-navigation/>
    <element-header1>Template 1</element-header1>
  </div>
</template>

<script>
  import ElementHeader1 from '@/elements/ElementHeader1';
  import ComponentNavigation from '@/components/styleguide/ComponentNavigation';

  export default {
    name: 'Template1',
    components: {
      elementHeader1: ElementHeader1,
      componentNavigation: ComponentNavigation,
    },
  };
</script>

<style lang="scss" scoped>
</style>
