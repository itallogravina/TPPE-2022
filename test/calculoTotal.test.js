const calculator = require("../calculator");

describe("Alicota", () => {
  it.each([
    [
      { "Salario": 7000, "Aluguel": 2000, "Dividendos": 1000 },
      { "contribuição compulsoria": 1000 },
      2,
      { Filho: 1000 },
      {faixa:"27,50%", alicota:"12,26%"}
    ],
  ])("double(%d)", (rend, previdencia, dependentes, pensao, expected) => {
    expect(calculator.CalculandoAlicota(rend, previdencia, dependentes, pensao)).toBe(expected);
  });
});
