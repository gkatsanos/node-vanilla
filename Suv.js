const Car = require('./Car');

class Suv extends Car {
  constructor(brand,model,color,blabla,carStats) {
    super(brand,model,color);
    this.blabla = blabla;
  }
  
  // carStats() {
  //   return `SUV is a ${this.color} ${this.brand} ${this.model}`;
  // }
}

module.exports = Suv;
