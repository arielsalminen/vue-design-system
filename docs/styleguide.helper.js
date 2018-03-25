import Vue from "vue"

import WebFontLoader from "../src/utils/webFontLoader"
import statusLabels from "./utils/statusLabels"
import hidePrivate from "./utils/hidePrivate"
import collapsibleNav from "./utils/collapsibleNav"

Vue.mixin(hidePrivate)
Vue.mixin(statusLabels)
Vue.mixin(collapsibleNav)
