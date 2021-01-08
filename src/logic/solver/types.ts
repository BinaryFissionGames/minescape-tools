export type Resource = {
  name: string;
  quantity: number;
};

export type SkillCalculatorTask = {
  name: string; // Unique name for this task. If this is different from the human readable name, specify clientFacingName.
  humanReadableName?: string; // Human readable name of the task. Does not need to be unique. Falls back to name if not specified.
  experience: number; // Experience the task gives
  unlockLevel: number; // Level at which the task is available
  resourcesGained: Resource[]; // Resources gained from completing the task
  resourcesNeeded: Resource[]; // Resources needed to gain the task
};

export type Task = {
  timeCostFunction: (level: number) => number; //Function that gives amount of time to accomplish the task at the given level
  bank: boolean; // Whether this task will take into account banking the resource or not
  timeToBank?: number; // Time to go to the bank and deposit
  timeFromBank?: number; // Time to leave the bank and return to the resource gathering spot
  actionsPerBank?: number; // Number of actions before a bank is required
  icon?: string;
} & SkillCalculatorTask;
