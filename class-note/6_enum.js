var Shoes;
(function (Shoes) {
    Shoes[Shoes["Nike"] = 0] = "Nike";
    Shoes[Shoes["Adidas"] = 1] = "Adidas";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Nike;
console.log(myShoes);
