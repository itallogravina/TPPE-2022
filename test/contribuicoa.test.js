

const calculator = require('../calculator')
const each = require("jest-each").default;
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
  it('dedução 1', () => {
    expect(calculator.getTotalDeducao({"contribuição compulsoria":1000})).toEqual(1000)
  });
  it('dedução 1', () => {
    expect(calculator.getTotalDeducao({"contribuição compulsoria":800})).toEqual(800)
  });
  it('dedução 1', () => {
    expect(calculator.getTotalDeducao({"contribuição compulsoria":1000,"Carne":800})).toEqual(1800)
  });

});