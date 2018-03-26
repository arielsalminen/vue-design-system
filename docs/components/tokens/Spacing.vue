<template>
  <component is="div" class="spacing">
    <div v-for="prop in tokens" class="space" v-if="prop.category === 'space'" :style="{ lineHeight: prop.value, height: prop.value }">
      ${{prop.name.replace(/_/g, "-")}} <span>({{prop.value}})</span>
    </div>
  </component>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"

export default {
  name: "Spacing",
  methods: {
    orderData: function(data) {
      let order = _.orderBy(data, "category", "asc")
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
.spacing {
  overflow: hidden;
  width: 100%;
}
.space {
  box-shadow: $box-shadow-small-inset;
  margin-bottom: $space-x-small;
  font-size: $font-size-x-small;
  font-family: $font-family-text;
  color: $color-rich-black;
  background: #f4f6f8;
  text-align: center;
  position: relative;
  float: left;
  width: 100%;
  span {
    margin-left: 5px;
    font-style: italic;
    opacity: 0.5;
  }
}
</style>

<docs>
  ```jsx
  <spacing/>
  ```
</docs>
