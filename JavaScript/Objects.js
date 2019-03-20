//Objects have key value pairs
//Unlike arrays, Objects have no order, no index
var person = {
    name: "Jacob",
    age: 7,
    city: "Louisville"
};


//THREE WAYS TO INITIALIZE OBJECTS

//make an empty object and then add to it
var wife = {}
wife.name = "Erin";
wife.age = 29;
wife.city = "Louisville";

//all at once
var magicKingdom = {
    faveRide: "Pirates",
    faveChar: "Mickey",
    city: "Lake Buena Vista"
};

//another way of initializing an Object
var dennis = new Object();
dennis.name = "Dennis";
dennis.age = 36;
dennis.city = "Louisville";


//Adding to an object
var epcot = {
    faveRide: "Test Track",
    faveWorld: "Mexico",
    city: "Lake Buena Vista"
};
//Both below adds into epcot Object
epcot.gone = "Maelstrom";
epcot["gone"] = "Maelstrom";

//There are 2 ways to retrieve data from an object
//bracket notation, similar to arrays:
person["name"];
//dot notation:  Preferred bc it's shorter
person.name;

//Cannot use dot notation if property stars with a number
someObject.1blah  //INVALID
someObject["1blah"]  //VALID

//You can lookup using a variable with bracket notation
var str = "name";
someObject.str  //doesn't look for "name"
someObject[str]  //does evaluate str and looks for name

//You cannot use dot notation for property names with spaces
someObject.fav color    //INVALID
someObject["fav color"];  //VALID



//UPDATING DATA
var baby = {
    name: "Owen",
    age: 0,
    city: "Louisville"
};

//to update age
baby["age"] += 1;
//to update city
person.city = "London";



//Objects can hold all kinds of data, including arrays and other objects
var jumkObject = {
    age: 44,
    color: "purple",
    isHungry: false,
    friends: ["Jacob", "Owen"],
    pet: {
        name: "Binx",
        species: "Cat",
        age: 3
    }
};


//OBJECTS INSIDE ARRAYS
//inside this array, first post is index of 0
var posts = [
    {
        title: "Babies are annoying",
        author: "Dennis",
        //Below is an array of comments on this post, inside the object
        comments: ["Hot take", "Cold take"]
    },
    {
        title: "Babies are awesome",
        author: "Erin",
        comments: ["<3", "Go to hell I hate u"]
    }
];

posts[0].title //"Babies are annoying"
posts[1].comments[1] //"Go to hell I hate u"












