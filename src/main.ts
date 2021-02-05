import Vue from "vue";
import App from "./App.vue";
import router, { LIGHTBOX_ROUTE } from "./router";
import store from "./store";
import "materialize-css/sass/materialize.scss";
import "./style/main.scss";
import {
  MUTATION_LIGHT_BOX_SET_DRAGGING,
  MUTATION_LIGHT_BOX_UNSET_DRAGGING
} from "@/store/mutations";
import { processLightBoxKeyEvent } from "@/logic/lightbox/keyboard";
import {
  setCssVariablesForColorMode,
  setupSystemDefaultColorModeEvent
} from "@/style/css_vars";

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
  if (router.currentRoute.fullPath === LIGHTBOX_ROUTE) {
    processLightBoxKeyEvent(e);
  }
});

//Setup styles.
setupSystemDefaultColorModeEvent();
setCssVariablesForColorMode(store.state.persistentState.colorMode);
