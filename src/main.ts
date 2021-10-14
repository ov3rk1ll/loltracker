import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import { PusherPlugin, PusherPluginOptions } from "./services/pusher";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faSort,
  faClock,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./assets/tailwind.css";

library.add(faChevronLeft);
library.add(faSort);
library.add(faClock);
library.add(faSun);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(PusherPlugin, {
  appKey: "3cc9803efb94cb739cfd",
  options: {
    cluster: "eu",
    authEndpoint: "https://lol-tracker-spectator.herokuapp.com/auth/pusher",
  },
} as PusherPluginOptions);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
