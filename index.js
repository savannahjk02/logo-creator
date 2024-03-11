// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

class LogoGenerator {
  constructor() {
    this.text = '';
    this.textColor = 'black';
    this.shape = null;
    this.shapeColor = 'black';
  }

  async getUserInput() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter text (up to three characters):',
        validate: (input) => input.length > 0 && input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color:',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color:',
      },
    ]);

    this.text = answers.text;
    this.textColor = answers.textColor;
    this.shape = answers.shape;
    this.shapeColor = answers.shapeColor;
  }

  generateSVG() {
    let shapeInstance;

    switch (this.shape) {
      case 'Circle':
        shapeInstance = new Circle();
        break;
      case 'Triangle':
        shapeInstance = new Triangle();
        break;
      case 'Square':
        shapeInstance = new Square();
        break;
      default:
        throw new Error('Invalid shape');
    }

    shapeInstance.setColor(this.shapeColor);

    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeInstance.render()}
        <text x="150" y="150" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
      </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  }
}

async function run() {
  const logoGenerator = new LogoGenerator();
  await logoGenerator.getUserInput();
  logoGenerator.generateSVG();
}

run();
