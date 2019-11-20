const forms = document.querySelector('.forms');
const listEl = document.querySelector('.list'); 
const transportListEl = document.querySelector('.transportList');
const costListEl = document.querySelector('.costList');
const TRANSPORT_LIST_STORAGE_KEY = 'TransportList';
const COST_LIST_STORAGE_KEY = 'CostOfDeliveryList';


export {
  forms,
  listEl,
  transportListEl,
  costListEl,
  TRANSPORT_LIST_STORAGE_KEY,
  COST_LIST_STORAGE_KEY,
};