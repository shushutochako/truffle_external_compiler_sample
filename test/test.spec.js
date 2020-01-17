const Test = artifacts.require("Test");

contract("Test", () => {
  it("normal case", async () => {
    const instance = await Test.new(5, { gas: 300000 });
    assert.equal(5, await instance.getVal());
    await instance.setVal(10, { gas: 300000 });
    assert.equal(10, await instance.getVal());
  });
});