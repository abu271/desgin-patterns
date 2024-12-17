interface state {
  insertQuarter(): void
  ejectQuarter(): void
  turnCrank(): void
  dispense(): void
}

export class NoQuarterState implements state {
  gumballMachine: any;

  constructor(gumballMachine:any) {
    this.gumballMachine = gumballMachine;
  }
  
  insertQuarter() {
    console.log('You inserted a quarter');
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }

  ejectQuarter() {
    console.log('You haven\'t inserted a quarter');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  turnCrank() {
    console.log('You turned, but there\'s no quarter');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  dispense() {
    console.log('You need to pay first');
  }
}

export class HasQuarterState implements state {
  gumballMachine: any;

  constructor(gumballMachine:any) {
    this.gumballMachine = gumballMachine;
  }
  
  insertQuarter() {
    console.log('You can\'t insert another quarter');
  }

  ejectQuarter() {
    console.log('Quarter returned');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  turnCrank() {
    console.log('You turned...');
  }

  dispense() {
    this.gumballMachine.releaseBall()
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      console.log('Oops, out of gumballs');
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
}

export class SoldState implements state {
  gumballMachine: any;

  constructor(gumballMachine:any) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    console.log('Please wait, we\'re already giving you a gumball');
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }

  ejectQuarter() {
    console.log('Sorry, you already turned the crank');
  }

  turnCrank() {
    console.log('Turning twice doesn\'t get you another gumball');
  }

  dispense() {
    this.gumballMachine.releaseBall()
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      console.log('Oops, out of gumballs');
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
}

export class SoldOutState implements state {
  gumballMachine: any;

  constructor(gumballMachine:any) {
    this.gumballMachine = gumballMachine;
  }
  
  insertQuarter() {
    console.log('You can\'t insert a quarter, the machine is sold out');
    this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
  }

  ejectQuarter() {
    console.log('You can\'t eject, you haven\'t inserted a quarter yet');
  }

  turnCrank() {
    console.log('You turned, but there are no gumballs');
  }

  dispense() {
    console.log('No gumball dispensed');
  }
}