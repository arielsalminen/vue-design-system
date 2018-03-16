import instance from "@/utils/vueInstance"

// Defines contexts to require
const contexts = [
  require.context("@/elements/", true, /\.vue$/),
  require.context("@/patterns/", true, /\.vue$/),
  require.context("@/templates/", true, /\.vue$/),
]

const components = []
contexts.forEach(context => {
  context.keys().forEach(key => components.push(context(key).default))
})

export default {
  install(Vue, options) {
    components.forEach(c => Vue.component(c.name, c))
  },
}

export { instance }
