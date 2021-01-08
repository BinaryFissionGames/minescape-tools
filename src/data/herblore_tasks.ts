import { Task } from "@/logic/solver/types";

//TODO: Fill this out. Probably needs to be a getter (func that returns a func), since it depends on the level of the resource
//eslint-disable-next-line @typescript-eslint/no-unused-vars
function herbloreTimeCostFunction(_level: number): number {
  return 1;
}

export const HERBLORE_TASKS: Task[] = [
  {
    name: "Talupia Blancus",
    experience: 2,
    unlockLevel: 1,
    timeCostFunction: herbloreTimeCostFunction,
    resourcesNeeded: [],
    resourcesGained: [{ name: "Talupia Blancus", quantity: 1 }],
    bank: false
  },
  {
    name: "Talupia Crimson",
    experience: 2,
    unlockLevel: 1,
    timeCostFunction: herbloreTimeCostFunction,
    resourcesNeeded: [],
    resourcesGained: [{ name: "Talupia Crimson", quantity: 1 }],
    bank: false
  },
  {
    name: "Talupia Tangio",
    experience: 2,
    unlockLevel: 1,
    timeCostFunction: herbloreTimeCostFunction,
    resourcesNeeded: [],
    resourcesGained: [{ name: "Talupia Tangio", quantity: 1 }],
    bank: false
  },
  {
    name: "Orchicada Blau",
    experience: 3,
    unlockLevel: 5,
    timeCostFunction: herbloreTimeCostFunction,
    resourcesNeeded: [],
    resourcesGained: [{ name: "Orchicada Blau", quantity: 1 }],
    bank: false
  },
  {
    name: "Rosarius Popus",
    experience: 5,
    unlockLevel: 10,
    timeCostFunction: herbloreTimeCostFunction,
    resourcesNeeded: [],
    resourcesGained: [{ name: "Rosarius Popus", quantity: 1 }],
    bank: false
  },
  {
    name: "Azurus Aqua",
    experience: 8,
    unlockLevel: 20,
    timeCostFunction: herbloreTimeCostFunction,
    resourcesNeeded: [],
    resourcesGained: [{ name: "Azurus Aqua", quantity: 1 }],
    bank: false
  },
  {
    name: "Necroti Busi",
    experience: 12,
    unlockLevel: 30,
    timeCostFunction: herbloreTimeCostFunction,
    resourcesNeeded: [],
    resourcesGained: [{ name: "Necroti Busi", quantity: 1 }],
    bank: false
  },
  {
    name: "Alliuminati",
    experience: 15,
    unlockLevel: 35,
    timeCostFunction: herbloreTimeCostFunction,
    resourcesNeeded: [],
    resourcesGained: [{ name: "Alliuminati", quantity: 1 }],
    bank: false
  },
  {
    name: "Noilednad",
    experience: 24,
    unlockLevel: 55,
    timeCostFunction: herbloreTimeCostFunction,
    resourcesNeeded: [],
    resourcesGained: [{ name: "Noilednad", quantity: 1 }],
    bank: false
  },
  {
    name: "Magmatius Wrath",
    experience: 33,
    unlockLevel: 70,
    timeCostFunction: herbloreTimeCostFunction,
    resourcesNeeded: [],
    resourcesGained: [{ name: "Magmatius Wrath", quantity: 1 }],
    bank: false
  },
  {
    name: "Talupia Magentina",
    experience: 50,
    unlockLevel: 75,
    timeCostFunction: herbloreTimeCostFunction,
    resourcesNeeded: [],
    resourcesGained: [{ name: "Talupia Magentina", quantity: 1 }],
    bank: false
  },
  {
    name: "Dragoneye Rose",
    experience: 60,
    unlockLevel: 80,
    timeCostFunction: herbloreTimeCostFunction,
    resourcesNeeded: [],
    resourcesGained: [{ name: "Dragoneye Rose", quantity: 1 }],
    bank: false
  },
  {
    name: "Speed Potion",
    experience: 12,
    unlockLevel: 1,
    resourcesNeeded: [
      { name: "Talupia Blancus", quantity: 1 },
      {
        name: "Talupia Crimson",
        quantity: 1
      },
      { name: "Talupia Tangio", quantity: 1 }
    ],
    resourcesGained: [{ name: "Speed Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Ranged Potion",
    experience: 15,
    unlockLevel: 5,
    resourcesNeeded: [
      { name: "Orchicada Blau", quantity: 2 },
      { name: "Talupia Tangio", quantity: 1 }
    ],
    resourcesGained: [{ name: "Ranged Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Strength Potion",
    experience: 16,
    unlockLevel: 6,
    resourcesNeeded: [
      { name: "Orchicada Blau", quantity: 2 },
      { name: "Talupia Crimson", quantity: 1 }
    ],
    resourcesGained: [{ name: "Strength Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Magic Potion",
    experience: 17,
    unlockLevel: 7,
    resourcesNeeded: [
      { name: "Orchicada Blau", quantity: 2 },
      { name: "Talupia Blancus", quantity: 1 }
    ],
    resourcesGained: [{ name: "Magic Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Defence Potion",
    experience: 21,
    unlockLevel: 10,
    resourcesNeeded: [
      { name: "Talupia Blancus", quantity: 1 },
      {
        name: "Orchicada Blau",
        quantity: 1
      },
      { name: "Rosarius Popus", quantity: 1 }
    ],
    resourcesGained: [{ name: "Defence Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Prayer Potion",
    experience: 27,
    unlockLevel: 20,
    resourcesNeeded: [
      { name: "Talupia Tangio", quantity: 1 },
      {
        name: "Orchicada Blau",
        quantity: 1
      },
      { name: "Azurus Aqua", quantity: 1 }
    ],
    resourcesGained: [{ name: "Prayer Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Stamina Potion",
    experience: 33,
    unlockLevel: 25,
    resourcesNeeded: [
      { name: "Rosarius Popus", quantity: 1 },
      {
        name: "Orchicada Blau",
        quantity: 1
      },
      { name: "Azurus Aqua", quantity: 1 }
    ],
    resourcesGained: [{ name: "Stamina Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Super Speed Potion",
    experience: 37,
    unlockLevel: 30,
    resourcesNeeded: [
      { name: "Talupia Blancus", quantity: 1 },
      { name: "Talupia Crimson", quantity: 1 },
      {
        name: "Talupia Tangio",
        quantity: 1
      },
      { name: "Necroti Busi", quantity: 1 }
    ],
    timeCostFunction: herbloreTimeCostFunction,
    resourcesGained: [{ name: "Super Speed Potion", quantity: 1 }],
    bank: false
  },
  {
    name: "Super Ranged Potion",
    experience: 38,
    unlockLevel: 35,
    resourcesNeeded: [
      { name: "Orchicada Blau", quantity: 2 },
      {
        name: "Talupia Tangio",
        quantity: 1
      },
      { name: "Alliuminati", quantity: 1 }
    ],
    resourcesGained: [{ name: "Super Ranged Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Super Strength Potion",
    experience: 45,
    unlockLevel: 40,
    resourcesNeeded: [
      { name: "Orchicada Blau", quantity: 2 },
      {
        name: "Talupia Crimson",
        quantity: 1
      },
      { name: "Alliuminati", quantity: 1 }
    ],
    resourcesGained: [{ name: "Super Strength Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Super Magic Potion",
    experience: 46,
    unlockLevel: 41,
    resourcesNeeded: [
      { name: "Orchicada Blau", quantity: 2 },
      {
        name: "Talupia Blancus",
        quantity: 1
      },
      { name: "Alliuminati", quantity: 1 }
    ],
    resourcesGained: [{ name: "Super Magic Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Super Defence Potion",
    experience: 55,
    unlockLevel: 45,
    resourcesNeeded: [
      { name: "Talupia Blancus", quantity: 1 },
      { name: "Orchicada Blau", quantity: 1 },
      {
        name: "Rosarius Popus",
        quantity: 1
      },
      { name: "Alliuminati", quantity: 1 }
    ],
    resourcesGained: [{ name: "Super Defence Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Super Prayer Potion",
    experience: 68,
    unlockLevel: 55,
    resourcesNeeded: [
      { name: "Talupia Tangio", quantity: 1 },
      { name: "Orchicada Blau", quantity: 1 },
      {
        name: "Azurus Aqua",
        quantity: 1
      },
      { name: "Noilednad", quantity: 1 },
      { name: "Necroti Busi", quantity: 1 }
    ],
    resourcesGained: [{ name: "Super Prayer Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Super Stamina Potion",
    experience: 78,
    unlockLevel: 62,
    resourcesNeeded: [
      { name: "Rosarius Popus", quantity: 1 },
      { name: "Orchicada Blau", quantity: 1 },
      {
        name: "Azurus Aqua",
        quantity: 1
      },
      { name: "Noilednad", quantity: 1 }
    ],
    resourcesGained: [{ name: "Super Stamina Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Dark Potion",
    experience: 90,
    unlockLevel: 69,
    resourcesNeeded: [
      { name: "Noilednad", quantity: 1 },
      { name: "Necroti Busi", quantity: 1 },
      {
        name: "Alliuminati",
        quantity: 1
      }
    ],
    resourcesGained: [{ name: "Dark Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Extreme Speed Potion",
    experience: 290,
    unlockLevel: 75,
    resourcesNeeded: [
      { name: "Talupia Blancus", quantity: 1 },
      { name: "Talupia Crimson", quantity: 1 },
      {
        name: "Talupia Tangio",
        quantity: 1
      },
      { name: "Magmatius Wrath", quantity: 1 }
    ],
    resourcesGained: [{ name: "Extreme Speed Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Extreme Ranged Potion",
    experience: 305,
    unlockLevel: 77,
    resourcesNeeded: [
      { name: "Orchicada Blau", quantity: 2 },
      { name: "Talupia Tangio", quantity: 1 },
      {
        name: "Noilednad",
        quantity: 1
      },
      { name: "Magmatius Wrath", quantity: 1 }
    ],
    resourcesGained: [{ name: "Extreme Ranged Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Extreme Strength Potion",
    experience: 310,
    unlockLevel: 78,
    resourcesNeeded: [
      { name: "Orchicada Blau", quantity: 2 },
      { name: "Talupia Crimson", quantity: 1 },
      {
        name: "Noilednad",
        quantity: 1
      },
      { name: "Magmatius Wrath", quantity: 1 }
    ],
    resourcesGained: [{ name: "Extreme Strength Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Extreme Magic Potion",
    experience: 315,
    unlockLevel: 79,
    resourcesNeeded: [
      { name: "Orchicada Blau", quantity: 2 },
      { name: "Talupia Blancus", quantity: 1 },
      {
        name: "Noilednad",
        quantity: 1
      },
      { name: "Magmatius Wrath", quantity: 1 }
    ],
    resourcesGained: [{ name: "Extreme Magic Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Extreme Defence Potion",
    experience: 335,
    unlockLevel: 80,
    resourcesNeeded: [
      { name: "Talupia Blancus", quantity: 1 },
      { name: "Orchicada Blau", quantity: 1 },
      {
        name: "Noilednad",
        quantity: 1
      },
      { name: "Magmatius Wrath", quantity: 1 }
    ],
    resourcesGained: [{ name: "Extreme Defence Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Fire Resistance Potion",
    experience: 340,
    unlockLevel: 82,
    resourcesNeeded: [
      { name: "Noilednad", quantity: 2 },
      { name: "Magmatius Wrath", quantity: 2 },
      {
        name: "Alliuminati",
        quantity: 1
      },
      { name: "Dragoneye Rose", quantity: 1 }
    ],
    resourcesGained: [{ name: "Fire Resistance Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Extreme Prayer Potion",
    experience: 345,
    unlockLevel: 83,
    resourcesNeeded: [
      { name: "Magmatius Wrath", quantity: 1 },
      { name: "Talupia Magentina", quantity: 1 },
      {
        name: "Talupia Tangio",
        quantity: 1
      },
      { name: "Orchicada Blau", quantity: 1 },
      { name: "Azurus Aqua", quantity: 1 }
    ],
    resourcesGained: [{ name: "Extreme Prayer Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Unstable Potion",
    experience: 365,
    unlockLevel: 86,
    resourcesNeeded: [
      { name: "Dark Potion", quantity: 1 },
      { name: "Talupia Tangio", quantity: 1 },
      {
        name: "Orchicada Blau",
        quantity: 1
      },
      { name: "Azurus Aqua", quantity: 1 },
      { name: "Necroti Busi", quantity: 1 },
      {
        name: "Noilednad",
        quantity: 1
      },
      { name: "Enourmous Bones", quantity: 1 }
    ],
    resourcesGained: [{ name: "Unstable Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "Combat Potion",
    experience: 750,
    unlockLevel: 89,
    resourcesNeeded: [
      { name: "Talupia Magentina", quantity: 1 },
      { name: "Extreme Defence Potion", quantity: 1 },
      {
        name: "Noilednad",
        quantity: 1
      },
      { name: "Magmatius Wrath", quantity: 1 },
      { name: "Orchicada Blau", quantity: 2 }
    ],
    resourcesGained: [{ name: "Combat Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  },
  {
    name: "God Potion",
    experience: 950,
    unlockLevel: 95,
    resourcesNeeded: [
      { name: "Talupia Magentina", quantity: 1 },
      {
        name: "Combat Potion",
        quantity: 1
      },
      { name: "Unstable Potion", quantity: 1 }
    ],
    resourcesGained: [{ name: "God Potion", quantity: 1 }],
    timeCostFunction: herbloreTimeCostFunction,
    bank: false
  }
];
