const findDuplicateB = require("./findDuplicateB");

describe("findDuplicateB", () => {
  test("[1, 3, 4, 2, 2] => 2", () => {
    expect(findDuplicateB([1, 3, 4, 2, 2])).toEqual(2);
  });
  test("[3, 1, 3, 4, 2] => 3", () => {
    expect(findDuplicateB([3, 1, 3, 4, 2])).toEqual(3);
  });
});