export type LightId = {
  row: number;
  col: number;
};

export function lightsEqual(light1: LightId | null, light2: LightId | null) {
  if (light1 == null || light2 == null) {
    return false;
  }

  return light1.col === light2.col && light1.row === light2.row;
}
