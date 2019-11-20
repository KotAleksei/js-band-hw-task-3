import { 
  TRANSPORT_LIST_STORAGE_KEY,
  COST_LIST_STORAGE_KEY
} from '../constants/common.constants.js';
import LocaleStorage from '../services/localstorage';

function makeID () {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;

  // generate random (not unique) ID
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 5; j++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if(i !== 2) {
      result += '-';
    }
  }
  // after it - ID is unique
  let transportList = LocaleStorage.getItem(TRANSPORT_LIST_STORAGE_KEY);
  let costList = LocaleStorage.getItem(COST_LIST_STORAGE_KEY);

  costList.forEach(el => el.id === result ? makeID() : null);
  transportList.forEach(el => el.id === result ? makeID() : null);

  return result;
}

export default makeID;