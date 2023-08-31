const ShapeGenerator = require("./shapes")

class Triangle extends ShapeGenerator {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = Triangle;