import Vue from "vue";
import Vuex from "vuex";
import { ColorMode, LightBoxStep, VuexState } from "@/types/state";
import { LightId } from "@/logic/lightbox/types";
import { nextStep, prevStep } from "@/logic/lightbox/state_transition";
import {
  MUTATION_LIGHT_BOX_ADD_LAST_DRAGGED_OVER,
  MUTATION_LIGHT_BOX_ENTER_KEYBOARD_ENTRY_MODE,
  MUTATION_LIGHT_BOX_EXIT_KEYBOARD_ENTRY_MODE,
  MUTATION_LIGHT_BOX_KEYBOARD_NEXT_ROW,
  MUTATION_LIGHT_BOX_KEYBOARD_PREV_ROW,
  MUTATION_LIGHT_BOX_KEYBOARD_TOGGLE_LIGHT,
  MUTATION_LIGHT_BOX_NEXT_STEP,
  MUTATION_LIGHT_BOX_PREV_STEP,
  MUTATION_LIGHT_BOX_RESET_STEP,
  MUTATION_LIGHT_BOX_SET_DRAGGING,
  MUTATION_LIGHT_BOX_UNSET_DRAGGING,
  MUTATION_RESET_LIGHT_BOX,
  MUTATION_SET_COLOR_SCHEME,
  MUTATION_TURN_OFF_LIGHT,
  MUTATION_TURN_ON_LIGHT
} from "@/store/mutations";
import { getFilled2DArray, getFilled3DArray } from "@/logic/util/arrays";
import { STEP_INFO } from "@/logic/lightbox/state_info";
import {
  loadPersistentState,
  storePersistentState
} from "@/store/persistent_state";
import { setCssVariablesForColorMode } from "@/style/css_vars";

Vue.use(Vuex);

const initialState: VuexState = {
  lightBoxState: {
    currentStep: LightBoxStep.Initial,
    lightStates: getFilled3DArray(6, 6, 9, false),
    dragInfo: {
      isDragging: false,
      lastToggled: []
    },
    keyboardEntryInfo: {
      inEntryMode: false,
      curRow: 0
    }
  },
  persistentState: loadPersistentState()
};

const store = new Vuex.Store({
  state: initialState,
  mutations: {
    [MUTATION_RESET_LIGHT_BOX](state: VuexState) {
      state.lightBoxState.currentStep = LightBoxStep.Initial;
      state.lightBoxState.lightStates = getFilled3DArray(6, 6, 9, false);
    },

    [MUTATION_TURN_ON_LIGHT](state: VuexState, id: LightId) {
      const index = STEP_INFO[state.lightBoxState.currentStep].lightArrayIndex;
      if (
        state.lightBoxState.currentStep !== LightBoxStep.DisplayResult &&
        index !== null
      ) {
        state.lightBoxState.lightStates[index][id.row].splice(id.col, 1, true);
      }
    },

    [MUTATION_TURN_OFF_LIGHT](state: VuexState, id: LightId) {
      const index = STEP_INFO[state.lightBoxState.currentStep].lightArrayIndex;
      if (
        state.lightBoxState.currentStep !== LightBoxStep.DisplayResult &&
        index !== null
      ) {
        state.lightBoxState.lightStates[index][id.row].splice(id.col, 1, false);
      }
    },

    [MUTATION_LIGHT_BOX_RESET_STEP](state: VuexState) {
      const index = STEP_INFO[state.lightBoxState.currentStep].lightArrayIndex;
      if (index !== null) {
        state.lightBoxState.lightStates.splice(
          index,
          1,
          getFilled2DArray(6, 6, false)
        );
      }
    },

    [MUTATION_LIGHT_BOX_NEXT_STEP]: nextStep,
    [MUTATION_LIGHT_BOX_PREV_STEP]: prevStep,
    [MUTATION_LIGHT_BOX_SET_DRAGGING](state: VuexState) {
      state.lightBoxState.dragInfo.isDragging = true;
    },
    [MUTATION_LIGHT_BOX_UNSET_DRAGGING](state: VuexState) {
      state.lightBoxState.dragInfo.isDragging = false;
      state.lightBoxState.dragInfo.lastToggled = [];
    },
    [MUTATION_LIGHT_BOX_ADD_LAST_DRAGGED_OVER](
      state: VuexState,
      light: LightId
    ) {
      state.lightBoxState.dragInfo.lastToggled.push(light);
    },
    [MUTATION_LIGHT_BOX_ENTER_KEYBOARD_ENTRY_MODE](state: VuexState) {
      state.lightBoxState.keyboardEntryInfo.inEntryMode = true;
      state.lightBoxState.keyboardEntryInfo.curRow = 0;
    },
    [MUTATION_LIGHT_BOX_EXIT_KEYBOARD_ENTRY_MODE](state: VuexState) {
      state.lightBoxState.keyboardEntryInfo.inEntryMode = false;
    },
    [MUTATION_LIGHT_BOX_KEYBOARD_NEXT_ROW](state: VuexState) {
      state.lightBoxState.keyboardEntryInfo.curRow =
        state.lightBoxState.keyboardEntryInfo.curRow + 1;
      if (state.lightBoxState.keyboardEntryInfo.curRow === 6) {
        state.lightBoxState.keyboardEntryInfo.curRow = 0;
        store.commit(MUTATION_LIGHT_BOX_NEXT_STEP);
      }
    },
    [MUTATION_LIGHT_BOX_KEYBOARD_PREV_ROW](state: VuexState) {
      state.lightBoxState.keyboardEntryInfo.curRow =
        state.lightBoxState.keyboardEntryInfo.curRow - 1;
      if (state.lightBoxState.keyboardEntryInfo.curRow < 0) {
        state.lightBoxState.keyboardEntryInfo.curRow = 0;
        store.commit(MUTATION_LIGHT_BOX_EXIT_KEYBOARD_ENTRY_MODE);
      }
    },
    [MUTATION_LIGHT_BOX_KEYBOARD_TOGGLE_LIGHT](
      state: VuexState,
      index: number
    ) {
      const currentLightArrayIndex =
        STEP_INFO[state.lightBoxState.currentStep].lightArrayIndex;
      const selectedRow = state.lightBoxState.keyboardEntryInfo.curRow;
      if (currentLightArrayIndex !== null) {
        if (
          state.lightBoxState.lightStates[currentLightArrayIndex][selectedRow][
            index
          ]
        ) {
          store.commit(MUTATION_TURN_OFF_LIGHT, {
            row: selectedRow,
            col: index
          });
        } else {
          store.commit(MUTATION_TURN_ON_LIGHT, {
            row: selectedRow,
            col: index
          });
        }
      }
    },
    [MUTATION_SET_COLOR_SCHEME](state: VuexState, scheme: any) {
      if (typeof scheme !== "number") {
        throw new Error("Cannot set color scheme to: " + scheme);
      }

      if (
        scheme !== ColorMode.SystemDefault &&
        scheme !== ColorMode.Light &&
        scheme !== ColorMode.Dark
      ) {
        throw new Error("Cannot set color scheme to: " + scheme);
      }

      state.persistentState.colorMode = scheme as ColorMode;

      setCssVariablesForColorMode(scheme as ColorMode);
      storePersistentState(state.persistentState);
    }
  },
  actions: {},
  modules: {}
});

export default store;
