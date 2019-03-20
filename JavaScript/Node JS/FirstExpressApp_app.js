var express = require("express");
var app = express();

// "/" => "Hi there!" to root
app.get("/", function(request, response){
    response.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog");
    res.send("MEOW");
});

// the : sets up an id so that after /r/ you can type anything
// and it will take you to that page, so /r/puppies or /r/funny, which is how reddit is setup
app.get("/r/:subredditName/", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " SubReddit!"); //making the page dynamic
});

// ex: /r/soccer/comments/8jsdhHY8/ronaldo-messi-love
app.get("/r/:subredditName/comments/:id/:postTitle", function(req, res) {
    console.log(req.params); //will show the parameters of the request.  take off params for the entire req
    res.send("Welcome to the comments section");
});

// * is for any other page we haven't defined
// order of us listing these routes matters. If we list this first, no other page will work
app.get("*", function(req, res) {
    res.send("THIS PAGE DOESN'T EXIST");
});


// Tell Express to listen for requests (start server)
// since we're using Cloud9 we don't set a port or IP
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER HAS STARTED!!!")
});




