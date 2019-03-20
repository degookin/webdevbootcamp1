//alert("Hello from the JS file!");

//Below I prompted user for name, then stored and alerted them
//with their name after, and logged to console
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");
//Not necessary to combine them, but now we have fullName variable
var fullName = firstName + " " + lastName
//alert("Nice to meet you, " + userName);
//console.log("Also great to meet you, " + userName);
console.log("The users name is " + fullName);
console.log(firstName + " " + lastName + " is " + age + " years old.");