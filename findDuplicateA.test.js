const findDuplicateA = require("./findDuplicateA");

describe("findDuplicateA", () => {
  test("[1, 3, 4, 2, 2] => 2", () => {
    expect(findDuplicateA([1, 3, 4, 2, 2])).toEqual(2);
  });
  test("[3, 1, 3, 4, 2] => 3", () => {
    expect(findDuplicateA([3, 1, 3, 4, 2])).toEqual(3);
  });
});
