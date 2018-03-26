<template>
  <component is="div" class="font-sizes">
    <div v-for="prop in tokens" class="font" v-if="prop.category === 'font-size'" :style="{ fontSize: prop.value }">
      ${{prop.name.replace(/_/g, "-")}} <span>({{prop.value}})</span>
    </div>
  </component>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"

export default {
  name: "FontSize",
  methods: {
    orderData: function(data) {
      let order = _.orderBy(data, "value", "desc")
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
    margin-left: 10px;
    font-style: italic;
    color: $color-silver;
  }
}
</style>

<docs>
  ```jsx
  <FontSize/>
  ```
</docs>
