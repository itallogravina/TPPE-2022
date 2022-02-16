const calculator = require('./calculator')

// describe('Calculator', () => {
//     it('throws error when input.length < 2', () => {
//       expect(() => calculator.calculator('+', [0])).toThrow('inputs should have length >= 2');
//     });

//     it('throws error when unsupported operator was used', () => {
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-ignore
//         // expect(() => calculator.calculator('&', [0, 0])).toThrow('unknown operator &');
//     });

//     it('adds 2 or more numbers incl. `NaN` and `Infinity`', () => {
//         expect(calculator.calculator('+', [1, 41])).toEqual(42);
//         expect(calculator.calculator('+', [1, 2, 39])).toEqual(42);
//         expect(calculator.calculator('+', [1, 2, NaN])).toEqual(NaN);
//         expect(calculator.calculator('+', [1, 2, Infinity])).toEqual(Infinity);
//     });

//     it('subtracts 2 or more numbers incl. `NaN` and `Infinity`', () => {
//         expect(calculator.calculator('-', [43, 1])).toEqual(42);
//         expect(calculator.calculator('-', [44, 1, 1])).toEqual(42);
//         expect(calculator.calculator('-', [1, 2, NaN])).toEqual(NaN);
//         expect(calculator.calculator('-', [1, 2, Infinity])).toEqual(-Infinity);
//     });

//     it('multiplies 2 or more numbers incl. `NaN` and `Infinity`', () => {
//         expect(calculator.calculator('*', [21, 2])).toEqual(42);
//         expect(calculator.calculator('*', [3, 7, 2])).toEqual(42);
//         expect(calculator.calculator('*', [42, NaN])).toEqual(NaN);
//         expect(calculator.calculator('*', [42, Infinity])).toEqual(Infinity);
//     });

//     it('divides 2 or more numbers incl. `NaN` and `Infinity`', () => {
//         expect(calculator.calculator('/', [84, 2])).toEqual(42);
//         expect(calculator.calculator('/', [42, 0])).toEqual(Infinity);
//         expect(calculator.calculator('/', [42, NaN])).toEqual(NaN);
//         expect(calculator.calculator('/', [168, 2, 2])).toEqual(42);
//     });
// });

describe("add function", () => {
  const add = (x, y) => x + y;
  it.each([
    [{ a: 1 , b: 2 , c:3 }, 6]
  ])(
    `should return proper result when passed arguments are: %i, %i`,
    (x, result) => {
      expect(calculator.getTotal(x)).toEqual(result);
    }
  );
});
// describe('CadastraRendimentos', () => {
//   it('Intro ', () => {
//     const Descri ="Salario"
//     const Rendi = 10000
//     expect(calculator.CalculadoraIR(Descri,Rendi)).toEqual({"desc": "Salario", "valorRenddimento": 10000,});

//   });
//   it('Intro 2 ', () => {
//     const Descri =["Salario","Aluguel"]
//     const Rendi = [8000,2000]
//     expect(calculator.CalculadoraIR(Descri,Rendi)).toEqual({"desc": ["Salario","Aluguel"], "valorRenddimento": [8000, 2000,]});

//   });
//   it('Intro 2 ', () => {
//     const Descri =["Salario","Aluguel","Dividendos"]
//     const Rendi = [7000,2000,1000]
//     expect(calculator.CalculadoraIR(Descri,Rendi)).toEqual({"desc": Descri, "valorRenddimento": Rendi});

//   });
// })
