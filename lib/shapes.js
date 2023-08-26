class LogoGenerator {
  constructor(answers) {
    // Initialize properties based on the answers and default values
    this.answers = answers;
    this.shapeSVG = "";
    this.textX = 0;
    this.textY = 0;
    this.fontSize = "24px";
    this.color = "blue";
  }

  // Method to generate shape
  generateShapeSVG() {
    // Will be overridden in child classess
    throw new Error("generateShapeSVG method must be overridden");
  }

  // Method to generate position of text
  generateTextPosition() {
    // Will be overridden in child classess
    throw new Error("generateTextPosition method must be overridden");
  }

  setColor(color) {
    this.answers.color = color;
  }

  // Method to generate the complete logo
  generateLogoSVG() {
    // Calling the methods to generate shape and text position
    this.generateShapeSVG();
    this.generateTextPosition();

    return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      ${this.shapeSVG}
      <text x="${this.textX}" y="${this.textY}" font-size="${this.fontSize}" fill="${this.answers.fontColor}" text-anchor="middle" dominant-baseline="middle">${this.answers.text}</text>
    </svg>`;
  }
}

class Circle extends LogoGenerator {
  // Constructor for the Circle class
  constructor(answers) {
    // Calling the constructor of the LogoGenerator class
    super(answers);
  }

  // Method to generate the SVG code for the circle shape
  generateShapeSVG() {
    this.shapeSVG = `<circle cx="150" cy="100" r="100" fill="${this.answers.color}" />`;
  }

  // Method to generate the position of the text
  generateTextPosition() {
    this.textX = 150;
    this.textY = 100;
  }

  // Method to render the logo
  render() {
    return this.generateLogoSVG();
  }
}

class Triangle extends LogoGenerator {
  constructor(answers) {
    super(answers);
  }

  generateShapeSVG() {
    this.shapeSVG = `<polygon points="150, 18 244, 182 56, 182" fill="${this.answers.color}" />`;
  }

  generateTextPosition() {
    this.textX = 150;
    this.textY = 100;
    this.fontSize = "20px";
  }

  render() {
    return this.generateLogoSVG();
  }
}

class Square extends LogoGenerator {
  constructor(answers) {
    super(answers);
  }

  generateShapeSVG() {
    this.shapeSVG = `<rect width="200" height="200" fill="${this.answers.color}" />`;
  }

  generateTextPosition() {
    this.textX = 100;
    this.textY = 100;
  }

  render() {
    return this.generateLogoSVG();
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};
