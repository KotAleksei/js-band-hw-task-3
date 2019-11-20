import { 
  forms,
} from '../helpers/projectConstants.js';
import costForm from '../templates/costForm.js';
import CostOfDelivery from '../constructors/CostOfDelivery.js';
import AddToLocaleStorage from '../helpers/AddToLocaleStorage.js';
import Render from '../helpers/Render.js';

class CreateCostForm {
  constructor(name) {
    this.name = name
    this.createForm();
    this.takeElementsFromForm();
    this.listenersForm();

  }
  createForm() {
    forms.insertAdjacentHTML('afterbegin', costForm);
  }
  takeElementsFromForm() {
    this.createEl = document.querySelector('.create.costOfDelivery');
    this.modelOfTransport = document.querySelector('.modelOfTransport');
    this.costBykg = document.querySelector('.costBykg');
    this.costBykm = document.querySelector('.costBykm');
    this.btnCancel = document.querySelector('.cancelAdd');
  }
  listenersForm() {
    this.createEl.addEventListener('submit', this.handleSubmit.bind(this));
    this.modelOfTransport.addEventListener('click', this.setModelOfTransport.bind(this));
    this.costBykg.addEventListener('input', this.setCostBykg.bind(this));
    this.costBykm.addEventListener('input', this.setCostBykm.bind(this))
    this.btnCancel.addEventListener('click', this.cancelAdd.bind(this));
  }

  setModelOfTransport(e) {
    this.modelOfTransportValue = e.target.value;
  }
  setCostBykg(e) {
    this.costBykgValue = e.target.value.trim();
  } 
  setCostBykm(e) {
    this.costBykmValue = e.target.value.trim();
  }
  cancelAdd () {
    this.resetData;
  }
  handleSubmit(e) {
    e.preventDefault();
    let newItem = new CostOfDelivery(
      this.modelOfTransportValue,
      this.costBykgValue,
      this.costBykmValue
    );
    
    const addToLocaleStore = new AddToLocaleStorage(newItem);
    addToLocaleStore.addCost();

    const renderCost = new Render();
    renderCost.renderItem(newItem);

    this.resetData();
  }
  resetData() {
    this.modelOfTransport.value = ''
    this.costBykg.value = '';
    this.costBykm.value = '';
  }
}

const createCostForm = new CreateCostForm('Cost');