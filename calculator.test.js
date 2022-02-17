const calculator = require('./calculator')
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
describe("Total Dedução", () => {

  each([[{ "contribuição compulsoria": 1000 }, 1000], 
  [{ "contribuição compulsoria": 800 }, 800], 
  [{ "contribuição compulsoria": 1000, "Carne": 800 }, 1800]]).
  it(
    '%s',
    (input, expected) => {
      expect(calculator.getTotalDeducao(input)).toBe(expected);
    }
  );
  // it('dedução 1', () => {
  //   expect(calculator.getTotalDeducao({"contribuição compulsoria":1000})).toEqual(1000)
  // });
  // it('dedução 1', () => {
  //   expect(calculator.getTotalDeducao({"contribuição compulsoria":800})).toEqual(800)
  // });
  // it('dedução 1', () => {
  //   expect(calculator.getTotalDeducao({"contribuição compulsoria":1000,"Carne":800})).toEqual(1800)
  // });

});
