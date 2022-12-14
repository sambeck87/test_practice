import characterCount from './stringCount.js';

//Arrange
const message = {
  lengthIncorrect : 'the length is not correct',
  isNotNumber : 'The output should be the length of the word',
  isNotInRange : 'The output should be "the length is not between 1 and 10"',
  isNotInReverse : 'the string is not in reverse order',
}

//Act
const test1 = characterCount('hello wor');
const test2 = characterCount('my house');
const test3 = characterCount('1234567890');
const test4 = characterCount('0');
const test5 = characterCount('');
const test6 = characterCount('Im creating my first test on Microverse program');
const test7 = characterCount('hello world');

//Assert

it(message.lengthIncorrect, () => {expect(test1).toBe(9);});

it(message.lengthIncorrect, () => {
  expect(test2).toBe(8)
});

it(message.isNotNumber, () => {
  expect(test3).toBe(10)
});

it(message.isNotNumber, () => {
  expect(test4).toBe(1)
});

it(message.isNotInRange, () => {
  expect(test5).toBe('the length is not between 1 and 10')
});

it(message.isNotInRange, () => {
  expect(test6).toBe('the length is not between 1 and 10')
});