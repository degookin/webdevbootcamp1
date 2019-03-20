//these are listener events similar to addEventListener in JS


//click()
//prints when item with id sumbit is clicked
$('submit').click(function(){
    console.log("Another click");
});

//alerts when ANY button is clicked
$('button').click(function(){
    alert("Someone clicked a button");
});

//In JS we would have had to add Event listeners to all buttons, then
//for loop through all.  Adding $(this) since it's jQuery instead of
//just adding this.css, let's you know which button to turn pink, which
//ever is clicked on
$('button').click(function(){
    $(this).css("background", "pink")
});

//Logging the name of the button clicked
$('button').click(function(){
    var text = $(this).text();
    console.log("You clicked " + text);
});




//keypress()
//Does a function when a key is pressed
//Below is on a text input field
$('input').keypress(function(){
    console.log("you pressed a key");
});

//adding in an event and checking for a specific key hit
//13 refers to the ENTER key
$('input').keypress(function(anything){
    if(anything.which === 13){
        alert("You hit ENTER!");
    }
});




//on()  //event used 99% of the time, the most used listener
//it lets you specifiy the type of event to listen for

//prints when item with id 'submit' is clicked
$('#submit').on('click', function(){
    console.log("Another click");
});

//alerts when ANY button is clicked
$('button').on('click', function(){
    console.log("button clicked");
});

//double click event
$('button').on('dblclick', function(){
    alert("DOUBLE CLICK");
});

//drag start event
$('a').on('dragstart', function(){
    console.log("Drag started!");
});

//keypress event
$('input[type="text"]').on('keypress', function(){
    alert("key press in an input!");
});




//fadeOut() or fadeIn() or fadeToggle() does what it says
//Below fades out all the divs on a click of a button in 1 sec
//and the logging happens after the fade is complete
$('button').on('click', function(){
    $('div').fadeOut(1000, function(){
        console.log("fading out");
    });
});



//slideDown() or slideUp() slideToggle() does what it says
//Below slides up whatever styling of divs on button click
$('button').on('click', function(){
    $('div').slideUp();
});
//all works same as fade



























