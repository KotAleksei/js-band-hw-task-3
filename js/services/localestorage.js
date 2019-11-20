export default class LocaleStorage {
  static add(key, list, value) {
    list.push(value);
    localStorage.setItem(key, JSON.stringify(list));
  }
}
