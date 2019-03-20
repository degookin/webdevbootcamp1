//Selecting with jQuery
// $("selectorGoesHere")
//Selection is done in the way of CSS

//to select all img tags
$("img")

//to select all elements with class "sale"
$(".sale")

//to select element with id "bonus"
$("#bonus")

//to select all a tags inside of li's
$("li a")



//Manipulating Style
//.css(property, value)

//Select element with id special and give it a border
$("#special").css("border", "2px solid red");

//we can also pass in an object with styles
var styles = {
    backgroundColor: "pink",
    fontWeight: "bold"
};

$("#special").css(styles);

//This is way better than having to do a separate line for each style
//The $ selector is way more powerful
document.querySelector("#special").style.backgroundColor = "pink";
document.querySelector("#special").style.fontWeight = "bold";


//Can also style with object inline
$("li").css({
    fontSize: "10px",
    border: "3px dashed purple",
    background: "rgb(35, 58, 240)"
});




