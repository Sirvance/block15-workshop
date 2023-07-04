const customer = {
firstName : "jake",
lastName : "smith",
email : "Jak3Smith1992@email.com",
phone : 3195551234,
zipCode: 631,
favoriteFlavors : ["coffee","strawberry", "matcha"],
cupSize : "medium",
favoriteStore : "Target",
firstVisit : false

};

customer.toppings = ["chocolate sprinkles","wafer straws","gummy bears"],
customer.futureFlavors = "mango";
customer.todaysPurchaseCost =5.32
delete customer["zipCode"];
delete customer["favoriteStore"];

//console.log(Object.keys(customer))
console.log(Object.values(customer))
