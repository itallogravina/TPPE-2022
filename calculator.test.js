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


describe('Calculator2', () => {
  it.each([
    [[1000,8.5,60,22.5],1.0463],

  ])("add %p expecting %p", (p,i,n,ir,result)=>{
    expect(calculator.calculatorInvestimento(p,i,n,ir)).toEqual(result)
  })
});