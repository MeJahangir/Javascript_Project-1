// conditions area discount mathord add
let price = 10000;
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

function lsleapYear(year) {
    if (year % 400 === 0) {
      console.log("hello");
  }else if(year % 100 === 0){
    console.log("Bangladesh");
  }else if(year % 4 === 0){
    console.log("Jahangir");
  }else{
    console.log("this year is not leap year");
  }
}
  lsleapYear(2024);