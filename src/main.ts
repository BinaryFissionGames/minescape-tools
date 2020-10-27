import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "materialize-css/sass/materialize.scss";
import {
  MUTATION_LIGHT_BOX_SET_DRAGGING,
  MUTATION_LIGHT_BOX_UNSET_DRAGGING
} from "@/store/mutations";
import { processKeyEvent } from "@/logic/lightbox/keyboard";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

document.addEventListener("mousedown", e => {
  if (e.button == 0) {
    store.commit(MUTATION_LIGHT_BOX_SET_DRAGGING);
  }
});

document.addEventListener("mouseup", e => {
  if (e.button == 0) {
    store.commit(MUTATION_LIGHT_BOX_UNSET_DRAGGING);
  }
});

document.addEventListener("keydown", e => {
  console.log("Keydown: " + e.key);
  processKeyEvent(e);
});
