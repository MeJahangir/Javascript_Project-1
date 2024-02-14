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
