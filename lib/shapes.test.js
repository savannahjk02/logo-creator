const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('render() method should return SVG string for a blue triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toMatchInlineSnapshot(`"<polygon points="150,18 244,182 56,182" fill="blue" />"`);
  });
});

describe('Circle', () => {
  test('render() method should return SVG string for a red circle', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toMatchInlineSnapshot(`"<circle cx="150" cy="100" r="50" fill="red" />"`);
  });
});

describe('Square', () => {
  test('render() method should return SVG string for a green square', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toMatchInlineSnapshot(`"<rect x="75" y="50" width="150" height="100" fill="green" />"`);
  });
});

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');