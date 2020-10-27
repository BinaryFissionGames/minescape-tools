import { LightId } from "@/logic/lightbox/types";

function isLightboxSolved(
  initialState: Array<Array<boolean>>,
  buttonToggleMap: Map<string, Array<LightId>>,
  pressedButtons: Array<string>
): boolean {
  const state: Array<Array<boolean>> = JSON.parse(JSON.stringify(initialState)); // Trick to create a deep copy

  for (const pressedButton of pressedButtons) {
    if (buttonToggleMap.has(pressedButton)) {
      for (const lightId of buttonToggleMap.get(pressedButton) as Array<
        LightId
      >) {
        state[lightId.row][lightId.col] = !state[lightId.row][lightId.col];
      }
    }
  }

  return state // logical AND all elements in this 2d array
    .map(val => val.reduce((prev, cur) => prev && cur))
    .reduce((prev, cur) => prev && cur);
}

function createButtonToggleMap(states: boolean[][][]): Map<string, LightId[]> {
  const buttonFromIndex = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const toggles: Map<string, LightId[]> = new Map();

  if (states.length !== 9) {
    throw Error(
      "Need 9 separate light box states to properly create the button toggle map! Instead got " +
        states.length
    );
  }

  for (let i = 0; i < states.length - 1; i++) {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 6; col++) {
        if (states[i][row][col] !== states[i + 1][row][col]) {
          if (toggles.has(buttonFromIndex[i])) {
            toggles.get(buttonFromIndex[i])?.push({
              row,
              col
            });
          } else {
            toggles.set(buttonFromIndex[i], [
              {
                row,
                col
              }
            ]);
          }
        }
      }
    }
  }

  return toggles;
}

export function solveLightBox(states: boolean[][][]): Array<string> {
  // BRUTE FORCE!
  // There's probably a smart way to solve this, but thinking it through, there are only 2^8 (256) possible combinations
  // which should be easy enough to brute force
  // See https://math.stackexchange.com/questions/169921/how-to-solve-system-of-linear-equations-of-xor-operation for a more "sophisticated" way of solving this problem
  const toggleMap = createButtonToggleMap(states);
  for (let i = 0; i <= 0xff; i++) {
    const pushedButtons = [];
    if ((i & 0x1) === 0x1) {
      pushedButtons.push("A");
    }
    if ((i & 0x2) === 0x2) {
      pushedButtons.push("B");
    }
    if ((i & 0x4) === 0x4) {
      pushedButtons.push("C");
    }
    if ((i & 0x8) === 0x8) {
      pushedButtons.push("D");
    }
    if ((i & 0x10) === 0x10) {
      pushedButtons.push("E");
    }
    if ((i & 0x20) === 0x20) {
      pushedButtons.push("F");
    }
    if ((i & 0x40) === 0x40) {
      pushedButtons.push("G");
    }
    if ((i & 0x80) === 0x80) {
      pushedButtons.push("H");
    }

    if (isLightboxSolved(states[states.length - 1], toggleMap, pushedButtons)) {
      return pushedButtons;
    }
  }

  throw Error("No combination could solve this puzzle!");
}
