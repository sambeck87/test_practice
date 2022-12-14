import Calculator from "./calculator.js";

//Arrange
const message = {
  addIncorrect: 'The add is incorrect',
  restIncorrect: 'The rest is incorrect',
  multIncorrect: 'The multiplication is incorrect',
  divIncorrect: 'The division is incorrect',
}

const calculate = new Calculator;

//Act
const test1 = calculate.add(9, 7);
const test2 = calculate.add(20, 7);
const test3 = calculate.rest(15, 10);
const test4 = calculate.rest(19, 1);
const test5 = calculate.mult(50, 20);
const test6 = calculate.mult(24, 5);
const test7 = calculate.div(150, 5);
const test8 = calculate.div(24, 6);

//Assert
describe('CalculatorTests', () => {
  describe('sums', () => {
    test(message.addIncorrect, () => {
      expect(test1).toBe(16)
    });

    test(message.addIncorrect, () => {
      expect(test2).toBe(27)
    });
  });

  describe('rests', () => {
    test(message.restIncorrect, () => {
      expect(test3).toBe(5)
    });

    test(message.restIncorrect, () => {
      expect(test4).toBe(18)
    });
  });

  describe('multiplications', () => {
    test(message.multIncorrect, () => {
      expect(test5).toBe(1000)
    });

    test(message.multIncorrect, () => {
      expect(test6).toBe(120)
    });
  });

  describe('divisions', () => {
    test(message.divIncorrect, () => {
      expect(test7).toBe(30)
    });

    test(message.divIncorrect, () => {
      expect(test8).toBe(4)
    });
  })
});
