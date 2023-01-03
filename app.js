console.log("Hello World!\n==========\n");
console.log("EXERCISE 1:\n==========\n");
class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  info() {}
  addHobby(hobby) {
    this.hobbies.push(hobby);
  }
  removeHobby(hobby) {
    this.hobbies = this.hobbies.filter(function (e) {
      return e !== hobby;
    });
  }
  greeting() {
    console.log("Hi there! I am a person!");
  }
}

let person1 = new Person("Alejandro", "Coco", "The World", [
  "Running",
  "fencing",
  "Gaming",
]);

person1.addHobby("Running");
person1.removeHobby("fencing");

console.log(person1);
console.log("EXERCISE 2:\n==========\n");
class Coder extends Person {
  constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);
    this.occupation = occupation;
  }
  greeting() {
    console.log("Hi i am a person and a coder!");
  }
}
console.log("EXERCISE 3:\n==========\n");
let person2 = new Person("Alex", "Coco", "The World", ["Gaming", "Swimming"]);

let coder1 = new Coder(
  "John",
  "Bruno",
  "The world",
  ["Reading", "Writting", "Sun-bathing"],
  "Back-End Developer"
);
console.log(person2);
console.log(coder1);

console.log("EXERCISE 4:\n==========\n");

class Calculator {
  constructor(result) {
    this.result = result;
  }
  add(a, b) {
    this.result = a + b;
    return this.result;
  }
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }
  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }
  divide(a, b) {
    this.result = a / b;
    return this.result;
  }
  displayResult() {
    console.log(this.result);
  }
}
let calculator1 = new Calculator(0);

calculator1.add(1, 3);
calculator1.displayResult();
calculator1.subtract(1, 3);
calculator1.displayResult();
calculator1.multiply(2, 3);
calculator1.displayResult();
calculator1.divide(4, 2);
calculator1.displayResult();
