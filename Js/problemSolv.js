//#1: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);   
}

// #2: Print the odd numbers less than 100
for (let x = 1; x <= 100; x++) {
    if (x % 2 == 1) {
        console.log(x);
    }
}
// or
for(var i = 1; i <= 100; i = i + 2)
{
    console.log(i);
}

// #3: Print the multiplication table with 7
for (let m = 0; m <= 10; m++) {
    let row = "7 * " + m + " = " + 7 * m;
    console.log(row); 
}

// #4: Print all the multiplication tables with numbers from 1 to 10
for (var i = 1; i <= 11; i++) {
    printTable(i);
    console.log(""); // Add an empty line between tables  line gap
}

function printTable(n) {
    for (var i = 1; i <= 10; i++) {
        var row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
    // console.log(""); // Add an empty line after each table
}

let result = printTable(37);
console.log(result);

// or
for (let m = 1; m <= 20; m++) {
    multiplications(m)
    
}
function multiplications(n) {
    // let table = "";
    for (let x = 1; x <= 10; x++) {
        let row = n + ' * ' + x + ' = ' + n * x;     
        // table += row + "\n";
        console.log(row);
    }
    // return table;
}
// text = multiplications();
// console.log(text);

// #5: Calculate the sum of numbers from 1 to 10
var sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i; 
    console.log(sum);  
}

// #6: Calculate 10!
var prod = 1;
for (let i = 0; i <= 10; i++) {
    prod *= i;  
}
console.log(prod);

// Calculate the sum of odd numbers greater than 10 and less than 30
