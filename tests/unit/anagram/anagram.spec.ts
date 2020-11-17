import { assert } from "chai";
import { solveAnagram, solveCipher } from "@/logic/anagram/solver";

describe("Anagram/Cipher solver", function() {
  describe("Anagram Solver", function() {
    it("Gives the correct answer for known anagrams", function() {
      const KNOWN_ANAGRAMS = [
        {
          anagram: "Lilal",
          name: "Lalli"
        },
        {
          anagram: "An Earl",
          name: "Ranael"
        },
        {
          anagram: "Carpet Ahoy",
          name: "Apothecary"
        },
        {
          anagram: "Disorder",
          name: "Sedridor"
        },
        {
          anagram: "I Cord",
          name: "Doric"
        },
        {
          anagram: "In Bar",
          name: "Brian"
        },
        {
          anagram: "Rain Cove",
          name: "Veronica"
        },
        {
          anagram: "Rug Deter",
          name: "Gertrude"
        },
        {
          anagram: "Sir Share Red",
          name: "Hairdresser"
        },
        {
          anagram: "Taunt Roof",
          name: "Fortunato"
        },
        {
          anagram: "A Baker",
          name: "Baraek"
        },
        {
          anagram: "A bas",
          name: "Saba"
        },
        {
          anagram: "A Basic Anti Pot",
          name: "Captain Tobias"
        },
        {
          anagram: "Aha Jar",
          name: "Jaraah"
        },
        {
          anagram: "Area Chef Trek",
          name: "Father Aereck"
        },
        {
          anagram: "Are Col",
          name: "Oracle"
        },
        {
          anagram: "Armchair The Pelt",
          name: "Charlie the Tramp"
        },
        {
          anagram: "El Ow",
          name: "Lowe"
        },
        {
          anagram: "Heoric",
          name: "Eohric"
        },
        {
          anagram: "Kay Sir",
          name: "Sir Kay"
        },
        {
          anagram: "Lark In Dog",
          name: "King Roald"
        },
        {
          anagram: "Leakey",
          name: "Kaylee"
        },
        {
          anagram: "Ok Co",
          name: "Cook"
        },
        {
          anagram: "Peak Reflex",
          name: "Flax keeper"
        },
        {
          anagram: "Que Sir",
          name: "Squire"
        },
        {
          anagram: "R Ak Mi",
          name: "Karim"
        },
        {
          anagram: "Ratai",
          name: "Taria"
        },
        {
          anagram: "Sand Nut",
          name: "Dunstan"
        },
        {
          anagram: "Snah",
          name: "Hans"
        },
        {
          anagram: "Thickno",
          name: "Hickton"
        },
        {
          anagram: "Ace Match Elm",
          name: "Cam the Camel"
        },
        {
          anagram: "Blue Grim Guided",
          name: "Lumbridge Guide"
        },
        {
          anagram: "Do Say More",
          name: "Doomsayer"
        },
        {
          anagram: "Dragons Lament",
          name: "Strange Old Man"
        },
        {
          anagram: "Me Am The Calc",
          name: "Cam the Camel"
        },
        {
          anagram: "O Birdz A Zany En Pc",
          name: "Cap'n Izzy no Beard"
        },
        {
          anagram: "Profs Lose Wrong Pie",
          name: "Professor Onglewip"
        },
        {
          anagram: "Red Art Tans",
          name: "Trader Stan"
        },
        {
          anagram: "Slide Woman",
          name: "Wise Old Man"
        },
        {
          anagram: "Them Cal Came",
          name: "Cam the Camel"
        },
        {
          anagram: "Veil Veda",
          name: "Evil Dave"
        },
        {
          anagram: "Machete Clam",
          name: "Cam the Camel"
        }
      ];

      for (const anagram of KNOWN_ANAGRAMS) {
        assert.strictEqual(
          solveAnagram(anagram.anagram)?.name.toLowerCase(),
          anagram.name.toLowerCase()
        );
      }
    });
  });

  describe("Cipher Solver", function() {
    it("Gives the correct answer for a subset of ciphers", function() {
      const TEST_CIPHERS = [
        {
          cipher: "pnc a vmml ab orneq",
          name: "Cap'n Izzy no Beard"
        },
        {
          cipher: "xvk i duut ij wzvmy",
          name: "Cap'n Izzy no Beard"
        },
        {
          cipher: "nlx esp nlxpw",
          name: "Cam the Camel"
        },
        {
          cipher: "kwgs czr aob",
          name: "Wise old man"
        },
        {
          cipher: "vmzc urmv",
          name: "Evil Dave"
        },
        {
          cipher: "jhqtuh ijqd",
          name: "Trader Stan"
        },
        {
          cipher: "zauclgf",
          name: "Hickton"
        },
        {
          cipher: "agvs fzzkzm",
          name: "Flax keeper"
        },
        {
          cipher: "wmduy",
          name: "karim"
        },
        {
          cipher: "apaax",
          name: "lalli"
        }
      ];

      for (const cipher of TEST_CIPHERS) {
        assert.strictEqual(
          solveCipher(cipher.cipher)?.name.toLowerCase(),
          cipher.name.toLowerCase()
        );
      }
    });
  });
});
