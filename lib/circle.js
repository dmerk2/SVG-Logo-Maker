const ShapeGenerator = require("./shapes")

class Circle extends ShapeGenerator {
  // Method to generate the SVG code for the circle shape
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

module.exports = Circle;