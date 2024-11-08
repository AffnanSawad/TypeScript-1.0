{

//  Abstraction

// Abstract class defining the blueprint of a shape
abstract class Shape {
    // Abstract method that must be implemented in derived classes
    abstract calculateArea(): number;
  
    // Concrete method common to all shapes
    display(): void {
      console.log("This is a shape.");
    }
  }
  
  // Derived class implementing the abstract method
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  // Derived class implementing the abstract method
  class Circle extends Shape {
    constructor(private radius: number) {
      super();
    }
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }


  
  
  // Creating instances and using them
  const rectangle = new Rectangle(5, 10);
  console.log("Rectangle Area:", rectangle.calculateArea()); // Outputs: 50
  rectangle.display(); // Outputs: This is a shape.
  
  const circle = new Circle(7);
  console.log("Circle Area:", circle.calculateArea()); // Outputs: approximately 153.94
  circle.display(); // Outputs: This is a shape.
  













}