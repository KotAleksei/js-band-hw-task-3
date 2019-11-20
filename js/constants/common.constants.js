const forms = document.querySelector('.forms');
const listEl = document.querySelector('.list'); 
const transportListEl = document.querySelector('.transportList');
const costListEl = document.querySelector('.costList');

const TRANSPORT_LIST = 'transportList';
const COST_LIST = 'costList';
const hasTransportListInLS = localStorage.getItem(TRANSPORT_LIST);
const hasCostListInLS = localStorage.getItem(COST_LIST);
const transportList = hasTransportListInLS ? JSON.parse(hasTransportListInLS) : [];
const costList = hasCostListInLS ? JSON.parse(hasCostListInLS) : []; 

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