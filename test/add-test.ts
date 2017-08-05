import "mocha";
import * as assert from "power-assert";

import Arismetic from "../src";

describe("Arismetic#add", () => {
  it("add two numbers", () => {
    assert(Arismetic.add(1, 3) === 4);
  });
});
