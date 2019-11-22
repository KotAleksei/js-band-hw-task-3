import Transport from './transport';

export default class Truck extends Transport {
  constructor(model, licensePlate, typeOfGas, ...arg) {
    super(...arg);

    this.model = model;
    this.licensePlate = licensePlate;
    this.typeOfGas = typeOfGas;
  }
  showAverageSpeed() {
    return this.averageSpeed + 'km';
  }
}

