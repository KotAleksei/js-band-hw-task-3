import makeID from '../helpers/makeid';

export default class CostOfDelivery {
  constructor(type, costBykg, costBykm) {
    this.id = makeID();
    this.model = type;
    this.costBykg = costBykg;
    this.costBykm = costBykm;
  }
}