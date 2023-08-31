class ShapeGenerator {
  constructor() {
    // Initialize properties based on the results
    this.color = "";
  }

  // This method will be used in child classes
  render() {
    throw new Error("render method must be overridden in child classes")
  }

  // Method to take in and set color of logo
  setColor(color) {
    this.color = color;
  }
}

module.exports = ShapeGenerator;
