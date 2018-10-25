<template>
  <div class="component-status">
    <ul class="status-list">
      <li>
        <Icon name="ready" fill="#7cb518" size="small"/>
        <p>Ready</p>
      </li>
      <li>
        <Icon name="review" :fill="tokens.color_ucla_gold.value" size="small"/>
        <p>Under review</p>
      </li>
      <li>
        <Icon name="deprecated" :fill="tokens.color_vermilion.value" size="small"/>
        <p>Deprecated</p>
      </li>
      <li>
        <Icon name="prototype" :fill="tokens.color_bleu_de_france.value" size="small"/>
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
          <th v-if="show === 'all'">Component Name</th>
          <th v-if="show === 'elements'">Element Name</th>
          <th v-if="show === 'patterns'">Pattern Name</th>
          <th v-if="show === 'templates'">Template Name</th>
          <th>Released in</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(component, index) in components" :key="index" class="component">
          <td v-if="component.name">
            <code class="name">{{component.name}}</code>
          </td>
          <td v-else>N/A</td>
          <td v-if="component.release">{{component.release}}</td>
          <td v-else>N/A</td>
          <td v-if="component.status">
            <Icon v-if="component.status === 'ready'" name="ready" fill="#7cb518" size="small"/>
            <Icon
              v-if="component.status === 'under-review' || component.status === 'review'"
              name="review"
              :fill="tokens.color_ucla_gold.value"
              size="small"
            />
            <Icon
              v-if="component.status === 'prototype'"
              name="prototype"
              :fill="tokens.color_bleu_de_france.value"
              size="small"
            />
            <Icon
              v-if="component.status === 'deprecated'"
              name="deprecated"
              :fill="tokens.color_vermilion.value"
              size="small"
            />
          </td>
          <td v-else>—</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// If you want to use your own tokens here, change the following line to:
// import designTokens from "@/assets/tokens/tokens.raw.json"
import designTokens from "../../docs.tokens.json"
import orderBy from "lodash/orderBy"

export default {
  name: "Components",
  props: {
    show: {
      type: String,
      default: "all",
      validator: value => {
        return value.match(/(all|patterns|templates|elements)/)
      },
    },
  },
  methods: {
    getComponents: function() {
      let contexts

      if (this.show === "all") {
        contexts = [
          require.context("@/elements/", true, /\.vue$/),
          require.context("@/patterns/", true, /\.vue$/),
          require.context("@/templates/", true, /\.vue$/),
        ]
      } else if (this.show === "elements") {
        contexts = [require.context("@/elements/", true, /\.vue$/)]
      } else if (this.show === "patterns") {
        contexts = [require.context("@/patterns/", true, /\.vue$/)]
      } else if (this.show === "templates") {
        contexts = [require.context("@/templates/", true, /\.vue$/)]
      }

      const components = []
      contexts.forEach(context => {
        context.keys().forEach(key => components.push(context(key).default))
      })

      return components
    },
    orderData: function(data) {
      return orderBy(data, "name", "asc")
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
@import "../../docs.tokens.scss";

/* STYLES
--------------------------------------------- */

.component-status {
  @include reset;
  font-family: $font-heading;
  font-weight: $weight-normal;
  line-height: $line-height-xs;
  color: $color-rich-black;
  margin-bottom: $space-s;
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
    padding: $space-s;
    background: $color-cloud;
    font-size: $size-s;
    font-weight: $weight-bold;
    color: $color-oxford-blue;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: $weight-semi-bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    // Chrome has a bug related to thead, this only works on th:
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    &:first-child {
      border-top-left-radius: $radius-default;
      border-bottom-left-radius: $radius-default;
    }
    &:last-child {
      border-top-right-radius: $radius-default;
      border-bottom-right-radius: $radius-default;
    }
  }
  tr {
    border-bottom: 1px solid #dfe3e6;
    &:last-child {
      border: 0;
    }
  }
  td {
    font-size: $size-s;
    padding: $space-s;
    &:first-child {
      font-weight: $weight-bold;
      white-space: nowrap;
    }
  }
  .status-list {
    margin: 0 0 $space-m;
    overflow: hidden;
    padding: 0;
    list-style: none;
    flex-direction: row;
    align-items: center;
    display: flex;
    @media (max-width: 1000px) {
      display: block;
    }
    li {
      margin: 0 $space-m 0 0;
      color: $color-silver;
      font-size: $size-s;
      align-items: center;
      display: flex;
      @media (max-width: 1000px) {
        width: 50%;
        float: left;
        margin: 0;
      }
      svg,
      span {
        margin: -2px calc(#{$space-s} / 2) 0 0;
      }
      p {
        @media (max-width: 1000px) {
          margin: $space-xs;
        }
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
