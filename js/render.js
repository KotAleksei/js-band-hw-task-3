import { 
  transportListEl,
  costListEl,
  TRANSPORT_LIST_STORAGE_KEY,
  COST_LIST_STORAGE_KEY
} from './constants/common.constants.js';
import ItemOfCost from './templates/itemOfCost.js';
import ItemOfTransport from './templates/itemOfTransport.js';
import CreateFormTransport from './createForms/createTransportForm';
import CreateCostForm from './createForms/createCostForm';
import LocaleStorage from './services/localstorage';


export default class Render {
  static createForms() {
    new CreateCostForm('Cost');
    new CreateFormTransport('Ship');
    new CreateFormTransport('Truck');
  }
  static renderItems() {
    const store = new LocaleStorage([
      TRANSPORT_LIST_STORAGE_KEY,
      COST_LIST_STORAGE_KEY
    ]);
    let transportList = store.getItem(TRANSPORT_LIST_STORAGE_KEY);
    let costList = store.getItem(COST_LIST_STORAGE_KEY);

    transportList.forEach(el => this.renderItem(el, name = "Transport"));
    costList.forEach(el => this.renderItem(el, name = "Cost"));
  }
  static renderItem(item, name) {
    name === 'Transport' 
    ? transportListEl.insertAdjacentHTML('beforeend', ItemOfTransport(item))
    : costListEl.insertAdjacentHTML('beforeend', ItemOfCost(item));
  }
}

Render.renderItems();
Render.createForms();

