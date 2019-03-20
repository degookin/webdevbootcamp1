//meal Schemas
var homeMealSchema = {
    type: String,
    name: String,
    image: String
}

restaurantMealScehma = {
    type: String,
    name: String,
    category: String,
    image: String,
    price: String,
    rating: String,
    comments: String
}

//Seed Data
var homeData = [
    {
        type: "breakfast",
        name: "eggs",
        image: "https://images.unsplash.com/photo-1527022128838-598670670723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
        type: "breakfast",
        name: "waffles",
        image: "https://images.unsplash.com/photo-1527022128838-598670670723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
        type: "lunch",
        name: "grilled cheese",
        image: "https://images.unsplash.com/photo-1527022128838-598670670723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
        type: "lunch",
        name: "pb&j",
        image: "https://images.unsplash.com/photo-1527022128838-598670670723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }
];


    // breakfast: ["eggs", "waffles", "toast", "pancakes", "pop tarts"],
    // lunch: ["grilled cheese", "pb&j", "hamburger", "hot dog", "quesadilla"],
    // dinner: ["nachos", "chicken & veggies", "baked potatoes", "stuffed peppers", "pasta"]

var restaurantData = [];

    // breakfast: ["Panera", "Highland Morning", "Bruegger's", "Wild Eggs", "First Watch"],
    // lunch: ["Jimmy Johns", "Stevens & Stevens", "Qdoba", "Simple Greek", "Subway"],
    // dinner: ["Hop Cat", "El Tarasco", "Papa John's", "Ramiro's", "Dundee Tavern"]




var messageDisplay = document.querySelector(".message");
var homeLunch = document.querySelector("#homeLunch");
var restDinner = document.querySelector("#restDinner");
var homeBreakfast = document.querySelector("#homeBreakfast");
// var imgDisplay = document.getElementsById("#image").src = ranObj.image;


homeBreakfast.addEventListener("click", function(){
    var ranObj = homeData[Math.floor(Math.random()*homeData.length)];
    if(ranObj.type === "breakfast"){
        messageDisplay.textContent = ranObj.name;
        // document.write("<img src=" + ranObj.image + ">");
    } else {
        messageDisplay.textContent = "Not breakfast";
    }
});



