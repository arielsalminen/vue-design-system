<template>
  <component :is="wrapper" class="input">
    <label v-if="label">{{ label }}</label>
    <input
      :id="id"
      :disabled="disabled"
      :type="type"
      :hover="hover"
      :focus="focus"
      :value="value"
      :placeholder="placeholder"
      :class="['input', {'input-expand': width === 'expand'}]"
      @input="input($event.target.value)"
      />
  </component>
</template>

<script>
/**
 * Form Inputs are used to allow users to provide text input when the expected
 * input is short. Form Input has a range of options and supports several text
 * formats including numbers. For longer input, use the `FormTextarea` element.
 */
export default {
  name: "FormInput",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The type of the form input field.
     * `text, number, email`
     */
    type: {
      type: String,
      default: "text",
      validator: value => {
        return value.match(/(text|number|email)/)
      },
    },
    /**
     * Text value of the form input field.
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * The placeholder value for the form input field.
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * The label of the form input field.
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * The html element name used for the wrapper.
     * `div, section`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div|section)/)
      },
    },
    /**
     * Unique identifier of the form input field.
     */
    id: {
      type: String,
      default: "",
    },
    /**
     * The width of the form input field.
     * `auto, expand`
     */
    width: {
      type: String,
      default: "expand",
      validator: value => {
        return value.match(/(auto|expand)/)
      },
    },
    /**
     * Whether the form input field is disabled or not.
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Manually trigger input field’s hover state.
     * `true, false`
     */
    hover: {
      type: Boolean,
      default: false,
    },
    /**
     * Manually trigger input field’s focus state.
     * `true, false`
     */
    focus: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input(value) {
      this.$emit("change", value)
    },
  },
}
</script>

<style lang="scss" scoped>
// Design Tokens with local scope
$color-placeholder: tint($color-silver, 50%);

.input {
  @include stack-space($space-small);
  font-weight: $font-weight-regular;
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: $line-height-heading;
  width: auto;
  &.input-expand {
    width: 100%;
  }
  label {
    display: block;
    font-size: $font-size-small;
    color: tint($color-rich-black, 20%);
    @include stack-space($space-x-small);
  }
  input {
    @include reset;
    @include inset-squish-space($space-small);
    transition: all 0.2s ease;
    -webkit-appearance: none;
    appearance: none;
    font-family: $font-family-text;
    background: $color-white;
    border-radius: $border-radius-default;
    color: set-text-color($color-rich-black, $color-white);
    margin: 0;
    border: 0;
    box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 80%);
    &::-webkit-input-placeholder {
      -webkit-font-smoothing: antialiased;
      color: $color-placeholder;
    }
    &:-ms-input-placeholder {
      color: $color-placeholder;
    }
    &::-moz-placeholder {
      color: $color-placeholder;
      -moz-osx-font-smoothing: grayscale;
      opacity: 1;
    }
    &:hover,
    &[hover] {
      box-shadow: 0 1px 5px 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 60%);
    }
    &:focus,
    &[focus] {
      transition: box-shadow 0.2s ease;
      box-shadow: inset 0 0 0 1px $color-bleu-de-france, 0 0 0 1px $color-bleu-de-france;
      outline: 0;
    }
    &[disabled] {
      box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 80%);
      background: lighten($color-placeholder, 42%);
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
}
</style>


<docs>
  ```jsx
  <div>
    <form-input label="Input" placeholder="Write your text" />
    <form-input label=":hover" hover placeholder="Write your text" />
    <form-input label=":focus" focus placeholder="Write your text" />
    <form-input label="[disabled]" disabled placeholder="Disabled input" />
  </div>
  ```
</docs>
