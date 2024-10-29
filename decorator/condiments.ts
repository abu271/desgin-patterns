import { Beverage, CondimentDecorator } from './interfaces';

export class Syrup implements CondimentDecorator {
  beverage: Beverage;
  description = 'Syrup';

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, ${this.description}`;
  }

  cost() {
    return this.beverage.cost() + 0.5;
  }
}

export class Milk implements CondimentDecorator {
  beverage: Beverage;
  description = 'Milk';

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, ${this.description}`;
  }

  cost() {
    return this.beverage.cost() + 0.3;
  }
}

export class Cream implements CondimentDecorator {
  beverage: Beverage;
  description = 'Cream';

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, ${this.description}`;
  }

  cost() {
    return this.beverage.cost() + 0.4;
  }
}

export class Sugar implements CondimentDecorator {  
  beverage: Beverage;
  description = 'Sugar';

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, ${this.description}`;
  }

  cost() {
    return this.beverage.cost() + 0.2;
  }
}

export class Mocha implements CondimentDecorator {
  beverage: Beverage;
  description = 'Mocha';

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, ${this.description}`;
  }

  cost() {
    return this.beverage.cost() + 0.6;
  }
}