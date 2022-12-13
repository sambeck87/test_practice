import capitalizeFirstLetter from './capitalizeFirstLetter.js'

//Arrange
const message = {
  containsCapitalLetter : 'the length not contain a capital letter',
};

//Act 
const string = capitalize('my name is moka');

//Assert
test(message.containsCapitalLetter, () => {
  expect(string.toBe('My name is moka'))
});