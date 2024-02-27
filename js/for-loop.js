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