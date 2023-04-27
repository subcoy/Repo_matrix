
const disRefill = 0.25; // 25% discount after refill
const discoupon= 10; //10$ discount after the subscription discount 

const timmy = {
    name: "Timmy",
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
}

const sarah = {
    name: "Sarah",
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    name: "Rocky",
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

function Checkcustomer (customer)
                                {
                                let value= customer.pricePerRefill*customer.refills; // full price
                                let x="Doesn't";  // no suscription
                                let y="Doesn't"; //no coupon

                                if(customer.subscription) 
                                                {
                                                value=value-(value*disRefill);
                                                x="";  // customer has suscription
                                                }

                                if(customer.coupon) {
                                            value=value-discoupon;
                                            y=""; // customer has coupon
                                            }
                                            
                               console.log("--------------------------------------------------------------------------------------------------------------------");                                 
                               console.log("The customer=",customer.name);
                               console.log("Bought=",customer.prescription);
                               console.log("Item quantity=",customer.refills);
                               console.log("This customer",x, "has Suscription and",y,"has coupon");
                               console.log(`Your grand total is $`,value);
                                                            
                                return ;                       
                                }

Checkcustomer(timmy);
Checkcustomer(sarah);
Checkcustomer(rocky);

