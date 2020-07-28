const dog = {
  name: "Toffy",
  age: "8",
  // howIsAGoodBoy() {
  //   console.log(this); // dog
  // },
  howIsAGoodBoy: () => {
    console.log(this); // {}
  },
};

dog.howIsAGoodBoy();
exports.a = "Hello world";
