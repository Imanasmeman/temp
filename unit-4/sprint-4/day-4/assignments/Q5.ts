
class Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getDetails(): string {
      return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
  }
  class Car extends Vehicle {
    fuelType: string;
  
    constructor(make: string, model: string, year: number, fuelType: string) {
      super(make, model, year); 
      this.fuelType = fuelType;
    }
    getDetails(): string {
      return `${super.getDetails()}, Fuel Type: ${this.fuelType}`;
    }
  }
  
  const myCar = new Car("Toyota", "Corolla", 2021, "Petrol");
  console.log(myCar.getDetails());
  