const calculadora = require("../calculator")
const each = require("jest-each").default;

describe('Dependentes', () => {
  each([[1, 189.59], [2, 379.18],[100,18959],[-100,null],["a",null]]).it(
    'Dependentes (%d)',
    (input, expected) => {
      expect(calculadora.getTotalDependentes(input)).toEqual(expected)
    }
  );
  // it('Quantidade de Dempendetes', () => {
  //   expect(calculator.getTotalDependentes(1)).toEqual(189.59)
  // });
  // it('Quantidade de Dempendetes 2', () => {
  //   expect(calculator.getTotalDependentes(2)).toEqual(379.18)
  // });
  // it('Quantidade de Dempendetes 100', () => {
  //   expect(calculator.getTotalDependentes(100)).toEqual(18959)
  // });
  // it('Quantidade de Dempendetes negative', () => {
  //   expect(calculator.getTotalDependentes(-100)).toEqual(null)
  // });
  // it('Quantidade de Dempendetes letter', () => {
  //   expect(calculator.getTotalDependentes("a")).toEqual(null)
  // });
});