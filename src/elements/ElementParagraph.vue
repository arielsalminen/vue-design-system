<template>
  <p>
    <slot/>
  </p>
</template>

<script>
  export default {
    name: 'ElementParagraph'
  }
</script>

<style lang="scss" scoped>
  p {
    line-height: $line-height-base;
    font-family: $font-primary;
    font-size: $font-size-base;
    margin-bottom: $space-small;
    color: $color-text-default;
    font-style: normal;
    font-weight: 400;
    &:last-child { margin-bottom: 0 }
  }
</style>


<docs>
  ```jsx
  <element-paragraph>Design isn’t just about the look and feel. Design is how it works, and we believe the best way to focus on this is to work as close to the end result as possible. That’s why we start all our projects with simple sketches, and quickly transition into design­ing working prototypes in code. This is done by the same designers who started the work, which ensures that our original design intent is carried all the way to the end product.</element-paragraph>
  ```
</docs>
