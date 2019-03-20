var mongoose = require("mongoose");

var homeMealSchema = new mongoose.Schema ({
    type: String,
    name: String,
    image: String
});

restaurantMealScehma = new mongoose.Schema ({
    type: String,
    name: String,
    category: String,
    image: String,
    price: String,
    rating: String,
    comments: String
});

module.exports = mongoose.model("HomeMeal", homeMealSchema);
module.exports = mongoose.model("RestMeal", restaurantMealSchema);