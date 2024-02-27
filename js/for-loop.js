// for looping

let cars = [
    'BMW',
    'volvo',
    'saab',
    'ford',
    'depjol',
    'tata'
];

let test = '';
for (let i = 0; i < cars.length; i++) {
    let test = cars[i];
    console.log(test);  
}

let count = 0;
while ( count <= 20 ) {
    console.log('Count is : ' + count);
    count++;
}
console.log('Loop finished.');