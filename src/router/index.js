import Vue from "vue"
import Router from "vue-router"
import Index from "@/templates/Welcome"
import Impressum from "@/templates/ImpressumPage"
import BlogPage from "@/templates/BlogPage"
import MyOffers from "@/templates/MyOffers"
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
      name: "Impressum",
      component: Impressum,
    },
    {
      path: "/Angebot",
      name: "Angebot",
      component: MyOffers,
    },
    {
      path: "/Kontakt",
      name: "Contact",
      component: BlogPage,
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound,
    },
  ],
})
