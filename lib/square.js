const ShapeGenerator = require("./shapes")

class Square extends ShapeGenerator {
  render() {
    return `<rect x="50" width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = Square;