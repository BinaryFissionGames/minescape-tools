export function areArraysEqual(
  arr1: Array<any> | null,
  arr2: Array<any> | null
): boolean {
  if (arr1 === null || arr2 === null) {
    return arr1 === arr2;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      if (!Array.isArray(arr2[i])) {
        return false;
      }
      if (!areArraysEqual(arr1[i], arr2[i])) {
        return false;
      }
    } else {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}

export function getFilled2DArray(rows: number, cols: number, fill: any) {
  return new Array(rows).fill(fill).map(() => new Array(cols).fill(fill));
}

export function getFilled3DArray(
  rows: number,
  cols: number,
  depth: number,
  fill: any
) {
  return new Array(depth)
    .fill(fill)
    .map(() => getFilled2DArray(rows, cols, fill));
}

export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
