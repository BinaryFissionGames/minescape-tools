import { SkillCalculatorTask } from "@/logic/solver/types";

export const COOKING_TASKS: SkillCalculatorTask[] = [
  //Row 1
  {
    name: "Cooked chicken",
    experience: 5,
    unlockLevel: 1,
    resourcesNeeded: [{ name: "Chicken", quantity: 1 }],
    resourcesGained: [{ name: "Cooked chicken", quantity: 1 }]
  },
  {
    name: "Cooked duck",
    experience: 5,
    unlockLevel: 1,
    resourcesNeeded: [{ name: "Duck", quantity: 1 }],
    resourcesGained: [{ name: "Cooked duck", quantity: 1 }]
  },
  {
    name: "Cooked shrimp",
    experience: 6,
    unlockLevel: 1,
    resourcesNeeded: [{ name: "Shrimp", quantity: 1 }],
    resourcesGained: [{ name: "Cooked shrimp", quantity: 1 }]
  },
  {
    name: "Cooked sheep",
    experience: 6,
    unlockLevel: 3,
    resourcesNeeded: [{ name: "Sheep", quantity: 1 }],
    resourcesGained: [{ name: "Cooked sheep", quantity: 1 }]
  },
  {
    name: "Cooked sardine",
    experience: 8,
    unlockLevel: 5,
    resourcesNeeded: [{ name: "Sardine", quantity: 1 }],
    resourcesGained: [{ name: "Cooked sardine", quantity: 1 }]
  },
  {
    name: "Cooked beef",
    experience: 9,
    unlockLevel: 8,
    resourcesNeeded: [{ name: "Beef", quantity: 1 }],
    resourcesGained: [{ name: "Cooked beef", quantity: 1 }]
  },
  {
    name: "Cooked herring",
    experience: 12,
    unlockLevel: 10,
    resourcesNeeded: [{ name: "Herring", quantity: 1 }],
    resourcesGained: [{ name: "Cooked herring", quantity: 1 }]
  },
  {
    name: "Dough",
    experience: 6,
    unlockLevel: 10,
    resourcesNeeded: [{ name: "Wheat", quantity: 1 }],
    resourcesGained: [{ name: "Dough", quantity: 1 }]
  },
  {
    name: "Bread",
    experience: 6,
    unlockLevel: 10,
    resourcesNeeded: [{ name: "Dough", quantity: 1 }],
    resourcesGained: [{ name: "Bread", quantity: 1 }]
  },
  //Row 2
  {
    name: "Meat pie",
    experience: 6,
    unlockLevel: 10,
    resourcesNeeded: [
      { name: "Dough", quantity: 1 },
      { name: "Any meat", quantity: 1 }
    ],
    resourcesGained: [{ name: "Meat pie", quantity: 1 }]
  },
  {
    name: "Pumpkin pie",
    experience: 10,
    unlockLevel: 14,
    resourcesNeeded: [
      { name: "Dough", quantity: 1 },
      { name: "Pumpkin", quantity: 1 }
    ],
    resourcesGained: [{ name: "Bread", quantity: 1 }]
  },
  {
    name: "Cooked anchovies",
    experience: 17,
    unlockLevel: 15,
    resourcesNeeded: [{ name: "Anchovies", quantity: 1 }],
    resourcesGained: [{ name: "Cooked anchovies", quantity: 1 }]
  },
  {
    name: "Cooked trout",
    experience: 22,
    unlockLevel: 20,
    resourcesNeeded: [{ name: "Trout", quantity: 1 }],
    resourcesGained: [{ name: "Cooked trout", quantity: 1 }]
  },
  {
    name: "Cooked bear",
    experience: 17,
    unlockLevel: 25,
    resourcesNeeded: [{ name: "Bear", quantity: 1 }],
    resourcesGained: [{ name: "Cooked bear", quantity: 1 }]
  },
  {
    name: "Cooked salmon",
    experience: 32,
    unlockLevel: 30,
    resourcesNeeded: [{ name: "Salmon", quantity: 1 }],
    resourcesGained: [{ name: "Cooked salmon", quantity: 1 }]
  },
  {
    name: "Cooked tuna",
    experience: 37,
    unlockLevel: 35,
    resourcesNeeded: [{ name: "Tuna", quantity: 1 }],
    resourcesGained: [{ name: "Cooked Tuna", quantity: 1 }]
  },
  {
    name: "Cooked lobster",
    experience: 44,
    unlockLevel: 40,
    resourcesNeeded: [{ name: "Lobster", quantity: 1 }],
    resourcesGained: [{ name: "Cooked lobster", quantity: 1 }]
  },
  {
    name: "Cooked bass",
    experience: 53,
    unlockLevel: 45,
    resourcesNeeded: [{ name: "Bass", quantity: 1 }],
    resourcesGained: [{ name: "Cooked bass", quantity: 1 }]
  },
  //Row 3
  {
    name: "Baked potato",
    experience: 21,
    unlockLevel: 45,
    resourcesNeeded: [{ name: "Potato", quantity: 1 }],
    resourcesGained: [{ name: "Baked potato", quantity: 1 }]
  },
  {
    name: "Fish pie",
    experience: 24,
    unlockLevel: 45,
    resourcesNeeded: [
      { name: "Dough", quantity: 1 },
      { name: "Any fish", quantity: 1 }
    ],
    resourcesGained: [{ name: "Fish pie", quantity: 1 }]
  },
  {
    name: "Cooked swordfish",
    experience: 62,
    unlockLevel: 50,
    resourcesNeeded: [{ name: "Swordfish", quantity: 1 }],
    resourcesGained: [{ name: "Cooked swordfish", quantity: 1 }]
  },
  {
    name: "Apple pie",
    experience: 27,
    unlockLevel: 50,
    resourcesNeeded: [
      { name: "Dough", quantity: 1 },
      { name: "Apple", quantity: 1 }
    ],
    resourcesGained: [{ name: "Apple pie", quantity: 1 }]
  },
  {
    name: "Cooked tench",
    experience: 71,
    unlockLevel: 55,
    resourcesNeeded: [{ name: "Tench", quantity: 1 }],
    resourcesGained: [{ name: "Cooked Tench", quantity: 1 }]
  },
  {
    name: "Cooked monkfish",
    experience: 80,
    unlockLevel: 60,
    resourcesNeeded: [{ name: "Monkfish", quantity: 1 }],
    resourcesGained: [{ name: "Cooked monkfish", quantity: 1 }]
  },
  {
    name: "Cooked karambwan",
    experience: 89,
    unlockLevel: 65,
    resourcesNeeded: [{ name: "Karambwan", quantity: 1 }],
    resourcesGained: [{ name: "Cooked karambwan", quantity: 1 }]
  },
  {
    name: "Cooked sturgeon",
    experience: 100,
    unlockLevel: 70,
    resourcesNeeded: [{ name: "Sturgeon", quantity: 1 }],
    resourcesGained: [{ name: "Cooked sturgeon", quantity: 1 }]
  },
  {
    name: "Plain pizza",
    experience: 30,
    unlockLevel: 70,
    resourcesNeeded: [
      { name: "Dough", quantity: 1 },
      { name: "Tomato", quantity: 1 }
    ],
    resourcesGained: [{ name: "Plain pizza", quantity: 1 }]
  },
  //Row 4
  {
    name: "Meat pizza",
    experience: 32,
    unlockLevel: 72,
    resourcesNeeded: [
      { name: "Plain pizza", quantity: 1 },
      { name: "Any meat", quantity: 1 }
    ],
    resourcesGained: [{ name: "Meat pizza", quantity: 1 }]
  },
  {
    name: "Cooked shark",
    experience: 111,
    unlockLevel: 75,
    resourcesNeeded: [{ name: "Shark", quantity: 1 }],
    resourcesGained: [{ name: "Cooked shark", quantity: 1 }]
  },
  {
    name: "Anchovies pizza",
    experience: 61,
    unlockLevel: 78,
    resourcesNeeded: [
      { name: "Plain pizza", quantity: 1 },
      { name: "Anchovies", quantity: 1 }
    ],
    resourcesGained: [{ name: "Anchovies Pizza", quantity: 1 }]
  },
  {
    name: "Cooked sea turtle",
    experience: 122,
    unlockLevel: 80,
    resourcesNeeded: [{ name: "Sea turtle", quantity: 1 }],
    resourcesGained: [{ name: "Cooked sea turtle", quantity: 1 }]
  },
  {
    name: "Fruit salad",
    experience: 80,
    unlockLevel: 84,
    resourcesNeeded: [
      { name: "Banana", quantity: 1 },
      { name: "Melon", quantity: 1 },
      { name: "Strawberry", quantity: 1 },
      { name: "Apple", quantity: 1 },
      { name: "Lemon", quantity: 1 },
      { name: "Sugar", quantity: 1 }
    ],
    resourcesGained: [{ name: "Fruit salad", quantity: 1 }]
  },
  {
    name: "Cooked manta ray",
    experience: 135,
    unlockLevel: 85,
    resourcesNeeded: [{ name: "Manta ray", quantity: 1 }],
    resourcesGained: [{ name: "Cooked Manta ray", quantity: 1 }]
  },
  {
    name: "Cooked dark crab",
    experience: 148,
    unlockLevel: 90,
    resourcesNeeded: [{ name: "Dark crab", quantity: 1 }],
    resourcesGained: [{ name: "Cooked dark crab", quantity: 1 }]
  },
  {
    name: "Corn pizza",
    experience: 100,
    unlockLevel: 92,
    resourcesNeeded: [
      { name: "Plain pizza", quantity: 1 },
      { name: "Corn", quantity: 1 }
    ],
    resourcesGained: [{ name: "Corn pizza", quantity: 1 }]
  },
  {
    name: "Cooked eel",
    experience: 161,
    unlockLevel: 95,
    resourcesNeeded: [{ name: "Eel", quantity: 1 }],
    resourcesGained: [{ name: "Cooked eel", quantity: 1 }]
  },
  //Row 5
  {
    name: "Tuna potato",
    experience: 120,
    unlockLevel: 96,
    resourcesNeeded: [{ name: "Eel", quantity: 1 }],
    resourcesGained: [
      { name: "Potato", quantity: 1 },
      { name: "Tuna", quantity: 1 },
      { name: "Corn", quantity: 1 }
    ]
  },
  {
    name: "Salad",
    experience: 145,
    unlockLevel: 98,
    resourcesNeeded: [
      { name: "Cabbage", quantity: 1 },
      { name: "Tomato", quantity: 1 },
      { name: "Beetroot", quantity: 1 },
      { name: "Potato", quantity: 1 },
      { name: "Corn", quantity: 1 }
    ],
    resourcesGained: [{ name: "Salad", quantity: 1 }]
  }
];
