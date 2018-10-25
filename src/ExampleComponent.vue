<template>
  <component :is="type" :class="['example', variation]">
    <div id="Example-container">
      <slot/>
    </div>
  </component>
</template>

<script>
/**
 * Example component is used to visually communicate core parts of the product
 * and available actions.
 */
export default {
  /**
   * Component names should be short, pronounceable and Capitalized.
   */
  name: "Example",
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
  /**
   * Release indicates when this component was added into the system.
   * (in which design system version)
   */
  release: "1.0.0",
  /**
   * Prop definitions should be as detailed as possible, specifying at least
   * type(s). See examples below:
   */
  props: {
    /**
     * The html element name used for the container of Example component.
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * Style variation to give additional meaning.
     * `default, strong, positive, negative`
     */
    variation: {
      type: String,
      default: "default",
      validator: value => {
        return value.match(/(default|strong|positive|negative)/)
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
.example {
  @include reset;
  @include stack-space($space-m);
  color: set-text-color($color-rich-black, $color-white);
  @media #{$media-query-m} {
    @include stack-space($space-xl);
  }
}
</style>

<docs>
  ```jsx
  <Example>
    Docs section should have an example that is shown in the documentation.
  </Example>
  ```
</docs>
