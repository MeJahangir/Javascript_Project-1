let cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Depjol', 'Tata'];
let counts = 0;
cars.forEach((car, index) => {
    if(car == "Ford"){
        counts = counts + 10;
    } 
    if(car == "Tata"){
        counts = counts + 30;
    }
    if (car == 'BMW') {
        counts += 60;
    }
    console.log(counts);
});

console.log("Result is : " , counts);

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