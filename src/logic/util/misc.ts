export function setsAreEqual(set1: Set<any>, set2: Set<any>) {
  if (set1.size !== set2.size) {
    return false;
  }

  for (const set1Val of set1) {
    if (!set2.has(set1Val)) {
      return false;
    }
  }

  return true;
}

export function mapsAreEqual(map1: Map<any, any>, map2: Map<any, any>) {
  const map1Keys = new Set(map1.keys());
  const map2Keys = new Set(map2.keys());
  if (!setsAreEqual(map1Keys, map2Keys)) {
    return false;
  }

  for (const mapKey of map1Keys) {
    if (map1.get(mapKey) !== map2.get(mapKey)) {
      return false;
    }
  }

  return true;
}

export function getMapLinkForLocation(loc: {
  x: number;
  y: number;
  z: number;
}) {
  return `https://map.minescape.net/#/${loc.x}/${loc.y}/${loc.z}/max/Minescape/Minescape`;
}

//Rand int on range [min, max)
export function randIntRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
