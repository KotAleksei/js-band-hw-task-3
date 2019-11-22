import { 
  transportListEl,
  costListEl,
  TRANSPORT_LIST_STORAGE_KEY,
  COST_LIST_STORAGE_KEY
} from './constants/common.constants';
import ItemOfCost from './templates/cost-item';
import ItemOfTransport from './templates/transport-item';
import TransportForm from './createforms/transport';
import CostForm from './createforms/cost';


export default class Render {
  constructor(localStorage){
    if(Render.instance ) return Render.instance;
    this.localStorage = localStorage;
    Render.instance = this;
    return this;
  }
   createForms() {
    new CostForm('Cost');
    new TransportForm('Ship');
    new TransportForm('Truck');
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


