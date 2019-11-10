const expect = require("chai").expect;
const server = require("../server");

describe("test", () => {
  it("should return an string", () => {
    expect("Hello Api").to.equal(
      "Hello Api"
    );
  });
});