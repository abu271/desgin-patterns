import { Cappuccino } from "./beverages";
import { Cream, Sugar } from "./condiments";

const cappuccino = new Cappuccino();
const cappuccinoWithCream = new Cream(cappuccino);
const cappuccinoWithCreamAndSugar = new Sugar(cappuccinoWithCream);

console.log(cappuccinoWithCreamAndSugar.getDescription());
console.log(cappuccinoWithCreamAndSugar.cost());