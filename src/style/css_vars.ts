import { ColorMode } from "@/types/state";
import store from "@/store";

const SHADOW_COLOR_VAR_NAME = "--shadow-color";
const BORDER_COLOR_VAR_NAME = "--border-color";
const BACKGROUND_COLOR_VAR_NAME = "--background-color";
const BACKGROUND_COLOR_HEIGHTEN_1_VAR_NAME = "--background-color-heighten-1";
const BACKGROUND_COLOR_HEIGHTEN_2_VAR_NAME = "--background-color-heighten-2";
const BACKGROUND_COLOR_HEIGHTEN_3_VAR_NAME = "--background-color-heighten-3";
const HIGHLIGHT_COLOR_VAR_NAME = "--highlight-color";
const TEXT_COLOR_VAR_NAME = "--text-color";

const LIGHT_THEME_VARS = new Map<string, string>();
LIGHT_THEME_VARS.set(SHADOW_COLOR_VAR_NAME, "#5f5f5f");
LIGHT_THEME_VARS.set(BORDER_COLOR_VAR_NAME, "#afafaf");
LIGHT_THEME_VARS.set(BACKGROUND_COLOR_VAR_NAME, "#dfdfdf");
LIGHT_THEME_VARS.set(BACKGROUND_COLOR_HEIGHTEN_1_VAR_NAME, "#ffffff");
LIGHT_THEME_VARS.set(BACKGROUND_COLOR_HEIGHTEN_2_VAR_NAME, "#dfdfdf");
LIGHT_THEME_VARS.set(BACKGROUND_COLOR_HEIGHTEN_3_VAR_NAME, "#cfcfcf");
LIGHT_THEME_VARS.set(HIGHLIGHT_COLOR_VAR_NAME, "#26a69a");
LIGHT_THEME_VARS.set(TEXT_COLOR_VAR_NAME, "#000000");

const DARK_THEME_VARS = new Map<string, string>();
DARK_THEME_VARS.set(SHADOW_COLOR_VAR_NAME, "#1c1c1c");
DARK_THEME_VARS.set(BORDER_COLOR_VAR_NAME, "#1c1c1c");
DARK_THEME_VARS.set(BACKGROUND_COLOR_VAR_NAME, "#1c1c1c");
DARK_THEME_VARS.set(BACKGROUND_COLOR_HEIGHTEN_1_VAR_NAME, "#2d2d2d");
DARK_THEME_VARS.set(BACKGROUND_COLOR_HEIGHTEN_2_VAR_NAME, "#3a3a3a");
DARK_THEME_VARS.set(BACKGROUND_COLOR_HEIGHTEN_3_VAR_NAME, "#4a4a4a");
DARK_THEME_VARS.set(HIGHLIGHT_COLOR_VAR_NAME, "#00796b");
DARK_THEME_VARS.set(TEXT_COLOR_VAR_NAME, "#bfbfbf");

function setVariablesFromMap(map: Map<string, string>) {
  for (const entry of map.entries()) {
    document.documentElement.style.setProperty(entry[0], entry[1]);
  }
}

function onPrefersColorSchemeChange(e: MediaQueryListEvent) {
  if (store.state.persistentState.colorMode === ColorMode.SystemDefault) {
    if (e.matches) {
      setVariablesFromMap(DARK_THEME_VARS);
    } else {
      setVariablesFromMap(LIGHT_THEME_VARS);
    }
  }
}

//Sets up event listener for color scheme changes;
//Important to automatically change color scheme if SystemDefault is chosen and the system changes.
//Not sure how browsers actually typically handle the changes (they probably typically require a restart),
//but this can be tested/happen with dev tools.
export function setupSystemDefaultColorModeEvent() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", onPrefersColorSchemeChange);
}

export function setCssVariablesForColorMode(mode: ColorMode) {
  switch (mode) {
    case ColorMode.SystemDefault:
      {
        //Check if system prefers dark color scheme, otherwise use the light scheme.
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        if (mediaQuery.matches) {
          setVariablesFromMap(DARK_THEME_VARS);
        } else {
          setVariablesFromMap(LIGHT_THEME_VARS);
        }
      }
      break;
    case ColorMode.Light:
      setVariablesFromMap(LIGHT_THEME_VARS);
      break;
    case ColorMode.Dark:
      setVariablesFromMap(DARK_THEME_VARS);
      break;
  }
}
