import { LightBoxStep, VuexState } from "@/types/state";
import { STEP_INFO } from "@/logic/lightbox/state_info";

export function nextStep(state: VuexState) {
  const step = state.lightBoxState.currentStep;
  if (STEP_INFO[step].nextStep !== null) {
    state.lightBoxState.currentStep = STEP_INFO[step].nextStep as LightBoxStep;
    state.lightBoxState.keyboardEntryInfo.curRow = 0;
  }
}

export function prevStep(state: VuexState) {
  const step = state.lightBoxState.currentStep;
  if (STEP_INFO[step].prevStep !== null) {
    state.lightBoxState.currentStep = STEP_INFO[step].prevStep as LightBoxStep;
    state.lightBoxState.keyboardEntryInfo.curRow = 5;
  }
}
