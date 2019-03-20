//This will take in an ID name and return the one element
//that matches that ID.  Remember an ID name can only occur once per page
//We're saving it as a var
var tag = document.getElementById("highlight");


//This takes a string argument and returns a list
//of all elements that have a matching class
var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);


//This returns a list of ALL elements of a give tag name like <li> or <h1>
var moreTags = document.getElementsByTagName("li");
console.log(moreTags[0]);


//QUERY SELECTOR
//Returns the FIRST element that matches a given CSS style selector
var tag = document.querySelector("#highlight");
var tag = document.querySelector(".bolded");
var tag = document.querySelector("h1");


//QUERY SELECTOR ALL
//Returns a list of ALL elements that match a given CSS style selector
var tags = document.querySelectorAll("h1");



//Below is for the Exercise
//4 different ways to select the first <p> tag
var test = document.getElementById("first");
var test = document.getElementsByClassName("special")[0];
var test = document.querySelector("#first");
var test = document.querySelector(".special");
var test = document.querySelectorAll(".special")[0];
var test = document.getElementsByTagName("p")[0];
var test = document.querySelector("p");
var test = document.querySelectorAll("p")[0];



//SELECTING AND MANIPULATING

//STYLE

//Select
var tag = document.getElementById("highlight");
//Maniupulate
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

//Rather than directly manipulating style with JS, we can define
//a CSS class and toggle on or off with JS
//Instead of this:
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.background = "yellow";

//Define a class in CSS
// .some-class {
//     color: blue;
//     border: 10px solid red;
//     background: yellow;
// }

//Then add the new class to the selected element
var tag = document.getElementById("highlight");
tag.classList.add("some-class");

//Remove a class
tag.classList.remove("another-class");

//Toggle a class (toggles on or off depending on it's current state)
tag.classList.toggle("another-class");



//TEXT

<p>
    This is an <strong>awesome</strong> paragrah.
</p>

//Select the p tag
var tag = document.querySelector("p");
 //Retrieve the textContent:
 tag.textContent //"This is an awesome paragraph."
 //You can use textContent to change content of the p
 document.p.textContent = "This is NOT an awesome paragraph";
 //Retrieve the text and tags with innerHTML
 tag.innerHTML //"This is an <strong>awesome</strong> paragraph."



 //ATTRIBUTES
 //Use getAttribute() and setAttribute to read and write attributes like src or href
//  <a href="www.google.com">I am a link</a>
//  <img src="logo.png">

 var link = document.querySelector("a");
 link.getAttribute("href");  //"www.google.com"
 //Change the href attribute
 link.setAttribute("href", "www.dogs.com");
 //<a href="www.dogs.com">I am a link</a>

 //To change image source
 var img = document.querySelector("img");
 img.setAttribute("src", "corgi.png");
 //<img src="corgi.png">


 //Below changing all the links "a" tags on Google
var links = document.getElementsByTagName("a");

 //Looping through all the a tags.  This gets us all the text content just to see
 for(var i = 0; i < links.length; i++){
     console.log(links[i].textContent)
 }

 //This loop changes all links background, color, and border
 for(var i = 0; i < links.length; i++){
    links[i].style.background = "pink";
    links[i].style.color = "orange";
    links[i].style.border = "1px dashed purple";
}

//This loop changes links to bing
for(var i = 0; i < links.length; i++){
    links[i].setAttribute("href", "https://www.bing.com");
}







