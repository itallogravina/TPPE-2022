
const calculator = require('../calculator')
const each = require("jest-each").default;

describe("add function", () => {
  each([
    [{ "Salario": 10000 }, 10000],
    [{ "Salario": 8000, "Aluguel": 2000 }, 10000],
    [{ "Salario": 7000, "Aluguel": 2000, "Dividendos": 1000 }, 10000]
  ]).it(
    `should return proper result when passed arguments are:'%s'`,
    (x, result) => {
      expect(calculator.getTotalRendimento(x)).toEqual(result);
    }
  );

});