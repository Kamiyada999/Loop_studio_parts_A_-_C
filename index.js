//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protein= ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
for (let i = 0; i < 6; i++) {
  const myMeal = `Meal #${i}: ${protein[i]} ${grain[i]} ${vegetable[i]} ${beverage[i]} ${dessert[i]}`;
  console.log(myMeal);
}

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

const input=require('readline-sync');

let howManyMeals = 0;
while(true) {
  howManyMeals = input.question("How many meals would you like to asssemble(1-6):");
  if (howManyMeals >= 1 && howManyMeals <= 6) {
    break;
  }
  console.log("Must be between 1 and 6");
}


let meals = [];
for(let i = 0; i < howManyMeals; i++) {
  let meal = [];
  meal.push(protein[0]);
  meal.push(grain[0]);
  meal.push(vegetable[0]);
  meal.push(beverage[0]);
  meal.push(dessert[0]);
  protein.shift();
  grain.shift();
  vegetable.shift();
  beverage.shift();
  dessert.shift();
  let mealString = meal.join(", ");
  console.log(mealString);
  meals.push(mealString);
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
for (let i = 0; i < protein.length - 0; i = i +1) {
   console.log(`Protein: ${protein[i]}`);
   console.log(`Grain: ${grain[i]}`);
   console.log(`Vegetable: ${vegetable[i]}`);
   console.log(`Beverage: ${beverage[i]}`);
   console.log(`Dessert: ${dessert[i]}`);
}
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
let pantry = [
  [protein],
  [grain],
  [vegetable],
  [beverage],
  [dessert]
];

// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”
if (protein).includes("Kale")){
  console.log("Dont Worry, you can have double chocolate tomorrow.");
}

