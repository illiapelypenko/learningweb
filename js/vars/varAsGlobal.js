// works in browser, doesn't in node as this is undefined

var data = [
  { name: "Samantha", age: 12 },
  { name: "Alexis", age: 14 },
];

var user = {
  data: [
    { name: "T. Woods", age: 37 },
    { name: "P. Mickelson", age: 43 },
  ],
  showData: function (event) {
    var randomNum = ((Math.random() * 2) | 0) + 1 - 1; // Любое число с 0 до 1

    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  },
};

var showDataVar = user.showData;

showDataVar();
