<template>
  <component is="div" class="colors">
    <div v-for="prop in tokens" class="color" :class="prop.category" v-if="prop.type === 'color'">
      <div class="swatch" :style="{ backgroundColor: prop.value }" />
      <h3>{{prop.name.replace(/_/g, " ").replace(/color/g, "")}}</h3>
      <span>RGB: {{prop.value}}</span>
      <span>SCSS: ${{prop.name.replace(/_/g, "-")}}</span>
    </div>
  </component>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import tinycolor from "tinycolor2"
import _ from "lodash"

export default {
  name: "Color",
  methods: {
    setTextColor: function(color) {
      let background = tinycolor(color)
      if (background.isLight()) {
        return "#000"
      } else {
        return "#fff"
      }
    },
    orderData: function(data) {
      // let byValue = _.orderBy(data, "value", "asc")
      let byName = _.orderBy(data, "name", "asc")
      let byCategoryAndName = _.orderBy(byName, "category")
      return byCategoryAndName
    },
  },
  data() {
    return {
      tokens: this.orderData(designTokens.props),
    }
  },
}
</script>

<style lang="scss" scoped>
.colors {
  display: grid;
  align-content: stretch;
  justify-content: left;
  grid-template-columns:
    calc(20% - #{$space-base}) calc(20% - #{$space-base}) calc(20% - #{$space-base}) calc(20% - #{$space-base})
    calc(20% - #{$space-base});
  grid-column-gap: $space-base;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 1300px) {
    grid-template-columns: calc(25% - #{$space-base}) calc(25% - #{$space-base}) calc(25% - #{$space-base}) calc(
        25% - #{$space-base}
      );
  }
  @media (max-width: 1100px) {
    grid-template-columns: calc(33.333% - #{$space-base}) calc(33.333% - #{$space-base}) calc(33.333% - #{$space-base});
  }
  @media (max-width: 900px) {
    grid-template-columns: calc(50% - #{$space-base}) calc(50% - #{$space-base});
  }
}
.swatch {
  @include stack-space($space-x-small);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  height: $space-xx-large;
  margin: -#{$space-small} -#{$space-small} 0;
  width: calc(100% + #{$space-large});
  float: left;
}
h3 {
  @include stack-space($space-x-small);
  text-transform: capitalize;
  line-height: 1.2;
  width: 100%;
  float: left;
}
.color {
  @include reset;
  @include inset-space($space-small);
  -webkit-font-smoothing: antialiased;
  margin-bottom: $space-large;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15);
  font-size: $font-size-small;
  font-family: $font-family-text;
  color: $color-rich-black;
  border-radius: $border-radius-default;
  overflow: hidden;
  text-align: left;
  float: left;
  width: 100%;
  &:hover {
    span {
      color: shade($color-silver, 40%);
    }
  }
  span {
    margin-bottom: $space-x-small;
    line-height: 1.3;
    color: $color-silver;
    font-size: $font-size-small;
    width: 100%;
    float: left;
  }
}
</style>

<docs>
  ```jsx
  <color/>
  ```
</docs>
