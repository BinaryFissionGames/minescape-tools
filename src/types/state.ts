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

export enum ColorMode {
  SystemDefault,
  Light,
  Dark
}

export const ColorModeString = {
  [ColorMode.SystemDefault]: "SystemDefault",
  [ColorMode.Dark]: "Dark",
  [ColorMode.Light]: "Light"
};

export const ColorModeStringToMode: { [key: string]: ColorMode } = {
  SystemDefault: ColorMode.SystemDefault,
  Dark: ColorMode.Dark,
  Light: ColorMode.Light
};

export const ColorModeReadableString = {
  [ColorMode.SystemDefault]: "System Default",
  [ColorMode.Dark]: "Dark",
  [ColorMode.Light]: "Light"
};

export type PersistentState = {
  colorMode: ColorMode;
};

export type VuexState = {
  lightBoxState: LightBoxState;
  persistentState: PersistentState;
};
