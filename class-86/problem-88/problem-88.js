// Author: Gab-Darlin <Gabbie-Darlin>

class Shape {

    constructor(name) {
        this.name = name;
    }

    showInformation(){
        console.log(`Shape: ${this.name}`);
    }

    calculateArea(){
        return "Area calculation not implemented.";
    }
}

// Child class
class Rectange extends Shape {

    constructor(length, width) {
        super("Rectangle");
        this.length = length;
        this.width = width;
    }

    calculateArea() {
        const area = this.length * this.width;
        return `Rectangle area: ${area}`;
    }
}

class Circle extends Shape {

    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    calculateArea() {
        const area = Math.PI * this.radius ** 2;
        return `Circle area: ${area}`;
    }
}

class Triangle extends Shape {

    constructor(base, height) {
        super("Triangle");
        this.base = base;
        this.height = height;
    }


    calculateArea() {
        const area = (this.base * this.height) / 2;
        return `Triangle area ${area}`;
    }
}


// Creating the objects
const retangle = new Rectange(10, 5);
const circle = new Circle(5);
const triangle = new Triangle(12, 5);

// Array of objects
const shapes = [retangle, circle, triangle];

// Apply a loop to display the shapes information
console.log("++++++++++++++++++++++++++++");
for (const shape of shapes) {
    shape.showInformation();
    console.log(shape.calculateArea());
console.log("++++++++++++++++++++++++++++");    
}