const ShapeGenerator = require("../lib/shapes");

describe("ShapeGenerator", () => {
  test("setColor sets the correct color", () => {
    const shape = new ShapeGenerator();
    shape.setColor("blue");
    expect(shape.color).toBe("blue");
  });

  test("render method throws cb error when not called in child classes", () => {
    const cb = () => new ShapeGenerator().render();
    const err = new Error("render method must be overridden in child classes");
    expect(cb).toThrowError(err);
  });
});
