const forms = document.querySelector('.forms');
const listEl = document.querySelector('.list'); 
const transportListEl = document.querySelector('.transportList');
const costListEl = document.querySelector('.costList');

const TRANSPORT_LIST = 'transportList';
const COST_LIST = 'costList';
const hasTransportListInLocStore = localStorage.getItem(TRANSPORT_LIST)
const hasCostListInLocStore = localStorage.getItem(COST_LIST);
const transportList = hasTransportListInLocStore ? JSON.parse(hasTransportListInLocStore) : [];
const costList = hasCostListInLocStore ? JSON.parse(hasCostListInLocStore) : []; 

export {
  forms,
  listEl,
  transportListEl,
  costListEl,
  TRANSPORT_LIST,
  COST_LIST,
  costList,
  transportList
};