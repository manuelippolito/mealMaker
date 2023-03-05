const menu = {
  _meal: ' ',
  _price: 0,

  set meal(mealToCheck) {
  if(typeof mealToCheck === 'string'){
    return this._meal = mealToCheck;
  } else {
    console.log('This is the meal to check.');
  }
  },

 set price(priceToCheck) {
   if (typeof priceToCheck === 'number') {
     return this._price = priceToCheck;
   } else {
     console.log('This is the price to check.');
  }
   },

   get todaysSpecial() {
     if(this._meal && this._price){
       return `Today’s Special is ${this._meal} for €${this._price}!`
     } else {
       return 'Meal or price was not set correctly!';
     }
   }
  };

//meal and price example.
menu.meal = 'Lasagna';
menu.price = 12;
console.log(menu.todaysSpecial);
