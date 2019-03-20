var obj = {
    name: "Dennis",
    age: 36,
    isCool: true,
    friends: ["jacob", "owen"],
    //you can add functions to an object, and they're called methods
    //add is property with value of result of function
    add: function(x,y){
        return x + y;
    }
}

obj.add(3,5)  //8  This is how to call add
//Same format as console.log() - console is an object and log is a method on the object



//We put the method in the object to keep the code organized and grouped logically,
//and also to avoid "namespacing collisions"
function speak(){
    return "WOOF!";
}
speak(); //returns WOOF for a dog

function speak(){
    return "MEOW!";
}
speak(); //now speak returns MEOW and you can't access the original speak WOOF

//Here is what we can do instead
var dogSpace = {};
var catSpace = {};

dogSpace.speak = function(){
    return "WOOF!";
}

catSpace.speak = function(){
    return "MEOW!";
}

dogSpace.speak(); // "WOOF!"
catSpace.speak(); // "MEOW!"



//The Keyword "this"

var comments = {};
comments.data = ["Good job", "bye", "Lame..."];

comments.print = function(){
    this.data.forEach(function(whatever){
        console.log(whatever);
    });
}

//this refers to the object comments