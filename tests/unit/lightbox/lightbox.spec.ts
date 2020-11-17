import { assert } from "chai";
import { LightId } from "@/logic/lightbox/types";
import * as Collections from "typescript-collections";
import { deepCopy, getFilled2DArray } from "@/logic/util/arrays";
import { solveLightBox } from "@/logic/lightbox/solver";
import { randIntRange, setsAreEqual } from "@/logic/util/misc";

type RandomStateArrayObject = {
  solution: Set<string>;
  states: boolean[][][];
};

function getRandomLightIds(
  minAmnt: number,
  maxAmnt: number
): Collections.Set<LightId> {
  const amount = randIntRange(minAmnt, maxAmnt + 1);
  const set = new Collections.Set<LightId>(l => l.row + "," + l.col);
  for (let i = 0; i < amount; i++) {
    let row: number;
    let col: number;
    do {
      row = randIntRange(0, 6);
      col = randIntRange(0, 6);
    } while (set.contains({ row, col }));
    set.add({ row, col });
  }
  return set;
}

function getRandomStatesArrayObject(): RandomStateArrayObject {
  const lightSwaps: Collections.Set<LightId>[] = []; // Set of light ids that are toggled by a certain button
  for (let i = 0; i < 8; i++) {
    lightSwaps.push(getRandomLightIds(8, 24));
  }

  const buttonPresses = new Array(8).fill(1); // We fill with one, since we will be hitting each button once at the end for entering the solution
  const totalPresses = randIntRange(7, 257);
  const boardState: boolean[][] = getFilled2DArray(6, 6, true);

  //Put the board into a random initial state
  for (let i = 0; i < totalPresses; i++) {
    const buttonToPress = randIntRange(0, 8);
    buttonPresses[buttonToPress]++;
    for (const id of lightSwaps[buttonToPress].toArray()) {
      boardState[id.row][id.col] = !boardState[id.row][id.col];
    }
  }

  const finalObject = {
    solution: new Set<string>(),
    states: new Array<boolean[][]>()
  };

  //Solution will be to press any buttons that have an odd number of presses
  for (let i = 0; i < buttonPresses.length; i++) {
    if (buttonPresses[i] % 2 === 1) {
      finalObject.solution.add(String.fromCharCode("A".charCodeAt(0) + i));
    }
  }

  finalObject.states.push(deepCopy(boardState) as boolean[][]);

  //press each button once more, to simulate entering the states
  for (let i = 0; i < 8; i++) {
    for (const id of lightSwaps[i].toArray()) {
      boardState[id.row][id.col] = !boardState[id.row][id.col];
    }
    finalObject.states.push(deepCopy(boardState));
  }

  return finalObject;
}

describe("Lightbox solver", function() {
  it("Correctly solves 1000 random lightbox configurations", function() {
    for (let i = 0; i < 1000; i++) {
      const obj = getRandomStatesArrayObject();
      const solution = new Set(solveLightBox(obj.states));
      assert(
        setsAreEqual(obj.solution, solution),
        "Solution sets are not equal!"
      );
    }
  });
});
