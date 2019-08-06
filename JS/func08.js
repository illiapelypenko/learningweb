const arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  setTimeout(() => console.log(i), 500); //settimeout creates a closure
}
