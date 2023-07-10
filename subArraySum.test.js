const subArraySum = require("./subArraySum");
describe("Test cases", () => {
  test("[1, 1, 1], 2 => 2", () => {
    expect(subArraySum([1, 1, 1], 2)).toEqual(2);
  });
  test("[1, 2, 3], 3 => 2", () => {
    expect(subArraySum([1, 2, 3], 3)).toEqual(2);
  });
});
