import Transport from './Transport.js';

export default class Truck extends Transport {
  constructor(model, licensePlate, typeOfGas, ...arg) {
    super(...arg);

    this.model = model;
    this.licensePlate = licensePlate;
    this.typeOfGas = typeOfGas;
  }
  get showAverageSpeed() {
    return this.averageSpeed + 'km';
  }
}

// use => new Truck(model, licensePlate, typeOfGas, Produced year, Capacity, Avarage Speed)