import Vue from "vue";
import Router from "vue-router";

import { Toast } from "mint-ui";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/index")
    },
    {
      path: "/inspect",
      name: "inspect",
      component: () => import("@/views/inspect/list"),
      children: [
        {
          path: "result",
          name: "result",
          component: () => import("@/views/inspect/result")
        }
      ]
    },
    {
      path: "/status",
      name: "status",
      component: () => import("@/views/inspect/status")
    },
    {
      path: "*",
      name: "404",
      component: () => {
        Toast("开发中，尽情期待");
      }
    }
  ]
});
