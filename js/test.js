// Test array value check

// let names = ['jahangir', 'alam', 'jakariya', 'nur', 'mehedi', 'yeasin', 'hamid', 'mamun'];
// let i = 0; 
// let nameLength = names.length;

// while (i < nameLength) {
//     console.log(names[i]);

//     // conditon check korbe, jodi same hoy tahole continue er pore loop check korbe na
//     if (names[i] == 'yeasin') {
//         i++;
//         console.log('I am a good person');
//         continue;
//     }
//     console.log('Yeasin Brother is a very rotten person');
//     i++;
// }

var isSingle = true;
// console.log(isSingle);

var price = 5;
price -= 5;
price /= 5;
price *= 5;
console.log(price);

var myName = "jahangri";
var lastName = "alam";
var fullName = myName + " " + lastName;
console.log(fullName);

for (var i = 0; i < 100; i++)
{
    // check that the number is even => jor and odd => bijor
    if (i % 2 == 0)
    {
         continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");
}

// Object key value change**
let aset = {
    mobile : 'samsung',
    laptop : 'asus',
    key : 'a4',
    mouse : 'logitac',
    headphone : 'uishi'
};

if (aset.key == 'a4') {
    aset.key = 'razer';
}
console.log(aset.key);

let parsons = [
    {
        NAME : 'MD JAHANGIR ALAM',
        AGE : 100,
        WEIGHT : 500,
        SEX : 'MALE'
    },
    {
        NAME : 'MD NUR MOHAMMAD',
        AGE : 70,
        WEIGHT : 200,
        SEX : 'MALE'
    },
    {
        NAME : 'MD ROFIQ',
        AGE : 30,
        WEIGHT : 40,
        SEX : 'MALE'
    },
    {
        NAME : 'MD SADIA',
        AGE : 20,
        WEIGHT : 60,
        SEX : 'FEMALE'
    }
];
parsons.push({ NAME: 'MUNNA', AGE: 32, WEIGHT: 50, SEX: 'MALE'});
// console.log(parsons);
// Array => object => only name print.***
for (let I = 0; I < parsons.length; I++) {
    const element = parsons[I].NAME;
    console.log(element);
}

// javascript function add 
function greet(name) {
    return "Hello" + ' ' + name + '!';
}
console.log(greet('Jahangir'));

//Multy function add 

var multifunction = function (number) {
    return number * 10;
}
console.log(multifunction(10));

// conditional 
var iphonePrice = 70000;
var myBudget = 95000;

if (iphonePrice <= myBudget) {
    console.log("Iphone kine futani korbo");
}else{
    console.log("Iphone kenar taka nai");
}