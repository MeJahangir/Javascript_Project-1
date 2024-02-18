// What is variable?
// Ans: kono data k akta jayga te store kore rakhar jonno j sentax use kora hoy take variable bole
// Example :
var x = "md jahangir alam";
var y = "md jahangir alam";
const z = "md jahangir alam";


var firstName = "jahangir";
var lastName  = "alam";
const fullName = "md jahangir alam";
console.log(firstName);
console.log(lastName);
console.log(fullName);

// result : jahangir
// result : alam
// result : md jahangir alam

// Types of variable? How can you find out type of a variable
var stringType = "md jahangir alam";
var numberType = 100;
var boolentype = true;
var floatType = 3.22;

console.log(typeof(stringType));
console.log(typeof(numberType));
console.log(typeof(boolentype));
console.log(typeof(floatType));
// result : (string, number, boolean, float) 

// Primitive and non-primitive data types

// Primitive Data Types 
/*
Number
String
Boolean
Undefined
Null
Symbol
*/

// Non_Primitive Data Types 

/*
Object 
Array
*/

// Naming Convention of js variables
var fastName;
var numberOfStudent;
var totalAmountPaid;
var isValidUser;

// Math Operation +.-.*.%

var result = 10 + 5; // Addition
result = 10 - 5;     // Subtraction
result = 10 * 5;     // Multiplication
result = 10 / 5;     // Division
result = 10 % 3;     // Modulus (remainder after division)

// +=, -=, value 
var x = 10;          // Assigns the value 10 to variable x
x += 5;              // Equivalent to: x = x + 5

var x = 10;          // Assigns the value 10 to variable x
x -= 5;              // Equivalent to: x = x - 5

// Meaning of : >, <, >=, <=, ==, !=, ===, !==;
var result = 10 > 5;   // Greater than
result = 10 < 5;       // Less than
result = 10 >= 5;      // Greater than or equal to
result = 10 <= 5;      // Less than or equal to
result = 10 === 5;     // Equal to (strict equality)
result = 10 !== 5;     // Not equal to (strict inequality)

var result = true && false;  // Logical AND
result = true || false;      // Logical OR
result = !true;              // Logical NOT
console.log(result);
// Increment and Decrement x++, x--,
var x = 5;
x++;         // Increment by 1
x--;         // Decrement by 1

console.log(x);
// ParseInte value check
var num1 = parseInt("123");
console.log(num1);
// Example
var result = parseInt("abc"); // result will be NaN
if (isNaN(result)) {
    console.log("Not a number");
}

//ParseFloat value check
var num2 = parseFloat('3.22');
console.log(num2);
// Example: 
var result = parseFloat("abc"); // result will be NaN
if (isNaN(result)) {
    console.log("Not a number");
}

var num = 3.14159;
var formattedNum = num.toFixed(1); // Rounds to 2 decimal places
console.log(formattedNum); // Outputs "3.14"

var num = 3.14159;
var formattedNum = num.toFixed(3); // Returns "3.14" (a string)
var parsedNum = parseFloat(formattedNum); // Parses the string back to a number
console.log(parsedNum); // Outputs 3.14

// How to declare an array in js. array index declear
var myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(myArray[4]);

var array1 = []; // Empty array
var array2 = [1, 2, 3, 4, 5]; // Array with initial values
var array3 = ["apple", "banana", "orange"]; // Array of strings
var array4 = [false, true, false]; // Array of booleans

var result = array1 + array2 + array3 + array4;
console.log(result);

var array = [1, 2, 3, 4, 5];
console.log(array.length); // Result 5

// find the velue of an element by index.
var array = [10, 20, 30, 40, 50];

// Finding the value at index 2 (which is the third element)
var valueAtIndex2 = array[2];
console.log(valueAtIndex2); // Output: 30

// Change an element by index.
var array = [10, 20, 30, 40, 50];
array[2] = 35;
console.log(array); // Output: [10, 20, 35, 40, 50]

//Get the index of an element by the value
var array = [10, 20, 30, 40, 50];
var valueToFind = 30;

var index = array.indexOf(valueToFind);
console.log(index); // Output: 2


// what does it mean when you get undefined while getting the value of an elements.
var obj = { name: "John", age: 30 };
console.log(obj.address); // Output: undefined

var array = [1, 2, 3];
console.log(array[5]); // Output: undefined

var myVariable;
console.log(myVariable); // Output: undefined

function myFunction() {
    // No return statement
}
var result = myFunction();
console.log(result); // Output: undefined

// how can you add an element to an array at the last positon
var arrayAdd = [1,2,3,4,5,6,7,8];
arrayAdd.push(100);
console.log(arrayAdd); //Output : last 100

// how can you add an element from array at the first position
var arrayAdd = [1,2,3,4,5,6,7,8];
arrayAdd.unshift(2);
console.log(arrayAdd);

// how can you remove an element from array at the first position
var arrayAdd = [1,2,3,4,5,6,7,8];
arrayAdd.shift();
console.log(arrayAdd);

// Max-value check 
var num3 = [10, 20, 30, 40, 50];
var top = Math.max(...num3);
console.log(top);// 50

// Min-value check 
var num3 = [10, 20, 30, 40, 50];
var low = Math.min(...num3);
console.log(low);// 10

// Slice system
var text = 'apple, banana, mango, deth';
var part = text.slice(-11, -6);
console.log(part);// output: mango

var array = ['apple', 'banana', 'orange', 'litchi'];
array.pop();
console.log(array); // output : Litchi delet hobe
