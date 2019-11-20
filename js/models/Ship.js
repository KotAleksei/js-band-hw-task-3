import Transport from './Transport.js';

export default class Ship extends Transport {
  constructor(model, name, countOfTeam, ...arg) {
    super(...arg);

    this.model = model;
    this.name = name;
    this.countOfTeam = countOfTeam;
  }
  get showAverageSpeed() {
    return this.averageSpeed + 'nm';
  }
}

// use => new Ship(model, name, countOfTeam, Produced year, Capacity, Avarage Speed)