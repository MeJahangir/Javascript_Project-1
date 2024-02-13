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
console.log(resultFun); // print korar jonno 2 tai right option**
// console.log(greet(" Jahangir alam")); 

//Define a function called multiplyFive which accepts a 
//number and returns that number multiplied by 5.
var multiplyFive = function (number) {
  return number * 5;
}
console.log(multiplyFive(3));
console.log(multiplyFive(4));
console.log(multiplyFive(5));
console.log(multiplyFive(6));

// jsvascript pop-up boxes
// var test = prompt("jahangir");
// var test = confirm("Hi");
// var test = alert("Hello");
// console.log(test);


var fruit = ["Apple", "Banana", "Orange"];
for (let i = 0; i < fruit.length; i++) {
  const test = fruit[i];
  console.log(test);
}

// while looping
let fruits = ['apple','banana','orange','tomato','litchi'];
let x = 0;
let fruitslen = fruits.length;
while (x < fruitslen) {
  console.log(fruits[x]);
  if (fruits[x] == 'orange') {
    x++;
    continue;
  }
  console.log('Programing is very hard');
  x++;
}
// javascript forEach area add
let numbers =[1,2,3,4,5];
numbers.forEach((item, index, arr) => {
  // console.log(arr);
  console.log('a[' + index + '] = ' + item);
});
  
var letters = ['a', 'b', 'c', 'd', 'a', 'c', 'a', 'b'];
let count = {};
letters.forEach(item =>{
  if (count[item]) {
    count[item]++;
  }else{
    count[item]= 1
  }
});

console.log(count);

let number =[1,2,3,4,5];
let numberDouble = number.map(multiply);
function multiply(value, index, arr) {
  return value * 2;
}
console.log(numberDouble);
// result: 2,4,6,8,10

console.log(count);

let indDouble =[1,2,3,4,5];
let DoubleIndex = indDouble.map(multiply);
function multiply(value, index, arr) {
  return value * index;
}
console.log(DoubleIndex);
// result: 2,4,6,8,10

// for condition 
let text = '';
for (let i = 0; i < 10; i++) {
  if (i === 3) {break;} {
     text += "The number is " + i + '<br>'; 
  } 
}
console.log(text);
