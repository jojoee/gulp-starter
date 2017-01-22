class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Vector {
  x: number;
  y: number;
  rad: number;

  constructor(x: number, y: number, rad: number) {
    this.x = x;
    this.y = y;
    this.rad = rad;
  }
}

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello, ' + this.greeting;
  }
}

var greeter = new Greeter('Joe');
var point = new Point(3, 5);
var vector = new Vector(1, 3, 4);

console.log(greeter);
console.log(point);
console.log(vector);
