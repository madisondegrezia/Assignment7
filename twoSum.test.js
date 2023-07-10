const twoSum = require("./twoSum");

describe("twoSum", () => {
  test("[2, 3, 4] => [1,2]", () => {
    expect(twoSum([2, 3, 4], 5)).toEqual([1,2]);
  });
  test("[2, 7, 11, 15] => [1,2]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1,2]);
  });
  test("[1, 3, 5, 6] => [2, 3]", () => {
    expect(twoSum([1, 3, 5, 6], 11)).toEqual([3,4]);
  });
});
