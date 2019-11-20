import { 
  transportListEl,
  costListEl,
  costList,
  transportList,
} from './projectConstants.js';
import itemOfCost from '../templates/itemOfCost.js';
import itemOfTransport from '../templates/itemOfTransport.js';


export default class Render {
  renderItems() {
    transportList ? transportList.forEach(el => this.renderItem(el, name = "Transport")) : null;
    costList ? costList.forEach(el => this.renderItem(el, name = "Cost")) : null;
  }
  renderItem(item, name) {
    name === 'Transport' 
    ? transportListEl.insertAdjacentHTML('beforeend', itemOfTransport(item))
    : costListEl.insertAdjacentHTML('beforeend', itemOfCost(item));
  }
}

const renderApp = new Render();
renderApp.renderItems();