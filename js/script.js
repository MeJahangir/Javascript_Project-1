let fruits = ['apple','banana','orange','tomato','litchi'];
let i = 0;


while (i < fruitslen) {
  console.log(fruits[i]);
  if (fruits[i] == 'orange') {
    i++;
    continue;
  }
  console.log('Programing is very hard');
  i++;
}