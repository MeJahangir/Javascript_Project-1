// for looping

let car = [
    'BMW',
    'volvo',
    'saab',
    'ford',
    'depjol',
    'tata'
];

let test = '';
for (let i = 0; i < car.length; i++) {
    let test = car[i];
    console.log(test);  
}

let count = 0;
while ( count <= 20 ) {
    console.log('Count is : ' + count);
    count++;
}
console.log('Loop finished.');

// break 
let num = "";
for (let i = 0; i < 20; i++) {
    if (i === 4) {
        break
    }
    num += 'Number is ' + i;
}
console.log(num);

// continue

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    text += i; 
}
console.log(text);// 3 print korbe na

let strName = "MDJAHANGIRALAM";
let names = "";
for(const x of strName){
    names += x + "<br>";
}
console.log(names);
// document.getElementById('demo').innerHTML= strName;

const mySet = new Set([1,2,3,4,5,6]);
mySet.add(10);
mySet.delete(3);
console.log(mySet.has(4)); //true hobe
console.log(mySet.has(3)); //false hobe
console.log(mySet.size); //size check

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

for (var i = 0; i<myArray.length; i++){
    console.log(myArray[i]);
}
