///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 1------------------------");
console.log("--------------------------------------------------------\n");

let pizza = {
    name: `Cheese Pizza`,
    price: 12.50,
    category: `Entree`,
    popularity: 7,
    rating: 8.1,
    tags: [`Vegetarian`, `gluten-free`]
}

console.log(pizza);

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 2------------------------");
console.log("--------------------------------------------------------\n");

console.log(`Popularity value: ${pizza.popularity}.\n`);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(`Second tag: ${pizza.tags[1]}.\n`);

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let {price: cheesePrice} = pizza;
console.log(`Price: $${cheesePrice}.\n`);

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let {category: cheeseCategory} = pizza;
console.log(`Category: ${cheeseCategory}.\n`);

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 3------------------------");
console.log("--------------------------------------------------------\n");

let foodArr = [
    {  
        name: `Mac n' Cheese Delight`,
        price: 14.50,
        category: `Entree`,
        popularity: 9.3,
        rating: 8.8,
        tags: [`gluten-free`, `spicy`, `bacon`]
    },
    {
        name: `Jalapeno Poppers`,
        price: 6.99,
        category: `Appetizer`,
        popularity: 6.7,
        rating: 5.8,
        tags: [`spicy`, `shareable`]
    },
    {
        name: `Loaded Tator Tots`,
        price: 11.00,
        category: `Side`,
        popularity: 8.0,
        rating: 9.1,
        tags: [`spicy`, `shareable`, `gluten-free available`, `bacon`]
    },
    {
        name: `French Onion Soup`,
        price: 8.99,
        category: `Side`,
        popularity: 7.9,
        rating: 9.7,
        tags: [`soup`]
    },
    {
        name: `Shrimp & Chicken Alfredo`,
        price: 16.99,
        category: `Entree`,
        popularity: 9.8,
        rating: 7.4,
        tags: [`pasta`, `seafood`,`chicken`]
    }
]

console.log(foodArr, `\n`);

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 4------------------------");
console.log("--------------------------------------------------------\n");

const filteredFood = foodArr.filter(spicyFood => spicyFood.tags.includes(`spicy`));
console.log(filteredFood, `\n`);

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little more flexible than just filtering for one
    value. We want to be able to filter for food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty` that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating, popularity, or price)

    The number will be the number that you want to compare against 

    The type should be 'above' or 'below' to indicate whether you want to get foods with
    values that are above or below the given number for the given property

    Inside the function, create a variable to hold a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 5------------------------");
console.log("--------------------------------------------------------\n");

function filterByProperty(property, number, type) {
    let filteredArr = foodArr.filter(properties => {
        if(type === `above`) return properties[property] > number;
        else if(type === `below`) return properties[property] < number;
    });
    return filteredArr;
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log(`Filter food by price above $10.00:\n\n`, filterByProperty(`price`, 10, `above`), `\n`);
console.log(`Filter food by popularity below 7.0:\n\n`, filterByProperty(`popularity`, 7, `below`), `\n`);
console.log(`Filter food by rating above 7.0:\n\n`, filterByProperty(`rating`, 7, `above`), `\n`);