
// secend largest number print 

const numbers = [30, 40, 4, 5, 30, 50, 45];

function getSecondLergest(arayOfNumbers){
    let min = 0;
    let max = 0;

    for (let index = 0; index < arayOfNumbers.length; index++) {
        const element = arayOfNumbers[index];
        if(element > min){
            max = element; 
        }
        if (max = element) {
            min.length - 1;
        }

        min = element;
       
    }

    return max;
}

let result = getSecondLergest(numbers);
console.log(result);

console.log(sortedNumbers);

const secondLargest = sortedNumbers[sortedNumbers.length - 2];
console.log(secondLargest);

// example :
const sortedNum = numbers.splice((jahangir , alam) => jahangir - alam);
const secondLarg = sortedNum[sortedNum.length - 2];
console.log(secondLarg);
// example :
const sort = numbers.sort((a, b) => a - b);
const largest = sortedNumbers[sortedNumbers[1]];
console.log(secondLargest);

// // output : 45


const numbers = [30, 40, 4, 5, 30, 50, 45];

function getSecondLargest(arrayOfNumbers) {
    let max = 0;
    let secondMax = 0;

    for (let index = 0; index < arrayOfNumbers.length; index++) {
        const element = arrayOfNumbers[index];
        
        if (element > max) {
            secondMax = max;
            max = element;
        } else if (element > secondMax && element !== max) {
            secondMax = element;
        }
    }
    return secondMax;
}

let result = getSecondLargest(numbers);
console.log(result); 
