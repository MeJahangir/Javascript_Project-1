// let fruits = [
//     {name: "Apple", price: 250, origin: "china"},
//     {name: "Orange", price: 300, origin: "Switzerland"},
//     {name: "Date", price: 1050, origin: "Saudi" }
// ]


// let promise = new Promise((success, reject)=> {


//     if (success === fruits) {
//         console.log(data);
//     }else(reject === data){
//         console.log(e);
//     }

// })

// promise.then((data)=> {
//     console.log("fruits", data)
// }).catch(e=> {
//     console.log("error", e)
// })

let nur = 'wrong';
let jahangir = 'right';

let fruits = [
    {name: "Apple", price: 250, origin: "China"},
    {name: "Orange", price: 300, origin: "Switzerland"},
    {name: "Date", price: 1050, origin: "Saudi Arabia" }
];

let promise = new Promise((resolve, reject) => {

    if (nur === 'right') {
        resolve(fruits);
    }else{
        reject("error");
    }
});

promise.then((data) => {
    console.log("Fruits:", data);
}).catch((error) => {
    console.error("Error:", error);
});