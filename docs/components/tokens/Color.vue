<template>
  <component :is="type" class="colors">
    <div v-for="prop in tokens" class="color" :class="prop.category" v-if="prop.type === 'color'" :style="{ backgroundColor: prop.value, color: setTextColor(prop.value) }">
      ${{prop.name.replace(/_/g, "-")}} <span>{{prop.value}}</span>
    </div>
  </component>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import tinycolor from "tinycolor2"
import _ from "lodash"

export default {
  name: "Color",
  props: {
    type: {
      type: String,
      default: "div",
    },
  },
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
      let byName = _.orderBy(data, "value", "asc")
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

<style lang="scss">
.colors {
  overflow: hidden;
  width: 100%;
}
.color {
  font-size: $font-size-s;
  font-family: $font-family-text;
  color: $color-white;
  height: $space-l;
  line-height: $space-l;
  text-align: center;
  float: left;
  width: 100%;
  span {
    margin-left: 10px;
    font-style: italic;
    opacity: 0.5;
  }
}
</style>

<docs>
  ```jsx
  <color/>
  ```
</docs>
