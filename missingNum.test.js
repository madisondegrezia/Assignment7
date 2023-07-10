const missingNum = require("./missingNum");

describe("missingNum", () => {
  test("[3,0,1] => 2", () => {
    expect(missingNum([3, 0, 1])).toEqual(2);
  });
  test("[0,1] => 2", () => {
    expect(missingNum([0, 1])).toEqual(2);
  });
  test("[9,6,4,2,3,5,7,0,1] => 8", () => {
    expect(missingNum([9, 6, 4, 2, 3, 5, 7, 0, 1])).toEqual(8);
  });
});
