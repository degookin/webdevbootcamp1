//Object Oriented Programming
//A programming model based around the idea of objects
//These objects are constructed from "classes", which is like a blueprint
//Objects created from "classes" are "instances"

//JS does not have classes, but we have funcs and objs

var house1 = {
    bedrooms: 2,
    bathrooms: 2,
    sqFeet: 1000
}

//Imagine having to create 100 houses
//Instead we create a blueprint for what a house should be
//These are called "Constructor" functions
//capitalize these func names so people know what they are

function House(bedrooms, bathrooms, sqFeet){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.sqFeet = sqFeet;
}

var firstHouse = new House(2,2,1000);

firstHouse.bedrooms //2
firstHouse.bathrooms //2
firstHouse.sqFeet //1000


//Practice
function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + " just barked");
    }
}

var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);

rusty.bark() //Rust just barked
fido.bark() //Fido just barked



function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    //we can also set props on keyword this
    //that are preset values
    this.numWheels = 4;
}

//instead of duplicating code, we steal from Car
//this argument refers to Motorcycle object
function Motorcycle(make, model, year){
    //using call
    Car.call(this, make, model, year);
    this.numWheels = 2;
}

//using apply, we can just say arguments, which takes
//all the arguments from Motorcyle instead of writing each
function Motorcycle(make, model, year){
    Car.apply(this, arguments);
    this.numWheels = 2;
}














