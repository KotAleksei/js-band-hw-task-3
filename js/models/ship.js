import Transport from './transport';

export default class Ship extends Transport {
  constructor(model, name, countOfTeam, ...arg) {
    super(...arg);

    this.model = model;
    this.name = name;
    this.countOfTeam = countOfTeam;
  }
  showAverageSpeed() {
    return this.averageSpeed + 'nm';
  }
}