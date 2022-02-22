const calculator = require("../calculator");
const each = require("jest-each").default;

describe("Alicota", () => {
  each([
    [
      { "Salario": 55555.55, "Aluguel": 0, "Dividendos": 0},
      { "contribuição compulsoria": 5555.55},
      0,
      { Filho: 0 },
      {faixa:"27.5%", alicota:"23.19%"}
    ],
    [
      { "Salario": 7000, "Aluguel": 2000, "Dividendos": 1000 },
      { "contribuição compulsoria": 1000 },
      2,
      { Filho: 1000 },
      {faixa:"27.5%", alicota:"12.26%"}
    ],
    
  ]).it("Falsificação e dubplicação %s %s %s %s %s ", (rend, previdencia, dependentes, pensao, expected) => {
    expect(calculator.CalculandoAlicota(rend, previdencia, dependentes, pensao)).toEqual(expected);
  });
  
  each([
    [
      { "Salario": 0, "Aluguel": 0, "Dividendos": 0},
      { "contribuição compulsoria": 0},
      0,
      { Filho: 0 },
      {faixa:"0%", alicota:"0%"}
    ],
    [
      { "Salario": "a", "Aluguel": "a", "Dividendos": "a"},
      { "contribuição compulsoria": "a"},
      "a",
      { Filho: "a" },
      {faixa:"0%", alicota:"0%"}
    ],
    [
      { "Salario": -1, "Aluguel": -1, "Dividendos": -1},
      { "contribuição compulsoria": -1},
      -1,
      { Filho: -1 },
      {faixa:"0%", alicota:"0%"}
    ],

  ]).it("Falsificação e dubplicação  %s %s %s %s %s ", (rend, previdencia, dependentes, pensao, expected) => {
    expect(calculator.CalculandoAlicota(rend, previdencia, dependentes, pensao)).toEqual(expected);
  });
});
