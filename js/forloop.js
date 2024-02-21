for (var tast = 0; tast < 39; tast++) {
    console.log('ajke amar mon valo nai'); 
}

for (var index = 58; index <= 98; index++) {
    console.log(index);
}


var test = [1,2,3,4,5,6,7,8,9,10];
for (let I = 0; I < test.length; I++) {
    const element = test[I];
    console.log(element);
}

var test = [1,2,3,4,5,6,7,8,9,10];
console.log(test[1]);


for (let num = 582; num < 624; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }     
}

for (let x = 100; x < 200; x++) {
    if (x%3== 1) {
        console.log(x);
    }
    
}


// An array can hold numbers, strings, objects, functions, and even other arrays
let mixedArray = [
    42, 
    "hello", 
{
     name: "John" 
}, 
function() { 
    return "I am a function"; 
},
[
    1, 2, 3
]
];
console.log(mixedArray[3]);


function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; // Target found
        } else if (nums[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    
    return left; // Target not found, return the index where it should be inserted
}

// Example usage:
let nums = [1, 3, 5, 6];
let target = 5;
console.log(searchInsert(nums, target)); // Output: 2 (index where target is found)

target = 2;
console.log(searchInsert(nums, target)); // Output: 1 (index where target would be inserted)

target = 7;
console.log(searchInsert(nums, target));

let myName = "jahangir";
myName = "joy";
console.log(myName);

const amarNama = "jahangir";

console.log(amarNama);