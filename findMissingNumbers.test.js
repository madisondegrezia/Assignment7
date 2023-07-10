const findMissingNumbers = require("./findMissingNumbers");

describe("findMissingNumbers", () => {
  test("[4,3,2,7,8,2,3,1] => [5,6]", () => {
    expect(findMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });
  test("[1,1] => [2]", () => {
    expect(findMissingNumbers([1, 1])).toEqual([2]);
  });
});
