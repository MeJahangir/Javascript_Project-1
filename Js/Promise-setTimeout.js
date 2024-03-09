
// Promise and set time out add
let nur = 'wrong';
let jahangir = 'right';

let fruits = [
    {name: "Apple", price: 250, origin: "China"},
    {name: "Orange", price: 300, origin: "Switzerland"},
    {name: "Date", price: 1050, origin: "Saudi Arabia" }
];

let promise = new Promise((resolve, reject) => {

    if (nur === 'right' && jahangir === 'right') {
        setTimeout(function() {
            resolve(fruits);
        }, 2000);
    }else{
        setTimeout(function() {
            reject("error");
        }, 6000);
    }
});

promise.then((data) => {
    console.log("Fruits:", data);
}).catch((error) => {
    console.error("Error:", error);
});

// setTImeOut add 
setTimeout(function() {
    console.log('MD JAHANIR ALAM');
}, 5000);