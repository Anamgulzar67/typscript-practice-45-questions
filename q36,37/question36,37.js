"use strict";
const make_shirt = (size, message) => {
    console.log("Shirt size: " + size + "\n Message: " + message);
};
make_shirt("medium", "it's mine shirt");
// q37
function make_shirtUpdate(size = "Large", message = "I love typeScript") {
    console.log("Shirt size: " + size + ". Message: " + message);
}
make_shirtUpdate();
make_shirtUpdate("small");
make_shirtUpdate("Large", "You are so cool");
