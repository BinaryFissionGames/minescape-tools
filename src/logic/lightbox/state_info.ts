import { LightBoxStep, VuexState } from "@/types/state";
import { solveLightBox } from "@/logic/lightbox/solver";
import { arrayToCommaSeparatedString } from "@/logic/util/strings";

export type StepInfo = {
  [key: number]: {
    getDisplayText: (state: VuexState) => string;
    lightArrayIndex: number | null;
    nextStep: LightBoxStep | null;
    prevStep: LightBoxStep | null;
  };
};

export const STEP_INFO: StepInfo = {
  [LightBoxStep.Initial]: {
    getDisplayText(_state: VuexState): string {
      return "Enter the initial light box state!";
    },
    lightArrayIndex: 0,
    nextStep: LightBoxStep.EnterA,
    prevStep: null
  },
  [LightBoxStep.EnterA]: {
    getDisplayText(_state: VuexState): string {
      return 'Press "A" on your light box, then enter the new state of the light box.';
    },
    lightArrayIndex: 1,
    nextStep: LightBoxStep.EnterB,
    prevStep: LightBoxStep.Initial
  },
  [LightBoxStep.EnterB]: {
    getDisplayText(_state: VuexState): string {
      return 'Press "B" on your light box, then enter the new state of the light box.';
    },
    lightArrayIndex: 2,
    nextStep: LightBoxStep.EnterC,
    prevStep: LightBoxStep.EnterA
  },
  [LightBoxStep.EnterC]: {
    getDisplayText(_state: VuexState): string {
      return 'Press "C" on your light box, then enter the new state of the light box.';
    },
    lightArrayIndex: 3,
    nextStep: LightBoxStep.EnterD,
    prevStep: LightBoxStep.EnterB
  },
  [LightBoxStep.EnterD]: {
    getDisplayText(_state: VuexState): string {
      return 'Press "D" on your light box, then enter the new state of the light box.';
    },
    lightArrayIndex: 4,
    nextStep: LightBoxStep.EnterE,
    prevStep: LightBoxStep.EnterC
  },
  [LightBoxStep.EnterE]: {
    getDisplayText(_state: VuexState): string {
      return 'Press "E" on your light box, then enter the new state of the light box.';
    },
    lightArrayIndex: 5,
    nextStep: LightBoxStep.EnterF,
    prevStep: LightBoxStep.EnterD
  },
  [LightBoxStep.EnterF]: {
    getDisplayText(_state: VuexState): string {
      return 'Press "F" on your light box, then enter the new state of the light box.';
    },
    lightArrayIndex: 6,
    nextStep: LightBoxStep.EnterG,
    prevStep: LightBoxStep.EnterE
  },
  [LightBoxStep.EnterG]: {
    getDisplayText(_state: VuexState): string {
      return 'Press "G" on your light box, then enter the new state of the light box.';
    },
    lightArrayIndex: 7,
    nextStep: LightBoxStep.EnterH,
    prevStep: LightBoxStep.EnterF
  },
  [LightBoxStep.EnterH]: {
    getDisplayText(_state: VuexState): string {
      return 'Press "H" on your light box, then enter the new state of the light box.';
    },
    lightArrayIndex: 8,
    nextStep: LightBoxStep.DisplayResult,
    prevStep: LightBoxStep.EnterG
  },
  [LightBoxStep.DisplayResult]: {
    getDisplayText(state: VuexState): string {
      try {
        const buttonsToPress = solveLightBox(state.lightBoxState.lightStates);
        return (
          "Toggle button(s) " +
          arrayToCommaSeparatedString(buttonsToPress) +
          "."
        );
      } catch (e) {
        console.log(e);
        return "Couldn't solve the puzzle; Maybe you entered it wrong? (press Verify to check your previous entries)";
      }
    },
    lightArrayIndex: 8,
    nextStep: LightBoxStep.InstructReenter,
    prevStep: LightBoxStep.EnterH
  },
  [LightBoxStep.InstructReenter]: {
    getDisplayText(_state: VuexState): string {
      return "Flip ALL switches (A-H), then verify the lights states.";
    },
    lightArrayIndex: 0,
    nextStep: LightBoxStep.EnterA,
    prevStep: LightBoxStep.DisplayResult
  }
};
