console.log(a); // error

// ----

console.log(declaration); // undefined (hoisted)
var declaration;
console.log(declaration); // undefined
declaration = "This is an initialization";
console.log(declaration); // This is an initialization

// ----

console.log(i); // error
let i;
console.log(i); // undefined

// ----

var i = 90;
var i = 99;
console.log(i); // 99 no error

// ----

let i = 9;
let i = 8; // error

// ----

function discountPrices(prices, discount) {
  var discounted = [];

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount);
    var finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  // hoisting
  console.log(i); // 3
  console.log(discountedPrice); // 150
  console.log(finalPrice); // 150

  return discounted;
}

// ----

let i = 10;
for (let i = 0; i < 5; i++) {
  console.log(i); // => 0, 1, 2, 3, 4
}
console.log(i); // => 10

//--

let fs = [];

for (let i = 0; i < 5; i++) {
  fs.push(() => i);
}

console.log(fs.map(f => f())); // [0,1,2,3,4]

/* when used with lexical declaration, for loop binds a new variable for each iteration, 
while a previous value is actually inherited */
