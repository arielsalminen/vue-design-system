import Vue from "vue"
import Router from "vue-router"
import Index from "@/templates/Index"
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
      path: "*",
      name: "NotFound",
      component: NotFound,
    },
  ],
})
