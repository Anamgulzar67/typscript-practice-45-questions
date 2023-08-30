const make_shirt = (size: string, message: string) => {
  console.log("Shirt size: " + size +"\n Message: " + message);
};
make_shirt("medium", "it's mine shirt");

// q37
function make_shirtNew(
  size: string = "Large",
  message: string = "I love typeScript"
) {
  console.log("Shirt size: " + size + ". Message: " + message);
}
make_shirtNew();
make_shirtNew("small");
make_shirtNew("Large", "You are so cool");