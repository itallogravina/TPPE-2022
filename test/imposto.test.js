const calculator = require("../calculator");
const each = require("jest-each").default;


describe('Imposto', () => {
  // it('falsificalção', () => {
  //   expect(calculator.Imposto(1000)).toEqual(1000)
  // });
  it('falsificalção', () => {
    expect(calculator.Imposto(1903.98)).toEqual(0)
  });
  it('falsificalção', () => {
    expect(calculator.Imposto(2826.65)).toEqual(922.67)
  });
});