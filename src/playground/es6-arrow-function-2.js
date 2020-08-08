// arguments object - no longer bound with arrow function

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(55, 1));

// // this keyword - no longer bound

// const user = {
//   name: "Luke",
//   cities: ["kuching", "kl"],

//   printPlacesLived() {
//     return this.cities.map((city) => this.name + " has lived in " + city);
//   },
// };

// console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 3, 2],

  multiply(a) {
    const newArrayNumber = this.numbers.map((number) => {
      return number * a;
    });
    return newArrayNumber;
  },
};

console.log(multiplier.multiply(23));
