/**
 * System.js creates the Design System Library.
 * It’s used in the system itself and when exporting it.
 *
 * You should & can add your own dependencies here if needed.
 */

// Define contexts to require
// (remove templates if not used in production)
const contexts = [
  require.context("@/elements/", true, /\.vue$/),
  require.context("@/patterns/", true, /\.vue$/),
  require.context("@/templates/", true, /\.vue$/),
]

const components = []

contexts.forEach(context => {
  context.keys().forEach(key => components.push(context(key).default))
})

// https://sebastiandedeyne.com/exposing-multiple-vue-components-as-a-plugin
const System = {
  install(Vue) {
    components.forEach(component => Vue.component(component.name, component))
  },
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  components.forEach(component => window.Vue.use(component))
}

export default System
export { components }
