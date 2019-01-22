import Vue from "vue"
import Router from "vue-router"
import Index from "@/templates/Index"
import Impressum from "@/templates/Impressum.vue"
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
      path: "/Impressum",
      name: "ImpressumPage",
      component: Impressum,
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound,
    },
  ],
})
