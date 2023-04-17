///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 1------------------------");
console.log("--------------------------------------------------------\n");

const summedPrice = cart.reduce((a, c) => a + c.price, 0);
console.log(summedPrice, `\n`);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 2------------------------");
console.log("--------------------------------------------------------\n");

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return ((cartTotal * tax) + cartTotal) - couponValue;
}

console.log(calcFinalPrice(summedPrice, 3.00, .06), `\n`);

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    --Customer Object Model--
    Name: [String] So the restaurant can properly name the order to give it to the correct customer
    Email: [String] To let the customer know that the order has been placed with a receipt and perhaps even an eta
    Phone: [Number] In case if there is an issue or delay so that the restaurant can reach out to the customer
    Payment Method: [String] If a customer pays online, the restaurant does not charge the customer a second time
    Order: [String] If the name, email, or phone number becomes unaccessible for some reason, having the order would be a way to match the customer's order
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 3------------------------");
console.log("--------------------------------------------------------\n");

let customerOrder = {
    name: `John Doe`,
    email: `john.doe@gmail.com`,
    phone: 5555555555,
    paymentMethod: `online`,
    order: `Club Sandwich, fries, and small diet coke`
}
console.log(customerOrder, `\n`);