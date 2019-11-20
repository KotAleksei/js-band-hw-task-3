import { 
  transportListEl,
  costListEl,
  costList,
  transportList,
} from './constants/common.constants.js';
import ItemOfCost from './templates/itemOfCost.js';
import ItemOfTransport from './templates/itemOfTransport.js';
import CreateFormTransport from './createForms/createTransportForm';
import CreateCostForm from './createForms/createCostForm';


export default class Render {
  static createForms() {
    new CreateCostForm('Cost');
    new CreateFormTransport('Ship');
    new CreateFormTransport('Truck');
  }
  static renderItems() {
    transportList.forEach(el => this.renderItem(el, name = "Transport"));
    costList.forEach(el => this.renderItem(el, name = "Cost"));
  }
  static renderItem(item, name) {
    name === 'Transport' 
    ? transportListEl.insertAdjacentHTML('beforeend', ItemOfTransport(item))
    : costListEl.insertAdjacentHTML('beforeend', ItemOfCost(item));
  }
}

Render.createForms();
Render.renderItems();
