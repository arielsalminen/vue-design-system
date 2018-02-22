import Vue from "vue"

import WebFontLoader from "../src/utils/webFontLoader"
import statusLabels from "../src/utils/docs/statusLabels"
import hidePrivate from "../src/utils/docs/hidePrivate"

Vue.mixin(hidePrivate)
Vue.mixin(statusLabels)
