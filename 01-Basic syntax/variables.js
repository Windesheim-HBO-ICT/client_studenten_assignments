
// Declare variables
let greeting = 'Hello'; // string
let age = 25;           // number
let isStudent = false;  // boolean
let numbers = [1, 3];  // array
let person = {                  // object
  name: 'Alice',
  profession: 'Engineer'
};

// Operations
let newGreeting = greeting + ' Dear Student!';
let doubledAge = age * 3;
numbers.push(6);
person.profession = 'Developer';
person.isStudent = isStudent;


module.exports = {newGreeting, doubledAge, numbers, person};