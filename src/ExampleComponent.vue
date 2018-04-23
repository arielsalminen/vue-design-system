<template>
  <component :is="type" :class="['example-component ', variation]">
    <div id="example-container">
      <slot/>
    </div>
  </component>
</template>

<script>
/**
 * “Example Component” is used to visually communicate core parts of the product and available actions.
 */
export default {
  /**
   * Component names should always be multi-word, except for root App components.
   * This prevents conflicts with existing and future HTML elements, since all
   * HTML elements are a single word. See example below:
   */
  name: "example",
  /**
   * Components in the system are labelled with status labels that reflect their
   * state of completion. See example below. All available statuses are:
   *
   * STATUS:        COLOR:     DESCRIPTION:
   *
   * deprecated     Red        Component is deprecated
   * prototype      Blue       Prototype, do not implement!
   * under-review   Yellow     Component is currently being reviewed
   * ready          Green      Ready to be used
   */
  status: "prototype",
  release: "1.0.0",
  /**
   * Prop definitions should be as detailed as possible, specifying at least
   * type(s). See examples below:
   */
  props: {
    /**
     * The html element name used for the container
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * Style variation to give additional meaning.
     * `default, disabled, strong, positive, negative, tiny`
     */
    variation: {
      type: String,
      default: "default",
      validator: value => {
        return value.match(/(default|disabled|strong|positive|negative|tiny)/)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
/**
 * Styles in a top-level App component and in layout components may be global,
 * but all other components should always be scoped (using either scoped
 * attribute or class based scoping).
 */
.example-component {
  @include reset;
  @include stack-space($space-small);
  color: set-text-color($color-rich-black, $color-white);
  @media #{$media-query-medium} {
    @include stack-space($space-base);
  }
}
</style>

<docs>
  ```jsx
  <example-component>
    Docs section should have an example that is shown in the documentation.
  </example-component>
  ```
</docs>
