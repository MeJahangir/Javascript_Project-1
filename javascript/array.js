// secend largest number print 

const numbers = [30, 40, 4, 5, 30, 50, 45];

const sortedNumbers = numbers.sort((a, b) => a - b);
const secondLargest = sortedNumbers[sortedNumbers.length - 2];
console.log(secondLargest);