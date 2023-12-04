const {newGreeting, doubledAge, numbers, person}  = require('./variables');

test('greet to equal "Hello World"', () => {
  expect(newGreeting).toBe('Hello World!');
});

test('double age to equal 50', () => {
  expect(doubledAge).toBe(50);
});

test('numbers to equal array 1,2,3,4,5,6,7', () => {
  expect(numbers).toStrictEqual([1,2,3,4,5,6,7]);
});

test.only('person has property "residence" with value "Zwolle"', () => {
  expect(person.residence).not.toBeUndefined();
});