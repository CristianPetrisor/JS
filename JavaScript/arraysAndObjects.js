// arrays are nothing but
// ordered collections of values,
// such as levels in a game or
// songs in a playlist

// creating arrays
let students = []; // empty array
let colors = ['red', 'orange', 'yellow']; // an array of strings
let lotteryNumbers = [19, 22, 56, 12, 51]; // an array of numbers
let stuff = [true, 68, 'cat', null]; // a mixed array, which in 
// other programming languages, such as C++ isn't quite easy to pull through

// another array
let shoppingList = ['cereal', 'cheese', 'ice'];

// array-literal syntax, which is a different
// way of making an array in JavaScript
let myArray = new Array(1, 2, 6, 20, 'done');

// array indices for accessing every element
colors[0];  // gives red
colors[1];  // gives orange
colors[colors.length - 1]; // gives the last element
// which in this case it is yellow

// modifying arrays
shoppingList[1] = 'whole milk'; // overrites the element's content
shoppingList[2] = 'ice cream';  // same here
shoppingList[shoppingList.length] = 'tomatoes'; // add something to the end
shoppingList[shoppingList.length] = 'potatoes'; // does the same thing, but
// it's not very efficient; JavaScript has its own built-in functions for that

// push(): add to end & pop(): remove from end
let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
]; // this is a new/different array

// adding something onto the end
topSongs.push('Money In The Grave');
console.log(topSongs);
// try this in the console: topSongs.push(true);

// remove something from the end of the array
// using the pop() function
topSongs.pop();
topSongs.pop();
console.log(topSongs);
const nextSong = topSongs.pop();
console.log(`${nextSong} was removed from the topSongs[]..`);
console.log(topSongs);
topSongs.push(nextSong); // added it back
console.log(`${nextSong} was added back to the topSongs[]..`);
console.log(topSongs);
// if we keep popping, it'll eventually run out of elements
// and it'll return undefined

// taking a look at shift(): removes from the beginning,
// and unshift(): adding to the beginning of the array
let dishesToDo = ['big platter'];

// unshift()
dishesToDo.unshift('large plate'); // added to the beginning
console.log(dishesToDo);
dishesToDo.unshift('small plate'); // added one more
dishesToDo.unshift('cereal bowl'); // and another one
console.log(dishesToDo);

// shift()
dishesToDo.shift(); // removed the very first element
dishesToDo.shift(); // removed another one
console.log(dishesToDo); // what the array looks like right now

// adding multiple elements/values to the beginning
dishesToDo.unshift('fork', 'knife'); // added as a chunk
console.log(dishesToDo); // voilá

// seeing the order in which they are added
// vs. when we pass in multiple values
dishesToDo.unshift('small spoon'); // vs. adding to the beginning
console.log(dishesToDo);
dishesToDo.unshift('large spoon'); // and adding to the beginning again
console.log(dishesToDo);
// this doesn't matter with push(), only with unshift() is different

// let's take a look at concat(), includes(), indexOf(), join(),
// reverse(), slice(), splice(), and sort()

// concat(): merge more than one array together
// doesn't update or mutate the new array, it 
// creates a new copy
let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];

console.log(fruits.concat(veggies)); // order matters
console.log(veggies.concat(fruits));
console.log(fruits); // unchanged
console.log(veggies); // unchanged as well

let meats = ['steak', 'chicken breast'];

let allFood = fruits.concat(veggies, meats); // could pass multiple arrays as a chain

// includes(): searching for a specific value
// indexOf(): returns a particular location within the array
// after finding the key value

// new array
let ingredients = [
    'water', 
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
];

// includes()
console.log(ingredients.includes('fish')); // returns false
// because it can't find fish within the elements of the array
console.log(ingredients.includes('shrimp')); // will return true
// because shrimp is in the elemenets of the array
// it must match exactly, otherwise it'll return false

// optional: we can begin searching from a
// specific position in the array
ingredients.includes('water', 3); // false
ingredients.includes('water', 0); // true

// it can be easily integreated within the condition
// of an if statement, let's say..because its return
// value is a boolean
if (ingredients.includes('flour')) {
    console.log("I'm gluten free, I can't eat that!!");
} else {
    console.log("Let me have some of this, too!!");
}

// indexOf()
console.log(ingredients.indexOf('eel')); // returns 6, which
// is the position in the ingredients[]..
console.log(ingredients.indexOf('maple syrup')); // returns -1
// because it can't find it in the ingredients[] array..

// indexOf() with from index
console.log(ingredients.indexOf('cheese', 2)); // returns 3
// because it found it after position 2
console.log(ingredients.indexOf('cheese', 4)); // returns -1
// because it can't find it after that position in the array

let item = 'flour'; // potentially harmful item

// integrating it within an if statement
if (ingredients.indexOf(item) !== -1) {
    console.log("I found a harmful item in the ingredients.");

    // replacing item with something suitable for gluent-free people
    if (item === 'flour') {
        console.log(`Substituting ${ingredients[ingredients.indexOf('flour')]} with gluten-free flour!!`);
        ingredients[ingredients.indexOf('flour')] = "gluten-free flour";
    } else {
        console.log("I do not recognize this item for substitution.");
    }
    
    console.log(ingredients);
} else {
    console.log("I did not find the item in the ingredients.");
}

// join(): it makes the array into a string
const makeArrayIntoAString = ingredients.join();
console.log("This is ingredients[]..which is typeof:", typeof ingredients);
console.log("This is makeArrayIntoAString..which is typeof:", typeof makeArrayIntoAString); // Ta Da!!

// reverse()
let letters = ['o', 'l', 'l', 'e', 'H'];
// before reversing
console.log(letters);
// after reversing
console.log(letters.reverse()); // the whole array is changed now
console.log(letters);
// join the elements together
console.log(letters.join('')); // gets rid of everything and 
// turns it into a string..but does not mutate.

// slice()
let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3);
console.log(swimmers);

let mammals = animals.slice(2, 4);
console.log(mammals);

let reptiles = animals.slice(4, 6); 
console.log(reptiles);
// or all the way to the end, without including
// the second number in slice()
console.log(animals.slice(4));
// going back 3
console.log(animals.slice(-3)); // last three elements
console.log(animals.slice(-3, -1)); // last three, stop 1 back

// splice(): inserting values at various places
// insert something after shark
animals.splice(1, 0, 'octopus');
console.log(animals);
// deleting whale and bear
animals.splice(3, 2);
console.log(animals);
// insert in between salmon and lizard
animals.splice(3, 0, 'snake');
console.log(animals);
// replace
animals.splice(0, 2, 'SHARK!', 'OCTOPUS!');
console.log(animals);

// sort()
let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
console.log(people.sort());
console.log(people); // updates it as well

let numbers = [34, 10, 100000, 67, 99];
console.log(numbers.sort()); // not sorting based on the 
// numeric value, it turns every element into strings
// instead, pass in the compare() function

let fruit = 'orange'; // stores the value of orange
let color = fruit; // sorting the value of orange

console.log(color);
console.log(fruit);

// updating the variable fruit with watermelon 
fruit = 'watermelon';
console.log(fruit);
console.log(color); // hadn't been changed
// because they're primitive types

// value-type variables, pointing to the same location
// in memory; referencing..valid to arrays
let otherNumbers = numbers;
numbers.push(1000000);
console.log(otherNumbers);

let x = 34;
x += 5;
console.log(x);

const city = 'Lisbon';
//city = 'London'; // won't work

const PI = Math.PI;
console.log(PI);

const myEggs = ['brown', 'brown'];
myEggs.push('purple'); // can push onto it
// becase the reference stays the same
myEggs[0] = 'green';
console.log(myEggs); // a new array

// nested arrays
const animalPairs = [
    ['doe', 'buck'],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
];

// accessing data out of a multi-dimension array
console.log(animalPairs[2][1]); // gives us peacock
console.log(animalPairs[1][1]); // gives us ram

// updating buck with stag
animalPairs[0][1] = 'stag';
console.log(animalPairs[0][1]);




