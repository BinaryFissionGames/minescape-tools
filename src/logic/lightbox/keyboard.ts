import store from "@/store";
import {
  MUTATION_LIGHT_BOX_ENTER_KEYBOARD_ENTRY_MODE,
  MUTATION_LIGHT_BOX_EXIT_KEYBOARD_ENTRY_MODE,
  MUTATION_LIGHT_BOX_KEYBOARD_NEXT_ROW,
  MUTATION_LIGHT_BOX_KEYBOARD_PREV_ROW,
  MUTATION_LIGHT_BOX_KEYBOARD_TOGGLE_LIGHT
} from "@/store/mutations";

const KEYS_ACTION_TOGGLE = ["1", "2", "3", "4", "5", "6"];

const KEYS_ACTION_NEXT_ROW = ["Enter", "ArrowDown", "Insert", "Tab"];

const KEYS_ACTION_PREV_ROW = ["Backspace", "ArrowUp", "-"];

const KEYS_ACTION_ENTER_ENTRY_MODE = [
  "Enter",
  "ArrowDown",
  "Insert",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "Tab"
];

const KEYS_ACTION_EXIT_ENTRY_MODE = ["End", "Delete"];

export function processKeyEvent(e: KeyboardEvent) {
  if (store.state.lightBoxState.keyboardEntryInfo.inEntryMode) {
    if (KEYS_ACTION_EXIT_ENTRY_MODE.includes(e.key)) {
      store.commit(MUTATION_LIGHT_BOX_EXIT_KEYBOARD_ENTRY_MODE);
      e.preventDefault();
    } else if (KEYS_ACTION_NEXT_ROW.includes(e.key)) {
      store.commit(MUTATION_LIGHT_BOX_KEYBOARD_NEXT_ROW);
      e.preventDefault();
    } else if (KEYS_ACTION_PREV_ROW.includes(e.key)) {
      store.commit(MUTATION_LIGHT_BOX_KEYBOARD_PREV_ROW);
      e.preventDefault();
    } else if (KEYS_ACTION_TOGGLE.includes(e.key)) {
      const index = parseInt(e.key) - 1;
      store.commit(MUTATION_LIGHT_BOX_KEYBOARD_TOGGLE_LIGHT, index);
      e.preventDefault();
    }
  } else {
    if (KEYS_ACTION_ENTER_ENTRY_MODE.includes(e.key)) {
      store.commit(MUTATION_LIGHT_BOX_ENTER_KEYBOARD_ENTRY_MODE);
      e.preventDefault();
    }
  }
}
