//Declare a Function
function doSomething() {
    console.log("Hello World");
}

//Then call it
doSomething();


//Arguments
function square(num) {
    console.log(num * num);
}

square(10);  //prints 100



function sayHi(name) {
    console.log("Hi there " + name + "!");
}

sayHi("Jacob");


//Functions can take multiple arguments
function greet(one, two, three) {
    console.log(one + " is the best!");
    console.log(two + " is the best!");
    console.log(three + " is the best!");
}

greet("Harry", "Ron", "Hermione");



//Returns

//This function capitalizes the first char in a string
//It returns the char at 0 "p" and uppercases it, then adds 
//takes the rest of str starting at 1 "a" and adds it to the "P"
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";               //"paris"
var capital = capitalize(city);   //"Paris"


//The return keyword can stop execution of a function
//This function runs for city, but for num it doesn't because
//it's checking to see if it's a number, and if it is, it returns
//"that's not a string" and stops the function, so final part doesn't run
function capitalize(str) {
    if(typeof str === "number") {
        return "that's not a string!"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";               //"paris"
var capital = capitalize(city);   //"Paris"

var num = 37;
var capital = capitalize(num);    //"that's not a string!"


//Another syntex to write a function is Function Expression
var capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}



//Higher Order Functions
//Let us pass funcs to other funcs

function sing() {
    console.log("twinkle twinkle...");
    console.log("how i wonder...");
}

//This function calls whatever is in sing every 1000 ms
setInterval(sing, 1000);


//Below is an anonymous function inside a higher order function
//We're creating the function inline and have no intention to
//use it elsewhere, and it doesn't even have a name except function
setInterval(function(){
    console.log("I am an anonymous function");
    console.log("This is awesome");
}, 2000);