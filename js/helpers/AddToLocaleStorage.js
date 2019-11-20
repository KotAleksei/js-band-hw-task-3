import { 
  TRANSPORT_LIST,
  COST_LIST,
  costList,
  transportList
 } from './projectConstants.js';

export default class AddToLocaleStorage {
  constructor(item) {
    this.item = item;
  }
  addCost() {
    costList.push(this.item);
    localStorage.setItem(COST_LIST, JSON.stringify(costList));
  }
  addTransport() {
    transportList.push(this.item);
    localStorage.setItem(TRANSPORT_LIST, JSON.stringify(transportList));
  }
}
