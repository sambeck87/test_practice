class Calculator {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2
  }

  add(number1, number2) {
    return number1 + number2;
  }

  rest(number1, number2) {
    return number1 - number2;
  }

  div(number1, number2) {
    return number1 / number2;
  }

  mult(number1, number2) {
    return number1 * number2;
  }
}
  export default calculator;