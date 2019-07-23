// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require("es6-promise").polyfill();
import Vue from "vue";
import App from "./App";
import router from "./router";
import "babel-polyfill";
import "lib-flexible";
// 引入全部组件
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
import "@/common/styles/index.less";
import "@/common/utils/jsbridge";
import FastClick from "fastclick";
import store from "@/store";
import VeeValidate from "vee-validate";

if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      FastClick.attach(document.body);
    },
    false
  );
}

import TitleBar from "@/components/Layout/TitleBar";
import Page from "@/components/Layout/Page";

Vue.component("mt-page", Page);
Vue.component("mt-titlebar", TitleBar);

Vue.use(Mint);
Vue.use(VeeValidate);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
