const calculator = require("../calculator");

describe("Imposto", () => {
  // it('falsificalção', () => {
  //   expect(calculator.Imposto(1000)).toEqual(1000)
  // });
  // it("falsificalção2", () => {
  //   expect(calculator.Imposto(1903.98)).toEqual(0);
  // });
  // it("falsificalção3", () => {
  //   expect(calculator.Imposto(2826.65)).toEqual(69.2002);
  // });

  it.each([
    [1903.98, {alicota:"0%",imposto: 0}],
    [2826.65,{alicota:"7,5%",imposto:  69.2002}],
    [3751.05,{alicota:"15%",imposto:  207.8603}],
    [4664.68, {alicota:"22,5%",imposto: 413.4271}],
    [4664.69, {alicota:"27,5%",imposto: 413.4297}],
    [3751.06, {alicota:"22,5%",imposto: 207.8625}],
    [7620.82, {alicota:"27,5%",imposto: 1226.3655}],
  
  ])("double (%i) (%d)", (input, expected) => {
    expect(calculator.Imposto(input)).toEqual(expected);
  });




});
