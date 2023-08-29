class SVGLogo {
  constructor() {
    this.text = "";
    this.shape = "";
  }

  // Method to generate the complete logo
  generateLogoSVG() {
    return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape} ${this.text}
      </svg>`;
  }

  // Method to create text and color the user inputs
  generateText(message, color) {
    this.text = `<text x="150" y="100" font-size="24px" fill="${color}" text-anchor="middle" dominant-baseline="middle">${message}</text>`;
    return this.text;
  }

  // Render the shape of the logo
  generateShape(shape) {
    this.shape = shape.render();
  }
}

module.exports = SVGLogo;
