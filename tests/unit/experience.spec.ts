import { assert } from "chai";
import {
  getLevelForXp,
  getXpDifference,
  getXpForLevel
} from "@/logic/util/experience";

describe("Experience Utils", function() {
  describe("getXpForLevel", function() {
    it("Throws an error if level < 1", function() {
      assert.throws(() => getXpForLevel(0));
      assert.throws(() => getXpForLevel(-1));
    });

    it("Throws an error if level > 120", function() {
      assert.throws(() => getXpForLevel(121));
      assert.throws(() => getXpForLevel(1000));
    });

    it("It calculates the correct value for 1, 120, and 68", function() {
      assert.equal(getXpForLevel(1), 0);
      assert.equal(getXpForLevel(120), 31679797);
      assert.equal(getXpForLevel(68), 349528);
    });
  });

  describe("getLevelForXp", function() {
    it("Throws an error if xp < 0", function() {
      assert.throws(() => getLevelForXp(-1));
      assert.throws(() => getLevelForXp(-121903));
    });

    it("Returns 120 for Xp >= 31679797", function() {
      assert.equal(getLevelForXp(31679797), 120);
      assert.equal(getLevelForXp(999999999), 120);
    });

    it("Returns 88 for 2111025", function() {
      assert.strictEqual(getLevelForXp(2111025), 88);
    });

    it("Returns 1 for 0", function() {
      assert.strictEqual(getLevelForXp(0), 1);
    });
  });

  describe("getXpDifference", function() {
    it("Throws an error if to < from", function() {
      assert.throws(() => getXpDifference(2, 1));
    });

    it("Returns getXpForLevel for level if from = 0", function() {
      for (let i = 1; i <= 120; i++) {
        assert.strictEqual(getXpDifference(1, i), getXpForLevel(i));
      }
    });

    it("Returns the correct experience for from = 40, to = 99", function() {
      assert.strictEqual(getXpDifference(40, 99), 5105415);
    });
  });
});
