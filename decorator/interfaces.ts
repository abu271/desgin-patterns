// Code for coffee system similar to book

// Decorator Pattern
// 1. Create an interface for decorator (condiments) and concrete component (beverage)
// 2. Create concrete decorator classes for each condiment
// 3. Create concrete component class for beverage
// 4. Create a client that uses the decorator and component classes

export interface Beverage {
  description: string;

  getDescription(): string;
  cost(): number;
}

export interface CondimentDecorator extends Beverage {
  beverage: Beverage;
}
