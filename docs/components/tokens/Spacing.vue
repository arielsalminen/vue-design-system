<template>
  <div class="spacing">
    <div
      v-for="(prop, index) in tokens"
      :key="index"
      class="space"
      v-if="prop.category === 'space'"
      :style="{ lineHeight: prop.value, height: prop.value }">
        ${{prop.name.replace(/_/g, "-")}} <span>({{prop.value}})</span>
    </div>
  </div>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import orderBy from "lodash/orderBy"

/**
 * A framework for creating a predictable and harmonious spacing system. These
 * tokens are used for padding, margins, and position together with
 * [spacing utilities](https://github.com/viljamis/vue-design-system/wiki/spacing).
 * To edit spacing, see
 * [/src/tokens/spacing.yml](https://github.com/viljamis/vue-design-system/blob/master/src/tokens/spacing.yml).
 */
export default {
  name: "Spacing",
  methods: {
    orderData: function(data) {
      let order = orderBy(data, "category", "asc")
      return order
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
@import "../../docs.tokens.scss";

/* STYLES
--------------------------------------------- */

.spacing {
  overflow: hidden;
  max-width: 1176px;
  width: 100%;
}
.space {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: $border-radius-default;
  box-shadow: $box-shadow-small-inset;
  margin-bottom: $space-x-small;
  font-size: $font-size-small;
  font-family: $font-family-text;
  color: $color-rich-black;
  background: tint(#c4cdd5, 85%);
  text-align: center;
  position: relative;
  float: left;
  width: 100%;
  span {
    margin-left: 5px;
    color: $color-silver;
  }
}
</style>

<docs>
  ```jsx
  <spacing/>
  ```
</docs>
