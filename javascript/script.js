

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


let fruits = ['apple', 'banana', 'orange', 'tomato', 'litchi'];
let x = 0; // Initialize a variable `x` to 0, which will be used as an index to access elements in the array.
let fruitslen = fruits.length; // Get the length of the `fruits` array.

// Start a while loop which will continue as long as `x` is less than `fruitslen`.
while (x < fruitslen) {
  console.log(fruits[x]); // Print the current fruit at index `x`.
  
  // Check if the current fruit is 'orange'. If it is, increment `x` and skip to the next iteration using `continue`.
  if (fruits[x] == 'orange') {
    x++; // Increment `x`.
    continue; // Skip the rest of the loop's body and move to the next iteration.
  }
  
  // If the current fruit is not 'orange', print a message saying "Programming is very hard".
  console.log('Programming is very hard');
  
  x++; // Increment `x` to move to the next element in the `fruits` array.
}
