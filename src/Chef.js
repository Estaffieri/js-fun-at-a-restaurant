class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(custName, timeOfDay) {
    if (timeOfDay !== true) {
      return `Hello, ${custName}!`
      } else {
      return `Good morning, ${custName}!`
      }
  }
  checkForFood(foodItem) {
    var foodItemCheck = this.restaurant.menus[foodItem.type].find(function(breakfastItem) {
      return breakfastItem.name === foodItem.name
    })
    if (foodItemCheck !== undefined) {
      return `Yes, we're serving ${foodItem.name} today!`
    } else {
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }
  }
}




module.exports = Chef;
