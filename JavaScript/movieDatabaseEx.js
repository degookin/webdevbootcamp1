var movies = [
    {
        title: "Kill Bill Vol. 1",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Speed",
        rating: 4,
        hasWatched: false
    },
    {
        title: "Fever Pitch",
        rating: 2.5,
        hasWatched: true
    },
    {
        title: "Secret Life of Pets",
        rating: 3.5,
        hasWatched: false
    }
];

movies.forEach(function(movie) {
    //Starting a result string and slowly adding to it
    var result = "I have ";
    if(movie.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result)
})


//Can also do it like this below which cleans it up some with two funcs
function buildString(movie){
    var result = "I have ";
    if(movie.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}
//forEach is much clearer as to what's happening
movies.forEach(function(movie){
    console.log(buildString(movie));
});


//Below was my attempt
// function movieDb(movies) {
//     for(var i = 0; i < movies.length; i++) {
//         if(movies[i].hasWatched === true) {
//             console.log("I have watched " + title + " - " + rating + " stars")
//         } else if(movies[i].hasWatched === false) {
//             console.log("I have not seen " + title + " - " + rating + " stars")
//         }
//     }
// }