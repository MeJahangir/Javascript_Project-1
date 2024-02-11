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

  function myFunction() {
    console.log("hello bangladesh jahangir");
  }
  myFunction();

var myArray = [];
// TODO: write your code here:
myArray.push(2);
myArray.push(3);
myArray.push(6);
myArray.push(8);
myArray.push(20);
console.log(myArray.pop());//last array hidden
console.log(myArray.shift()); //font aray hiaden
console.log(myArray);//array print

// js while loop decrement
var i = 99;
while (i > 0)
{
    console.log(i + " bottles of beer on the wall");
    i -= 1; // poti ta print a akta kore kombe
}

// js loop kore increment print kora 
for (var i = 1; i <= 100; i++)
{
    // check that the number is even
    if (i % 2 == 0)
    {
         continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");
}

var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

//TODO: modify this code
for (var i = 0; i<myArray.length; i++){
    console.log(myArray[i]);
}

//javascript object declear system

var parson = {
  firstName :  "Jack",
  lastName : "Smith",
  age : 19,
  employed : true
}

console.log(parson);

// javascript function add 
function greet(everyting) {
  return "Hello" + everyting + "!";
}

var resultFun = greet(" MD JAHANGIR ALAM");
console.log(resultFun);
// console.log(greet(" Jahangir alam"));