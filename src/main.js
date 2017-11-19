// VDS: The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import webFontLoader from "./utils/webFontLoader";

// VDS: Importing components globally
import Heading from "@/elements/Heading";
import TextStyle from "@/elements/TextStyle";
import TextLink from "@/elements/TextLink";
import Wrapper from "@/elements/Wrapper";
import SvgIcon from "@/elements/SvgIcon";
import NavBar from "@/patterns/NavBar";

// VDS: Registering components for local usage
Vue.component("heading", Heading);
Vue.component("text-style", TextStyle);
Vue.component("text-link", TextLink);
Vue.component("wrapper", Wrapper);
Vue.component("svg-icon", SvgIcon);
Vue.component("nav-bar", NavBar);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
