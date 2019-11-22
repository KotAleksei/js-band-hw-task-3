import { 
  forms,
  TRANSPORT_LIST_STORAGE_KEY,
 } from '../constants/common.constants';
import TransportFormTemplate from '../templates/transport-form';
import TransportFactory from '../models/transport-factory';
import LocalStorage from '../services/localstorage';
import Render from '../render';


export default class TransportForm {
  constructor(name) {
    this.name = name;
    this.store = new LocalStorage();
    this.render = new Render();
    this.inputEls = [
      'model', 'nameOfTransport', 'producedYear', 'capacity', 'averageSpeed', 'countOrGas'
    ];
    this.inputValues = this.inputEls.map(inputEl => `${inputEl}Value`);
    
    this.createForm(this.name);
    this.takeElementsFromForm();
    this.setListenersForm();
  }

  createForm(name) {
      forms.insertAdjacentHTML('afterbegin', TransportFormTemplate(name));
  }
  takeElementsFromForm() {
    this.createEl = document.querySelector(`.create.transport.${this.name}`);
    this.model = document.querySelector(`.model.${this.name}`);
    this.nameOfTransport = document.querySelector(`.nameOfTransport.${this.name}`);
    this.producedYear = document.querySelector(`.producedYear.${this.name}`);
    this.capacity = document.querySelector(`.capacity.${this.name}`);
    this.averageSpeed = document.querySelector(`.averageSpeed.${this.name}`);
    this.countOrGas = document.querySelector(`.countOrGas.${this.name}`);
    this.btnCancel = document.querySelector(`.cancelAdd.${this.name}`);
  }
  setListenersForm() {
    // set listeners for input fields - they has similar name and Values,
    // so I create array from names (in constructor) and use forEach method
    this.inputEls.forEach((inputEl,index) => {
      this[inputEl].addEventListener('input', (e) => this.setListenerInput(e, this.inputValues[index]))
    });

    this.createEl.addEventListener('submit', this.handleSubmit.bind(this));
    this.btnCancel.addEventListener('click', this.cancelAdd.bind(this));
  }
  setListenerInput (event, valueEl) {
    this[valueEl] = event.target.value.trim(); // create this.modelValue, this.nameOfTransportValue, etc.
  }
  cancelAdd(){
    this.resetData();
  }
  handleSubmit(e){
    e.preventDefault();
    const newItem = new TransportFactory(
      this.name,
      ...this.inputValues.map(value => this[value]) // => this.modelValue, this.nameOfTransportValue, etc.
    );
    this.store.add(TRANSPORT_LIST_STORAGE_KEY, newItem);
    this.render.renderItem(newItem, 'Transport');
    this.resetData();
  }

  resetData() {
    this.inputEls.forEach(inputEl => this[inputEl].value = '');
  }
}