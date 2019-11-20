import makeID from '../helpers/makeID.js';

export default class Transport {
  constructor( producedYear, capacity, averageSpeed) {
    this.id = makeID();
    this.producedYear = producedYear;
    this.capacity = capacity;
    this.averageSpeed = averageSpeed;
  }
  get showCapacityInPounds() {
    return this.capacity * 2.2046;
  }
}

