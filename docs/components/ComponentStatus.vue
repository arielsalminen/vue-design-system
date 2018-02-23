<template>
  <component :is="type" class="component-status">
    <div v-for="component in components" class="component">
      {{component.name}} <span>{{component.version}}</span>
    </div>
  </component>
</template>

<script>
export default {
  name: "ComponentStatus",
  props: {
    type: {
      type: String,
      default: "div",
    },
  },
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

      // return components.forEach(c => console.log(c.name + ", version: " + c.version))
      return components
    },
  },
  mounted() {},
  data() {
    return {
      components: this.getComponents(),
    }
  },
}
</script>

<style lang="scss">
.component-status {
}
</style>

<docs>
  ```jsx
  <component-status/>
  ```
</docs>
