// shapes.js

class Shape {
    constructor(type) {
      this.type = type;
      this.color = 'black'; // default color
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // This method should be overridden by the child classes
      throw new Error('Render method not implemented');
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="75" y="50" width="150" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Circle, Triangle, Square };
  