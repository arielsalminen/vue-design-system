import Vue from "vue"

import WebFontLoader from "../src/utils/webFontLoader"
import statusLabels from "./utils/statusLabels"
import hidePrivate from "./utils/hidePrivate"

Vue.mixin(hidePrivate)
Vue.mixin(statusLabels)
