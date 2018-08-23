const Suv = require('./Suv');
const util = require('util');

const myCar = new Suv('audi', 'a3', 'blue');

console.log(util.inspect(myCar, { showHidden: true, compact: false }));
console.log(myCar.carStats());
// console.log(Car.specialMethods());
console.log(myCar.constructor == Suv);
