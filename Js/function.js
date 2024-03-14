// Using a condition
function isAdult(age) {
  if (age >= 18) {
      console.log("You are an adult.");
  } else {
      console.log("You are not an adult.");
  }
}

// Calling the function with different arguments
isAdult(25); // Output: "You are an adult."
isAdult(15);

function myFunction(product) {

  for (let i = 0; i < product.length; i++) {
    const element = product[i];
    console.log(element);
  }
}

const product = [1,2,3,4,5,6,7,8,9];
myFunction(product)