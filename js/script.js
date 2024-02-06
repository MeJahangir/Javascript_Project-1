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

// value check 
let value = 'option2';

switch (value) {
    case 'option1':
        console.log("hello");
        break;
    case 'option2':
        console.log("bangladesh");
        break;
    default:
        console.log("kisu na");
}

// Loops area add 
