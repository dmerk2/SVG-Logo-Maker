class shapeGenerator {
  constructor() {
    // Initialize properties based on the results
    this.color = "";
  }

  // Method to take in and set color of logo
  setColor(color) {
    this.color = color;
  }
}

class Circle extends shapeGenerator {
  // Method to generate the SVG code for the circle shape
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

class Triangle extends shapeGenerator {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends shapeGenerator {
  render() {
    return `<rect width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};
