let cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Depjol', 'Tata'];
let counts = 0;
cars.forEach((car, index) => {
    if(car == "Ford"){
        counts = counts + 10;
    } 
    if(car == "Tata"){
        counts = counts + 30;
    }
    // if (car == 'BMW') {
    //     counts += 60;
    // }
    console.log(counts);
});

console.log("Result is : " , counts);