import Vue from "vue"
import Router from "vue-router"
import Index from "@/templates/Index"
import Spacing from "@/templates/Spacing"
import NotFound from "@/templates/NotFound"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/spacing/",
      name: "Spacing",
      component: Spacing,
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound,
    },
  ],
})
