import { Resource, SkillCalculatorTask } from "@/logic/solver/types";

export type SkillCalculatorResult = {
  task: SkillCalculatorTask;
  startXp: number;
  endXp: number;
  accountForSubtasks: boolean;
  dxp: boolean;
  iterations: number;
  resourcesGained: Resource[];
  resourcesUsed: Resource[];
};

export type SkillCalculatorResultDisplayInfo = SkillCalculatorResult & {
  display: boolean;
};

export const defaultTask: SkillCalculatorTask = {
  experience: 0,
  name: "defaultTask",
  resourcesGained: [],
  resourcesNeeded: [],
  unlockLevel: 1
};

export const defaultDisplayInfo: SkillCalculatorResultDisplayInfo = {
  accountForSubtasks: false,
  display: false,
  dxp: false,
  endXp: 0,
  iterations: 0,
  resourcesGained: [],
  resourcesUsed: [],
  startXp: 0,
  task: defaultTask
};
