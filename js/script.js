// conditions area discount mathord add
let price = 20000;
let discountPercentage;
let discount;

if (price >= 20000) {
    discountPercentage = 10;
    discount = (discountPercentage * price) / 100;
    console.log(discount);
} else if (price >= 10000){
    discountPercentage = 5;
    discount = (discountPercentage * price) / 100;
    console.log(discount);
}else{
    console.log("No discount applicable!");
}