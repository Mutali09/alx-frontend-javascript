const cloneSymbol = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  cloneCar() {
    const CloneConstructor = Object.getPrototypeOf(this).constructor;
    return new CloneConstructor(this._brand, this._motor, this._color);
  }
}

export default Car;