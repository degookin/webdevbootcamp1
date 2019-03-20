//Four ways to use keyword this: global, object/implicit, explicit, new

//1. GLOBAL
//when used in the global space outside of a declared object, this refers to the browser window
console.log(this);  //logs 'window'

function whatIsThis(){
    return this
};

function variablesInThis(){
    //since the value of this is the window
    //all we are doing here is creating a global var
    //which is bad practice
    this.person = 'Erin'
};

console.log(person) //Erin

whatIsThis();  //window, as this isn't inside a declared object
variablesInThis(); //creates a global var, person


var data = {};  //we've now declared an object called data
data.instructor = 'Owen';
//data object now has a key with the value of Owen declared inside

//adding Strict mode at the top of your doc
//the value of keyword this, when inside a func is undefined
//and not the global window, and you cannot attach properties to this
//which prevents us from accidentally creating global vars
"use strict"

//now under strict mode
variablesInThis(); //TypeError, cannot set person on undefined
whatIsThis(); //undefined




//2. IMPLICIT/OBJECT

//strict mode doesn't matter here
var person = {
    firstName: "Dennis",
    sayHi: function(){
        return "Hi " + this.firstName
        //closest parent object is var person
    },
    determineContext(){
        return this === person
        //function expression evaluates true since
        //this equals firstName which equals the person object
    }
};

person.sayHi(); //"Hi Dennis"
person.determineContext(); //true


//Nested Objects
var person = {
    firstName: "Vixey",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }
    }
}

person.sayHi() // "Hi Vixey"
person.determineContext() //true

//keyword this, in this case, refers to the dog object
//so since this is in dog, there is no person
//and is therefore undefined
person.dog.sayHello() // "Hello undefined"
person.dog.determineContext() // false




//3. EXPLICIT BINDING


//Call, Apply, Bind
//These can only be used by functions

//Name          Parameters                    Invoke Immediate
//Call    thisArg, a,b,c,... (infinite)             Yes
//Apply   thisArg, [a,b,c,...] (2, arg and array)   Yes
//Bind    thisArg, a,b,c,... (infinite)             No

person.dog.sayHello.call(person);  //"Hello Vixey"
person.dog.determineContext.call(person); //true

//Call is used often to prevent duplicating code
var winnie = {
    firstName: "Winnie",
    sayHi: function(){
        return "Hi " + this.firstName
    }
}

var binx = {
    firstName: "Binx"
}

winnie.sayHi(); // "Hi Winnie"
//instead of having to write a new func instead of binx
winnie.sayHi.call(binx); // "Hi Binx"


//Apply (very similar to call)

var winnie = {
    firstName: "Winnie",
    sayHi: function(){
        return "Hi " + this.firstName
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + " just added " + (a+b+c+d);
    }
}

var binx = {
    firstName: "Binx"
}

winnie.addNumbers(1,2,3,4); //Winnie just added 10
winnie.addNumbers.call(binx,1,2,3,4); //Binx just added 10
winnie.addNumbers.apply(binx,[1,2,3,4]); //Binx just added 10


//Bind
//Similar to call, but since we aren't invoking immediately
//we don't need to know all arguments up front

var winnie = {
    firstName: "Winnie",
    sayHi: function(){
        return "Hi " + this.firstName
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + " just added " + (a+b+c+d);
    }
}

var binx = {
    firstName: "Binx"
}

var binxCalc = winnie.addNumbers.bind(binx, 1, 2); //function(){}
binxCalc(3,4); //Binx just added 10


//NEW keyword

//When the keyword NEW is used, it creates a new object out of thin air
//and this will refer to new object created

function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

var sherlock = new Person("Sherlock", "Holmes");

sherlock.firstName // "Sherlock"
sherlock.lastName  // "Holmes"











