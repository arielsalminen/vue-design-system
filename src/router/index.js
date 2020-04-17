import Vue from "vue"
import Router from "vue-router"
import VdsIndex from "@/templates/VdsIndex"
import VdsNotFound from "@/templates/VdsNotFound"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: VdsIndex,
    },
    {
      path: "*",
      name: "NotFound",
      component: VdsNotFound,
    },
  ],
})
