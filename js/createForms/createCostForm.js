import { 
  forms,
  COST_LIST_STORAGE_KEY,
} from '../constants/common.constants.js';
import CostForm from '../templates/costForm.js';
import CostOfDelivery from '../models/CostOfDelivery.js';
import LocalStorage from '../services/localstorage.js';
import Render from '../render.js';

export default class CreateCostForm {
  constructor() {
    this.store = new LocalStorage();
    this.createForm();
    this.takeElementsFromForm();
    this.addListenersForm();
  }
  createForm() {
    forms.insertAdjacentHTML('afterbegin', CostForm);
  }
  takeElementsFromForm() {
    this.createEl = document.querySelector('.create.costOfDelivery');
    this.modelOfTransport = document.querySelector('.modelOfTransport');
    this.costBykg = document.querySelector('.costBykg');
    this.costBykm = document.querySelector('.costBykm');
    this.btnCancel = document.querySelector('.cancelAdd');
  }
  addListenersForm() {
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

    this.store.add(COST_LIST_STORAGE_KEY, newItem);
    Render.renderItem(newItem);
    this.resetData();
  }
  resetData() {
    this.modelOfTransport.value = ''
    this.costBykg.value = '';
    this.costBykm.value = '';
  }
}

