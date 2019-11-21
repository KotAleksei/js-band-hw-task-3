import Truck from "./Truck";
import Ship from "./Ship";

export default class TransportFactory {
  constructor(type, ...args) {
    switch (type) {
      case 'Truck': return new Truck(...args);
      case 'Ship':  return new Ship(...args);
      default: return;
    }
  }
}