//val()
//Gives you the value of something
$("input").val();  //gives you the value of whats in a text input field
$("input").val("Test text");  //adds the value in
$("input").val("");  //This resets the text input value by passing in ""

//text()
//List all the text elements without the HTML OR change text content
$("li").text();
$("h1").text("New H1 Text");

//attr()
//Get an element and set the attributes
$("#greatPhoto").attr("alt", "Beijing Brush Seller");  //Changing the Alt tag from the HTML

$("greatPhoto").attr({      //Change multiple at once
    alt: "Beijing Brush Seller",
    title: "photo by Kelly Clark"
}); 

//html()
//Works just like text() but gives the HTML as well, and can change too
$("ul").html();
$("li:first-of-type").html("<li>I hacked your UL</li>");
$("li").html("<a href='google.com'>CLICK ME TO GO TO GOOGLE</a>");

//addClass()
//Same as regular JS version of classList.add
$("h1").addClass("correct");

//removeClass()
//Same as regular JS version of classList.remove
$("h1").removeClass("correct");

//toggleClass()
//Same as regular JS version of classList.toggle
$("h1").first().toggleClass("correct"); //toggles first h1 only
$("h1").last().toggleClass("correct"); //toggles last h1 only









