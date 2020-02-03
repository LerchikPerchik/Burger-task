'use strict';
/*
Задача

Сеть фастфудов предлагает несколько видов гамбургеров:

маленький (50 тугриков, 20 калорий)
большой (100 тугриков, 40 калорий)
Гамбургер может быть с одним из нескольких видов начинок:



сыром (+ 10 тугриков, + 20 калорий)
салатом (+ 20 тугриков, + 5 калорий)
картофелем (+ 15 тугриков, + 10 калорий)
Можно добавить добавки:


посыпать приправой (+ 15 тугриков, 0 калорий)
полить майонезом (+ 20 тугриков, + 5 калорий).

Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).


Пример работы кода:

// маленький гамбургер с начинкой из сыра


var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза


hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий


console.log(“Calories: “ + hamburger.calculateCalories());
// сколько стоит


console.log("Price: “ + hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А сколько теперь стоит?

console.log("Price with sauce: “ + hamburger.calculatePrice());
*/
class Hamburger {
  constructor(size, staffing) {
    this.size = size;
    this.staffing = staffing;
    this.toppings = [];
  }
  static SIZE = {
    [Hamburger.SMALL_SIZE]: {
      price: 50,
      calories: 20,
    },
    [Hamburger.LARGE_SIZE]: {
      price: 100,
      calories: 40,
    }
  }
  static STAFFING = {
    [Hamburger.STAFFING_CHEES]: {
      price: 10,
      calories: 20,
    },
    [Hamburger.STAFFING_SALAD]: {
      price: 20,
      calories: 5,
    },
    [Hamburger.STAFFING_POTATO]: {
      price: 15,
      calories: 10,
    }
  }
  static TOPPING = {
    [Hamburger.TOPPING_SPICE]: {
      price: 15,
      calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
      price: 20,
      calories: 5,
    }
  }
  getSizing() {
    return this.size;
  }
  getStaffing() {
    return this.staffing;
  }
  getToppings() {
    return this.toppings;
  }
  addToppings(topping) {
    if (!this.toppings.includes(topping)) {
      return this.toppings.push(topping);
    } else {
      console.log('THIS TOPPING HAS ALREDY BEEN ADDED!');
    }
  }
  removeToppings(topping) {
    return this.toppings = this.toppings.filter(el => el != topping);
  }
  get calculateCalories() {
    const caloriesArray = this.toppings.map(el => Hamburger.TOPPING[el].price);
    caloriesArray.push(Hamburger.SIZE[this.size].calories, Hamburger.STAFFING[this.staffing].calories);
    let calories = caloriesArray.reduce((accum, calories) => accum + calories, 0);
    return calories;
  }
  get calculatePrice() {
    const priceArray = this.toppings.map(el => Hamburger.TOPPING[el].price);
    priceArray.push(Hamburger.SIZE[this.size].price, Hamburger.STAFFING[this.staffing].price);
    let price = priceArray.reduce((accum, price) => accum + price, 0);
    return price;
  }
}
let hamburger = new Hamburger(Hamburger.LARGE_SIZE, Hamburger.STAFFING_SALAD);
hamburger.addToppings(Hamburger.TOPPING_SPICE);
console.log('Calories: ' + hamburger.calculateCalories);
console.log('Price: ' + hamburger.calculatePrice);
hamburger.addToppings(Hamburger.TOPPING_SAUCE);
hamburger.removeToppings(Hamburger.TOPPING_SPICE);
console.log('Calories: ' + hamburger.calculateCalories);
console.log('Total price: ' + hamburger.calculatePrice);