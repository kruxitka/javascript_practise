const teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = 99999;
console.log(teslaX.make + ' ' +teslaX.model);

teslaX.beep = function() {
  console.log(teslaX.make + ' ' + teslaX.model + ' beep-beep');
}
 
 teslaX.beep();

const nissanLeaf = {
  make: 'Nissan',
  model: 'Leaf';
  price: 40000,
  beep: function() {
  console.log(nissanLeaf.make + ' ' + nissanLeaf.model + ' beep-beep');
}
};
nissanLeaf.beep();

function Car(make, model, price) {
  this.make = make;
  this.model = model;
  this.price = price;
  this.beep = beep;
}
const chevroletVolt = new Car('Chevrolet', 'Volt', 60000);
chevroletVolt.beep();

function Car(make, model, price) {
  this.make = make;
  this.model = model;
  this.price = price;
}
Car.prototype.beep = beep;
const chevroletVolt = new Car('Chevrolet', 'Volt', 60000);
chevroletVolt.beep();

class SuperCar {
  constructor(make, model, price) {
     this.make = make;
     this.model = model;
     this.price = price;
    }
    beep() {
      console.log('SuperCar' + this.make + ' ' + this.model )
    }
}

const vaz2107json = `{
  "make": "VAZ",
  "model": "2107",
  "price": 5000
  }`;

const vaz2107 = JSON.parse(vaz2107json);
console.dir(vaz2107);

