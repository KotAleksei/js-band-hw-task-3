import Truck from "./truck";
import Ship from "./ship";

export default class TransportFactory {
  constructor(type, ...args) {
    switch (type) {
      case 'Truck': return new Truck(...args);
      case 'Ship':  return new Ship(...args);
      default: return;
    }
  }
}