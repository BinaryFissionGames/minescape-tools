//XP to get to level n = xpTable[n-1]
const xpTable = [
  0,
  96,
  201,
  315,
  440,
  576,
  725,
  887,
  1064,
  1257,
  1468,
  1698,
  1948,
  2221,
  2519,
  2844,
  3198,
  3584,
  4005,
  4464,
  4964,
  5509,
  6103,
  6751,
  7457,
  8227,
  9066,
  9981,
  10978,
  12065,
  13259,
  14542,
  15950,
  17485,
  19158,
  20982,
  22971,
  25139,
  27503,
  30080,
  32890,
  35954,
  39294,
  42936,
  46907,
  51236,
  55957,
  61104,
  66716,
  72835,
  79507,
  86782,
  94715,
  103365,
  112797,
  123081,
  134295,
  146523,
  159857,
  174396,
  190250,
  207538,
  226390,
  246947,
  269363,
  293807,
  320462,
  349528,
  381223,
  415786,
  453476,
  494576,
  539364,
  588267,
  641562,
  699679,
  763055,
  832165,
  907529,
  989712,
  1079332,
  1177062,
  1283635,
  1399853,
  1526588,
  1664791,
  1815501,
  1979850,
  2159072,
  2354513,
  2567641,
  2800057,
  3053507,
  3329894,
  3631295,
  3959973,
  4318397,
  4709259,
  5135495,
  5600307,
  6107186,
  6659940,
  7262720,
  7920054,
  8636880,
  9418582,
  10271032,
  11200633,
  12214368,
  13319852,
  14525389,
  15840034,
  17273662,
  18837042,
  20541918,
  22401096,
  24428542,
  26639485,
  29050533,
  31679797
];

export function getXpForLevel(level: number): number {
  if (level > 120) {
    throw new Error("Level must be less than or equal to 120");
  }

  if (level <= 0) {
    throw new Error("Level must greater than 0");
  }

  return xpTable[level - 1];
}

export function getLevelForXp(xp: number): number {
  if (xp < 0) {
    throw new Error("Xp must be 0 or greater");
  }

  for (let i = 0; i < 119; i++) {
    if (xp >= xpTable[i] && xp < xpTable[i + 1]) {
      return i + 1;
    }
  }

  return 120;
}

export function getXpDifference(from: number, to: number): number {
  if (to < from) {
    throw new Error("to must be greater than or equal to from");
  }
  return getXpForLevel(to) - getXpForLevel(from);
}
