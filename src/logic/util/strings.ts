export function arrayToCommaSeparatedString(arr: Array<string>): string {
  if (arr.length == 0) {
    return "";
  }

  if (arr.length == 1) {
    return arr[0];
  }

  return arr.reduce((prev, cur) => prev + ", " + cur);
}
