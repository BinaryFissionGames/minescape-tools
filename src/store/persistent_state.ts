import { ColorMode, PersistentState } from "@/types/state";

const STORAGE_KEY = "state";

export function storePersistentState(state: PersistentState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to store persistent state", e);
  }
}

export function loadPersistentState(): PersistentState {
  const savedStateJSON: string | null = window.localStorage.getItem(
    STORAGE_KEY
  );

  if (!savedStateJSON) {
    return {
      colorMode: ColorMode.SystemDefault
    };
  } else {
    return JSON.parse(savedStateJSON) as PersistentState;
  }
}
