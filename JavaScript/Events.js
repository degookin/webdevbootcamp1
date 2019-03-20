//Events make things happen and run off Listeners, which
//"listens" for something to happen: click, hover, typing, etc.

//To add a listener, we use method called addEventListener
element.addEventListener(type, functionToCall);  //Syntax to add listner

//Example
var button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("Someone Clicked The Button!");
});

//You don't have to create a new variable, can do like this
document.querySelector("ul").addEventListener("click", function(){
    alert("UL was clicked");
});


//Example linking to Events.html.
//This works in Console but not from files
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", function() {
    paragraph.textContent = ("Someone Clicked The Button!!!");
});


//For multiple LI's to do different things, instead of the whole UL
var lis = document.querySelectorAll("li");

//Keyword "this" refers to the one that something happened to
//clicked on or hovered on, whatever we indicate
for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function() {
        this.style.color = "pink";
    });
}


//Instead of writing an anonymous function()
//You can write a named function
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", changeText);

function changeText() {
    paragraph.textContent = "Someone clicked the button!";
}











