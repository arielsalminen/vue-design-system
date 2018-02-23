<template>
  <div class="component-status">
    <div v-for="component in components" class="component">
      {{component.name}} <span>{{component.version}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentStatus",
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
  },
  data() {
    return {
      components: this.getComponents(),
    }
  },
}
</script>

<style lang="scss" scoped>
.component-status {
  .component {
  }
}
</style>

<docs>
  ```jsx
  <component-status/>
  ```
</docs>
