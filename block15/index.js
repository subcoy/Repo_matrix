const customer= {
firstName : "jake",
lastName: "smith",
email:'jaekSmih!aol.com',
phone: undefined,
zipCode:"631",
favoriteFlavors: 32,
cupSize:"medium",
favoriteStore:"Target",
firstVisit:false,
};

console.log("--- (2)    Original Object  --------------------");
console.log(customer);
console.table(customer);
console.log("-------------------------------------------------");

console.log("--- (3)    change Values    ---------------------");
customer['email']= 'Jak3Smith1992@email.com';
customer['phone']= 3195551234;
customer['zipCode']= "631";
customer.favoriteFlavors= [];
customer.favoriteFlavors[0]="coffee";
customer.favoriteFlavors[1]="strawberry";
customer.favoriteFlavors[2]="matcha";
console.log(customer);
console.log("-------------------------------------------------");

console.log("--- (4-A)    Deleting Keys    ---------------------");
delete customer.zipCode;
delete customer.favoriteStore;
console.log(customer);
console.log("-------------------------------------------------");

console.log("--- (4-B)    adding keys and values    ---------------------");
customer.toppings=[];
customer.toppings[0]= "chocolate sprinkles";
customer.toppings[1]= "wafer straws";
customer.toppings[2]= "gummy bears";
customer.futureFlovors=  "mango";
customer.todaysPurchaseCost=  5.32;
console.log(customer);
console.log("-------------------------------------------------");

console.log("--- (4-C)    Printing Keys    ---------------------");
 const customerkeys= Object.keys(customer);
 console.log(customerkeys);
