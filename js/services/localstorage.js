export default class LocalStorage {
  static getItem(key) {
    let hasItemInLS = localStorage.getItem(key);
    return  hasItemInLS ? JSON.parse(localStorage.getItem(key)) : [];
  }
  static add(key, value) {
    let listArr = this.getItem(key)
    listArr.push(value);
    localStorage.setItem(key, JSON.stringify(listArr));
  }
}
