<template>
  <component is="div" class="all-tokens">
    <table>
      <thead>
        <tr>
          <th>Token Name</th>
          <th>Value</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="token in tokens" class="token">
          <td v-if="token.name">
            <code class="name">
              ${{token.name.replace(/_/g, "-")}}
            </code>
          </td>
          <td v-else>N/A</td>
          <td v-if="token.value">
            <code class="type">
              {{token.value}}
            </code>
          </td>
          <td v-else>N/A</td>
          <td v-if="token.category">{{token.category}}</td>
          <td v-else>N/A</td>
        </tr>
      </tbody>
    </table>
  </component>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import _ from "lodash"

/**
 * A list of all available design tokens in Vue Design System. Use these tokens in place of hard-coded values in order to maintain a scalable and consistent system.
 */
export default {
  name: "All",
  methods: {
    orderData: function(data) {
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
.all-tokens {
  @include reset;
  font-family: $font-family-heading;
  font-weight: $font-weight-regular;
  line-height: $line-height-heading;
  color: $color-rich-black;
  margin-bottom: $space-small;
  font-style: normal;
  @media (max-width: 1000px) {
    overflow-x: auto;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  thead th {
    padding: $space-small $space-large $space-small $space-small;
    background: $color-cloud;
    font-size: $font-size-small;
    font-weight: $font-weight-bold;
    color: $color-oxford-blue;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: $font-weight-semi-bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    // Chrome has a bug related to thead, this only works on th:
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    &:first-child {
      border-top-left-radius: $border-radius-default;
      border-bottom-left-radius: $border-radius-default;
    }
    &:last-child {
      border-top-right-radius: $border-radius-default;
      border-bottom-right-radius: $border-radius-default;
    }
  }
  tr {
    border-bottom: 1px solid #dfe3e6;
    &:last-child {
      border: 0;
    }
  }
  td {
    font-size: $font-size-small;
    padding: $space-small $space-large $space-small $space-small;
    &:first-child {
      font-weight: $font-weight-bold;
      white-space: nowrap;
    }
  }
  .type {
    line-height: $line-height-base;
  }
}
</style>

<docs>
  ```jsx
  <all/>
  ```
</docs>
