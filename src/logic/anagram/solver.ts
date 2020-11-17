import { PEOPLE_OF_INTEREST, PersonOfInterest } from "@/logic/anagram/data";
import { mapsAreEqual } from "@/logic/util/misc";

function transformTextForAnagram(text: string) {
  text = text.toLowerCase();
  return text.replace("'", " ");
}

const letterPattern = /[a-z]/;

function createLetterMap(text: string) {
  const letterMap = new Map<string, number>();
  for (let i = 0; i < text.length; i++) {
    if (letterPattern.test(text[i])) {
      if (letterMap.has(text[i])) {
        letterMap.set(text[i], (letterMap.get(text[i]) as number) + 1);
      } else {
        letterMap.set(text[i], 1);
      }
    }
  }

  return letterMap;
}

export function solveAnagram(anagramText: string): PersonOfInterest | null {
  anagramText = transformTextForAnagram(anagramText);
  const mainTextLetterMap = createLetterMap(anagramText);
  for (const poi of PEOPLE_OF_INTEREST) {
    const nameText = transformTextForAnagram(poi.name);
    const nameTextMap = createLetterMap(nameText);
    if (mapsAreEqual(mainTextLetterMap, nameTextMap)) {
      return poi;
    }
  }

  return null;
}

function rotateText(text: string, shiftAmount: number) {
  let shiftedText = "";
  for (const char of text) {
    if (letterPattern.test(char)) {
      const shiftedCharCode = char.charCodeAt(0) + shiftAmount;
      const wrappedCharCode =
        ((shiftedCharCode - "a".charCodeAt(0)) % 26) + "a".charCodeAt(0);
      shiftedText += String.fromCharCode(wrappedCharCode);
    } else {
      shiftedText += char;
    }
  }
  return shiftedText;
}

export function solveCipher(cipherText: string): PersonOfInterest | null {
  const possiblePeople = [];
  cipherText = transformTextForAnagram(cipherText);
  for (let i = 1; i <= 26; i++) {
    const rotatedText = rotateText(cipherText, i);
    for (const poi of PEOPLE_OF_INTEREST) {
      const formattedText = transformTextForAnagram(poi.name);
      if (formattedText.startsWith(rotatedText)) {
        possiblePeople.push(poi);
      }
    }
  }

  if (possiblePeople.length === 1) {
    return possiblePeople[0];
  }

  return null;
}
