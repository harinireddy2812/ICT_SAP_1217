// //Regular Function
// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3)); 
const user = {
  name: "Harini",
  sayHi: function () {
    console.log(this.name);
  }
};

user.sayHi();
