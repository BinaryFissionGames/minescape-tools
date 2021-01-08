import { SkillCalculatorTask } from "@/logic/solver/types";

//TODO: fill in the rest of the tasks
export const CRAFTING_TASKS: SkillCalculatorTask[] = [
  //Row 1
  {
    name: "String",
    experience: 8,
    unlockLevel: 1,
    resourcesNeeded: [{ name: "Flax", quantity: 1 }],
    resourcesGained: [{ name: "String", quantity: 1 }]
  },
  {
    name: "Fishing net",
    experience: 4,
    unlockLevel: 1,
    resourcesNeeded: [{ name: "String", quantity: 1 }],
    resourcesGained: [{ name: "Fishing net", quantity: 1 }]
  },
  {
    name: "Air staff",
    experience: 10,
    unlockLevel: 5,
    resourcesNeeded: [
      { name: "Air rune", quantity: 1 },
      { name: "Oak log", quantity: 1 }
    ],
    resourcesGained: [{ name: "Air staff", quantity: 1 }]
  },
  {
    name: "Water staff",
    experience: 10,
    unlockLevel: 5,
    resourcesNeeded: [
      { name: "Water rune", quantity: 1 },
      { name: "Oak log", quantity: 1 }
    ],
    resourcesGained: [{ name: "Water staff", quantity: 1 }]
  },
  {
    name: "Fire staff",
    experience: 10,
    unlockLevel: 5,
    resourcesNeeded: [
      { name: "Fire rune", quantity: 1 },
      { name: "Oak log", quantity: 1 }
    ],
    resourcesGained: [{ name: "Fire staff", quantity: 1 }]
  },
  {
    name: "Earth staff",
    experience: 10,
    unlockLevel: 5,
    resourcesNeeded: [
      { name: "Earth rune", quantity: 1 },
      { name: "Oak log", quantity: 1 }
    ],
    resourcesGained: [{ name: "Earth staff", quantity: 1 }]
  },
  {
    name: "Golden ring",
    experience: 18,
    unlockLevel: 5,
    resourcesNeeded: [{ name: "Gold bar", quantity: 1 }],
    resourcesGained: [{ name: "Golden ring", quantity: 1 }]
  },
  {
    name: "Apprentice wand",
    experience: 11,
    unlockLevel: 5,
    resourcesNeeded: [
      { name: "Rune essence", quantity: 1 },
      { name: "Oak log", quantity: 1 }
    ],
    resourcesGained: [{ name: "Apprentice wand", quantity: 1 }]
  },
  {
    name: "Golden necklace",
    experience: 25,
    unlockLevel: 6,
    resourcesNeeded: [
      { name: "Gold bar", quantity: 1 },
      { name: "String", quantity: 1 }
    ],
    resourcesGained: [{ name: "Golden necklace", quantity: 1 }]
  }
  //Row 2
];
