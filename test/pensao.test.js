const calculadora = require("../calculator");

describe("Pensaão", () => {
  it.each([
    [{ "Filho": 1000 }, 1000],
    [{ "Filho": 800 }, 800],
    [{ "Filho": 1000, "Filho 2": 800 }, 1800],
    [{ "Filho": -1000 }, null],
    [{ "Filho": "a" }, null],
  ])('%s', (input, expected) => {
    expect(calculadora.getTotalPensao(input)).toBe(expected);
  });
  it("Falsificação", () => {
    expect(calculadora.getTotalPensao({ Filho: 1000 })).toEqual(1000);
  });
  it("Valor deiferente", () => {
    expect(calculadora.getTotalPensao({ Filho: 800 })).toEqual(800);
  });
  it("Obj", () => {
    expect(calculadora.getTotalPensao({ Filho: 800 })).toEqual(800);
  });
  it("Obj", () => {
    expect(calculadora.getTotalPensao({ Filho: 1000, "Filho 2": 800 })).toEqual(
      1800
    );
  });
});
