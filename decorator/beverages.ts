import { Beverage, CondimentDecorator } from './interfaces';

export class Espresso implements Beverage {
  description = 'Espresso';

  getDescription() {
    return this.description;
  }

  cost() {
    return 1.99;
  }
}

export class DarkRoast implements Beverage {
  description = 'Dark Roast';

  getDescription() {
    return this.description;
  }

  cost() {
    return 1.49;
  }
}

export class Macha implements Beverage {
  description = 'Macha';

  getDescription() {
    return this.description;
  }

  cost() {
    return 2.99;
  }
}

export class Cappuccino implements Beverage {
  description = 'Cappuccino';

  getDescription() {
    return this.description;
  }

  cost() {
    return 2.49;
  }
}

export class Americano implements Beverage {
  description = 'Americano';

  getDescription() {
    return this.description;
  }

  cost() {
    return 2.19;
  }
}