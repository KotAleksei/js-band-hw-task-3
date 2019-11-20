import { 
  forms,
  TRANSPORT_LIST,
  transportList
 } from '../constants/common.constants.js';
import TransportForm from '../templates/transportForm.js';
import Ship from '../models/Ship.js';
import Truck from '../models/Truck.js'
import LocaleStorage from '../services/localestorage.js';
import Render from '../render.js';


export default class CreateFormTransport {
  constructor(name) {
    this.name = name;
    this.inputEls = [
      'model', 'nameOfTransport', 'producedYear', 'capacity', 'averageSpeed', 'countOrGas'
    ];
    this.inputValues = this.inputEls.map(inputEl => `${inputEl}Value`);
    this.createForm(this.name);
    this.takeElementsFromForm();
    this.listenersForm();
  }

  createForm(name) {
      forms.insertAdjacentHTML('afterbegin', TransportForm(name));
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
  listenersForm() {
    this.inputEls.forEach((inputEl,index) => {
      this[inputEl].addEventListener('input', (e) => this.setListenerInput(e, this.inputValues[index]))
    })
    this.createEl.addEventListener('submit', this.handleSubmit.bind(this));
    this.btnCancel.addEventListener('click', this.cancelAdd.bind(this));
  }
  setListenerInput (event, valueEl) {
    this[valueEl] = event.target.value.trim();
  }
  cancelAdd(){
    this.resetData();
  }
  handleSubmit(e){
    e.preventDefault();
    let newItem = null;
    if(this.name === "Ship") {
      newItem = new Ship(...this.inputValues.map(value => this[value]))
    } 
    if(this.name === "Truck"){
      newItem = new Truck(...this.inputValues.map(value => this[value]));
    }
    LocaleStorage.add(TRANSPORT_LIST, transportList, newItem);
    Render.renderItem(newItem, 'Transport');
    this.resetData();
  }

  resetData() {
    this.inputEls.forEach(inputEl => this[inputEl].value = '')
  }
}