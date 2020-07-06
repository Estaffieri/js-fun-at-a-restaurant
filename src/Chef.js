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
    // var allMenuList = Object.keys(this.restaurant.menus)
    // for (var i = 0; i < allMenuList.length; i++)
    //   var completeMenu = allMenuList[i];
      if (!this.menus[foodItem]) {
      return `Sorry, we aren't serving ${foodItem.name} today.`
    } else {
      return `Yes, we're serving ${foodItem.name} today!`
    }
  }
}



module.exports = Chef;
