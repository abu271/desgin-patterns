import { HasQuarterState, SoldOutState, SoldState, NoQuarterState } from "./states";

export class GumballMachine {
  private noQuarterState: NoQuarterState;
  private hasQuarterState: HasQuarterState;
  private soldState: SoldState;
  private soldOutState: SoldOutState;
  private state: any;

  constructor(private count: number) {
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.soldOutState = new SoldOutState(this);
    this.state = this.count > 0 ? this.noQuarterState : this.soldOutState;
  }

  releaseBall(): void {
    if (this.count > 0) {
      this.count--;
    }
    console.log('A gumball comes rolling out the slot...');
  }

  turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }
  
  insertQuarter(): void {
    this.state.insertQuarter();
  }

  ejectQuarter(): void {
    this.state.ejectQuarter();
  } 

  getCount(): number {
    return this.count;
  }

  setState(state: any): void {
    this.state = state;
  }

  getNoQuarterState(): NoQuarterState {
    return this.noQuarterState;
  }

  getHasQuarterState(): HasQuarterState {
    return this.hasQuarterState;
  }

  getSoldOutState(): SoldOutState {
    return this.soldOutState;
  }
}