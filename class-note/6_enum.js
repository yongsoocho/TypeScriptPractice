var Shoes;
(function (Shoes) {
    Shoes["Nike"] = "nike";
    Shoes["Adidas"] = "adidas";
})(Shoes || (Shoes = {}));
// if Nike = 10 , Adidas will be 11 autometically
var myShoes = Shoes.Nike;
console.log(myShoes);
