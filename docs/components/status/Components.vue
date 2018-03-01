<template>
  <div class="component-status">
    <ul class="status-list">
      <li>
        <svg-icon name="ready" fill="#7cb518" size="16px" />
        <p>Ready</p>
      </li>
      <li>
        <svg-icon name="review" :fill="tokens.color_ucla_gold.value" size="16px" />
        <p>Under review</p>
      </li>
      <li>
        <svg-icon name="deprecated" :fill="tokens.color_vermilion.value" size="16px" />
      <p>Deprecated</p>
      </li>
      <li>
        <svg-icon name="prototype" :fill="tokens.color_bleu_de_france.value" size="16px" />
        <p>Prototype</p>
      </li>
      <li>
        <span>—</span>
        <p>Not applicable</p>
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>Component Name</th>
          <th>Added In</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="component in components" class="component">
          <td v-if="component.name">{{component.name}}</td>
          <td v-else>N/A</td>
          <td v-if="component.addedInVersion">{{component.addedInVersion}}</td>
          <td v-else>N/A</td>
          <td v-if="component.version">
            <svg-icon
              v-if="component.version === 'ready'"
              name="ready"
              fill="#7cb518"
              size="16px"
            />
            <svg-icon
              v-if="component.version === 'under-review' || component.version === 'review'"
              name="review"
              :fill="tokens.color_ucla_gold.value"
              size="16px"
            />
            <svg-icon
              v-if="component.version === 'prototype'"
              name="prototype"
              :fill="tokens.color_bleu_de_france.value"
              size="16px"
            />
            <svg-icon
              v-if="component.version === 'deprecated'"
              name="deprecated"
              :fill="tokens.color_vermilion.value"
              size="16px"
            />
          </td>
          <td v-else>—</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import _ from "lodash"

export default {
  name: "Components",
  methods: {
    getComponents: function() {
      const contexts = [
        require.context("@/elements/", true, /\.vue$/),
        require.context("@/patterns/", true, /\.vue$/),
        require.context("@/templates/", true, /\.vue$/),
      ]

      const components = []
      contexts.forEach(context => {
        context.keys().forEach(key => components.push(context(key).default))
      })

      return components
    },
    orderData: function(data) {
      return _.orderBy(data, "name", "asc")
    },
  },
  data() {
    return {
      components: this.orderData(this.getComponents()),
      tokens: designTokens.props,
    }
  },
}
</script>

<style lang="scss" scoped>
.component-status {
  @include reset;
  font-family: $font-family-heading;
  font-weight: $font-weight-regular;
  line-height: $line-height-heading;
  color: $color-rich-black;
  margin-bottom: $space-small;
  font-style: normal;
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  thead th {
    padding: $space-small $space-large $space-small $space-small;
    background: tint($color-bleu-de-france, 90%);
    font-size: $font-size-small;
    font-weight: $font-weight-bold;
    color: $color-oxford-blue;
    text-align: left;
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
  .status-list {
    margin: 0 0 $space-small;
    padding: 0;
    list-style: none;
    flex-direction: row;
    align-items: center;
    display: flex;
    li {
      margin: 0 $space-base 0 0;
      color: tint($color-rich-black, 30%);
      font-size: $font-size-small;
      align-items: center;
      display: flex;
      svg,
      span {
        margin: -2px calc(#{$space-small} / 2) 0 0;
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <components />
  ```
</docs>
