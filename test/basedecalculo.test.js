const calculator = require("../calculator");
const each = require("jest-each").default;

describe("Somatoria de Dedudção ", () => {
  each([
    [0, { "contribuição compulsoria": 0 }, 0, { Filho: 0 }, 0],
    ["a", { "contribuição compulsoria": "a" }, "a", { Filho: "a" }, 0],
    [-1, { "contribuição compulsoria": -1 }, -1, { Filho: -1 }, 0],
    [
      { "Salario": 7000, "Aluguel": 2000, "Dividendos": 1000 },
      { "contribuição compulsoria": 1000 },
      2,
      { Filho: 1000 },
      7620.82,
    ],
  ]).it("%s", (rend, previdencia, dependentes, pensao, expected) => {
    expect(
      calculator.getBasedeCalculo(rend, previdencia, dependentes, pensao)
    ).toEqual(expected);
  });
});
