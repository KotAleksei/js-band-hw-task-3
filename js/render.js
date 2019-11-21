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


export default class Render {
  constructor(localStorage){
    if(Render.instance ) return Render.instance;
    this.localStorage = localStorage;
    Render.instance = this;
    return this;
  }
   createForms() {
    new CreateCostForm('Cost');
    new CreateFormTransport('Ship');
    new CreateFormTransport('Truck');
  }
   renderItems() {
    let transportList = this.localStorage.getItem(TRANSPORT_LIST_STORAGE_KEY);
    let costList = this.localStorage.getItem(COST_LIST_STORAGE_KEY);

    transportList.forEach(el => this.renderItem(el, name = "Transport"));
    costList.forEach(el => this.renderItem(el, name = "Cost"));
  }
   renderItem(item, name) {
    name === 'Transport' 
    ? transportListEl.insertAdjacentHTML('beforeend', ItemOfTransport(item))
    : costListEl.insertAdjacentHTML('beforeend', ItemOfCost(item));
  }
}


