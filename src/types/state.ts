import { LightId } from "@/logic/lightbox/types";

export enum LightBoxStep {
  Initial,
  EnterA,
  EnterB,
  EnterC,
  EnterD,
  EnterE,
  EnterF,
  EnterG,
  EnterH,
  DisplayResult,
  InstructReenter
}

export type KeyboardEntryInfo = {
  inEntryMode: boolean;
  curRow: number;
};

export type DragInfo = {
  lastToggled: LightId[];
  isDragging: boolean;
};

export type LightBoxState = {
  currentStep: LightBoxStep;
  lightStates: boolean[][][]; // list of Row major matrices of whether a light is on or off
  dragInfo: DragInfo;
  keyboardEntryInfo: KeyboardEntryInfo;
};

export type VuexState = {
  lightBoxState: LightBoxState;
};
