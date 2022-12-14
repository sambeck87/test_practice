import reverseString from './reverseString.js';

//Arrange
const message = {
  isNotInReverse : 'the string is not in reverse order',
}

//Act
const test7 = reverseString('hello world');

//Assert
it(message.isNotInReverse, () => {
  expect(test7).toBe('dlrow olleh')
});