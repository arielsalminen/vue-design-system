<template>
  <div class="font-sizes">
    <div
      v-for="(prop, index) in tokens"
      :key="index"
      class="font"
      v-if="prop.category === 'font-size'"
      :style="{ fontSize: prop.value }">
        ${{prop.name.replace(/_/g, "-")}} <span>({{prop.value}})</span>
    </div>
  </div>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import orderBy from "lodash/orderBy"

/**
 * This typographic scale makes it easier to achieve visual harmony in the
 * interface. It’s purposefully designed to keep the number of separate font
 * sizes to a minimum. To edit font-sizes, see
 * [/src/tokens/font-size.yml](https://github.com/viljamis/vue-design-system/blob/master/src/tokens/font-size.yml).
 */
export default {
  name: "FontSize",
  methods: {
    orderData: function(data) {
      let order = orderBy(data, "value", "desc")
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

.font-sizes {
  overflow: hidden;
  width: 100%;
}
.font {
  @include reset;
  font-family: $font-family-heading;
  font-weight: $font-weight-bold;
  line-height: $line-height-heading;
  color: $color-rich-black;
  margin-bottom: $space-small;
  font-style: normal;
  span {
    letter-spacing: -0.02em;
    margin-left: 10px;
    font-weight: $font-weight-regular;
    color: $color-silver;
  }
}
</style>

<docs>
  ```jsx
  <FontSize/>
  ```
</docs>
