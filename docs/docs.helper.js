/**
 * This is Vue Design System’s JS helper file for docs.
 * You can add more things if/when needed.
 */
import Vue from "vue"
import WebFontLoader from "../src/utils/webFontLoader" // eslint-disable-line no-unused-vars
import statusLabels from "./utils/statusLabels"
import "codemirror/mode/jsx/jsx"

// these component Needs to be loaded in somewhere as this is also shown in
// element, Pattern & Template overviews.
const components = require.context("./components/status/", true, /[A-Z].+.vue$/)

// For each matching file name...
components.keys().forEach(fileName => {
  // Get the component config
  const componentConfig = components(fileName)

  // get the component name from the object
  const componentName = componentConfig.default.name || componentConfig.name

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false
Vue.mixin(statusLabels)
