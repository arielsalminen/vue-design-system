<template>
  <component :is="type" class="spacing">
    <main>
      <div class="row">
        <div class="inline">Inline text</div>
        <button class="inline">Button 1</button>
        <button class="inline">Button 2</button>
        <button class="inline">Button 3</button>
      </div>
      <section class="xxl">
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <p>Paragraph text lorem ipsum dolor sit amet consectetuer adipiscing elit no nummy laoreet. Lorem ipsum dolor sit amet consectetuer adipiscing elit no nummy laoreet.</p>
        <p>Paragraph text lorem ipsum dolor sit amet consectetuer adipiscing elit no nummy laoreet. Lorem ipsum dolor sit amet consectetuer adipiscing elit no nummy laoreet.</p>
      </section>
      <section class="xl">
      </section>
      <section class="l"></section>
      <section class="m"></section>
      <section class="s"></section>
      <section class="xs"></section>
      <section class="xxs">
        <h2>Header 2</h2>
        <p>Paragraph text lorem ipsum dolor sit amet consectetuer adipiscing elit no nummy laoreet. Lorem ipsum dolor sit amet consectetuer adipiscing elit no nummy laoreet.</p>
      </section>
    </main>
  </component>
</template>

<script>
/**
 * Demo spacing template.
 */
export default {
  name: "Spacing",
  status: "prototype",
  release: "1.0.0",
  metaInfo: {
    title: "Vue Design System Spacing",
    htmlAttrs: {
      lang: "en",
    },
  },
  props: {
    /**
     * The html element name used for the component
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped>
.spacing {
}
</style>

<docs>
  ```jsx
  <spacing />
  ```
</docs>
