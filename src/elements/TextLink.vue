<template>
  <a :href="href" :target="target" class="text-link">
    <slot/>
  </a>
</template>

<script>
/**
 * Text links are used to embed actions or pathways to more information in a sentence.
 */
export default {
  name: "TextLink",
  version: "ready",
  props: {
    /**
     * The URL for the link
     */
    href: {
      default: "#",
      required: true,
    },
    /**
     * Specifies where to display the linked URL.
     * `_self, _blank, _parent, _top`
     */
    target: {
      type: String,
      default: "_self",
      validator: value => {
        return value.match(/(_self|_blank|_parent|_top)/)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.text-link {
  @include reset;
  font-family: $font-family-text;
  color: $color-vermilion;
  text-decoration: underline;
  @media #{$media-query-large} {
    // This is how you’d use design tokens with media queries
  }
}
</style>

<docs>
  ```jsx
  <text-link href="https://viljamisdesign.com">I am a link!</text-link>
  ```
</docs>
