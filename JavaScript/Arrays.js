var friend1 = "Matt";
var friend2 = "Jason";
var friend3 = "Jacob";
var friend4 = "Owen";
// This is not DRY, it's repetitive

var friends = ["Matt", "Jason", "Jacob", "Owen"];
// Array format, starting at index 0

friends[2] + " is brothers with " + friends[3];
// "Jacob is brothers with Owen"

friends[1] = "Gayson";
// You can update arrays like this

friends[4] = "Erin";
// This adds an element to the array


// Initializing an empty array
var money = [];

// Arrays can hold any types of data at once
var random = [36, true, "Dad", null];

// Arrays have a length property
var nums = [44, 57, 82, 23];
//nums.length = 4.  It just counts the number of items




//ARRAY METHODS

//Push & Pop

//Push adds to the end of an array.  Easier than knowing which index spot is next
var colors = ["green", "red", "orange"];
colors.push("blue");
//green, red, orange, blue

//Pop removes the last element from an array
var colors = ["green", "red", "orange", "blue"];
colors.pop();
//green, red, orange
var col = colors.pop();
//returns the removed item


//Shift & Unshift

//Unshift adds to the front of an array
var colors = ["green", "red", "orange"];
colors.unshift("yellow");
//yellow, green, red, orange

//Shift removes the first item of an array
var colors = ["yellow", "green", "red", "orange"];
colors.shift();
//removes and returns yellow




// indexOf()

//Returns the first instance of finding an item in an array
var animals = ["cat", "dog", "bird", "llama", "dog"]
animals.indexOf("cat"); //returns 0
animals.indexOf("dog");  //returns 1 not 4
animals.indexOf("lion")  //returns -1 as it doesn't exist



// Slice

//Slice copies part of an array to use elsewhere
var fruits = ["apple", "orange", "lemon", "banana", "mango"]
var citrus = fruits.slice(1,3);
//This finds the items as index 1 & 2, you stop at 3
//Now citrus = ["orange", "lemon"]



//Array Iterations

//Using a For loop to add items to an array automatically.
//This is a very common loop as items are less than length
//Without the loop, you'd have to console.log each individually
//Think having to log 10k comments on a Reddit post one at a time
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//forEach a built in JS way of iterating over an array
//arr.forEach(someFunction);
//The forEach is calling the whole function(colorsAgain) for every item in colors

var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(colorsAgain) {
    console.log(colorsAgain);
});




function myForEach(arr, func) {
    //loop through array
    for(var i = 0; i < arr.length; i++) {
    //call func for each item in array
    func();
    }
}

var colors = ["red", "orange", "yellow"];

myForEach(colors, alert);