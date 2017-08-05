import "mocha";
import * as assert from "power-assert";

import Arismetic from "../src";

describe("Arismetic", () => {
  context("#add", () => {
    it("1 + 3 = 4", () => {
      assert(Arismetic.add(1, 3) === 4);
    });
    it("-5 + 2.8 = -2.2", () => {
      assert(Arismetic.add(-5, 2.8) === -2.2);
    });
  });

  context("#mul", () => {
    it("6 * 3 = 18", () => {
      assert(Arismetic.mul(6, 3) === 18);
    });
  });
});
