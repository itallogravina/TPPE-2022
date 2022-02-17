const calculator = require("../calculator");
const each = require("jest-each").default;

describe("Somatoria de Dedudção ", () => {
  each([
    [{ "contribuição compulsoria": 0 }, 0, { Filho: 0 }, 0],
    [{ "contribuição compulsoria": "a" }, "a", { Filho: "a" }, 0],
    [{ "contribuição compulsoria": -1 }, -1, { Filho: -1 }, 0],
    [{ "contribuição compulsoria": 1000 }, 2, { Filho: 1000 }, 2379.18],
  ]).it("%s", (previdencia, dependentes, pensao, expected) => {
    expect(
      calculator.getSomatoriaDeducao(previdencia, dependentes, pensao)
    ).toEqual(expected);
  });

  // it('falsificação', () => {
  //   expect(calculator.getSomatoriaDeducao(1000)).toEqual(1000)
  // });
  // it('falsificação', () => {
  //   expect(calculator.getSomatoriaDeducao(800)).toEqual(800)
  // });
  // it('falsificação', () => {
  //   expect(calculator.getSomatoriaDeducao(800)).toEqual(800)
  // });
  // it('dedução previdencia', () => {
  //   expect(calculator.getSomatoriaDeducao({ "contribuição compulsoria": 1000 })).toEqual(1000)
  // // });
  // it('dedução previdencia+filho', () => {
  //   expect(calculator.getSomatoriaDeducao({ "contribuição compulsoria": 1000 },2)).toEqual(1379.18)
  // });
  // it('dedução previdencia+filho+PA', () => {
  //   expect(calculator.getSomatoriaDeducao({ "contribuição compulsoria": 1000 },2,{ "Filho": 1000 },)).toEqual(2379.18)
  // });
});
