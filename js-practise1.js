for (let i = 100; i > 0; i = i - 2 ){
    console.log(i);
  }
  
  for (let i = 100; i > 0; i-- ){
    if (i % 2 === 0 )
    console.log(i);
  }

  let i = 0;
while (i < 100) {
  console.log(i);
  i++;
}


let i = 0;
do {
  i++;
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
} while (i < 100)

const products = ['Tesla X', 'Toyota Tundra'];
console.log(products[0]);
console.log(products.length);
products[0] = 'Porshe Taycan';
console.log(products[0]);
products[2] = 'Ford Fusion';
console.log(products[2]);
console.log(products.length);
products.push('Audi A7');
console.log(products[products.length-1]);
console.log(products);

console.log('ARRAY:')
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

for (let i = products.length - 1; i >= 0; i--) {
  console.log(products[i]);
}

products.reverse();

products.forEach(printEl);
function printEl(el) {
  console.log(el);
}

products.forEach(function (el) {
  console.log(el);
});

products.forEach( el => console.log(el) );