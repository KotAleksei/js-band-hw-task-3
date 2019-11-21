export default class LocalStorage {
  constructor(keys) {
    if(LocalStorage.instance ) return LocalStorage.instance;
    this.prefix = `JS-Band-`;
    Array.isArray(keys) ? this.initialSetKeys(keys) : null;

    LocalStorage.instance = this;
    return this;
  }
  
  getItem(key) {
    const hasItemInLS = localStorage.getItem(`${this.prefix}${key}`);
    return  JSON.parse(hasItemInLS);
  }
  add(key,value) {
    const listArr = this.getItem(key);
    listArr.push(value);
    localStorage.setItem(`${this.prefix}${key}`, JSON.stringify(listArr));
  }
  initialSetKeys(arr) {
    arr.forEach(key => {
      this.getItem(key) ? null : localStorage.setItem(`${this.prefix}${key}`, JSON.stringify([])); 
    })
  }
}
