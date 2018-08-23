class Car {
  constructor(brand,model,color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }
  
  carStats() {
    return `This is a ${this.color} ${this.brand} ${this.model}`;
  }
  
  static specialMethods() {
    return `hidden method (static)`;
  }
}

module.exports = Car;
