import { GraphInterface } from "@dagrejs/graphlib";

export type Resource = {
  name: string;
  quantity: number;
};

export type Task = {
  name: string; // Human readable name of the task. Should be unique
  experience: number; // Experience the task gives
  unlockLevel: number; // Level at which the task is available
  timeCostFunction: (level: number) => number; //Function that gives amount of time to accomplish the task at the given level
  resourcesGained: Resource[]; // Resources gained from completing the task
  resourcesNeeded: Resource[]; // Resources needed to gain the task
  bank: boolean; // Whether this task will take into account banking the resource or not
  timeToBank: number; // Time to go to the bank and deposit
  timeFromBank: number; // Time to leave the bank and return to the resource gathering spot
  actionsPerBank: number; // Number of actions before a bank is required
};

export type Action = {
  startLevel: number;
  endLevel: number;
  task: Task;
};

//Computed information for the task
export type TypeInfo = {
  task: Task;
  totalTime: number[]; // level-1 = time to make from ground up (gather resources) at said level assuming one bank
  totalExperience: number; // Total experience for doing task from ground up
};

export type TaskDependencyGraphEdge = {
  time: number;
  resourceName: string;
};

export type SolverInfo = {
  tasks: Task[];
  startExperience: number;
  endExperience: number;
  taskSwitchPenalty: number;
  resourceDependencyGraph: GraphInterface;
};
