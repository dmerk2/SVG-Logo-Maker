const ShapeGenerator = require("../lib/shapes");

describe("ShapeGenerator", () => {
  test("setColor sets the correct color", () => {
    const shape = new ShapeGenerator();
    shape.setColor("blue");
    expect(shape.color).toBe("blue");
  });
});
