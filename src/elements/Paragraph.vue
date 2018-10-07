<template>
  <component :is="type" :class="['paragraph', variation]">
    <slot/>
  </component>
</template>

<script>
export default {
  name: "Paragraph",
  status: "prototype",
  release: "3.5.0",
  props: {
    /**
     * The html element used for the text.
     * `p, span`
     */
    type: {
      type: String,
      default: "p",
      validator: value => {
        return value.match(/(p|span)/)
      },
    },
    /**
     * Style variation to give additional meaning.
     * `intro, small, medium, large`
     */
    variation: {
      type: String,
      default: "medium",
      validator: value => {
        return value.match(/(medium|intro|large|small)/)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.paragraph {
  @include reset;
  @include stack-space($space-m);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: color 0.3s ease;
  font-family: $font-text;
  font-weight: $weight-normal;
  line-height: $line-height-m;
  color: shade($color-silver, 70%);
  a {
    color: $color-bleu-de-france;
    text-decoration: none;
    &:hover {
      color: darken($color-bleu-de-france, 20%);
    }
  }
  &.intro {
    @include stack-space($space-m);
    font-family: $font-heading;
    font-weight: $weight-light;
    font-size: $size-l;
  }
  &.large {
    font-size: $size-l;
  }
  &.small {
    font-size: $size-s;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <Paragraph>
      Design isn’t just about the look and feel. Design is <a href="https://viljamis.com/2017/design-tools-processes/">how it works</a>, and we believe the best way to focus on this is to work as close to the end result as possible. That’s <a href="https://viljamisdesign.com/process/">why we start</a> all our projects with simple sketches, and quickly transition into designing working prototypes in code. This is done by the same designers who started the work, which ensures that our original design intent is carried all the way to the end product.
    </Paragraph>
    <Paragraph>
      Our core belief is that the products we design should work across anything that can access the web. Whether it’s a laptop, a smartphone, a watch, or even a browser integrated into a car’s dashboard.
    </Paragraph>
  </div>
  ```
</docs>
