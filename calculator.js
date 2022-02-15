 
 function calculator(operator , inputs) {
 
    if (inputs.length < 2) {
        throw new Error(`inputs should have length >= 2`);
    }
 
    switch (operator) {
        case '+':
            return inputs.reduce((prev, curr) => prev + curr);
        case '-':
            return inputs.reduce((prev, curr) => prev - curr);
        case '*':
            return inputs.reduce((prev, curr) => prev * curr);
        case '/':
            return inputs.reduce((prev, curr) => prev / curr);
        default:
            throw new Error(`Unknown operator ${operator}`);
    }
}


function calculatorInvestimento(p,i,n,ir) {
 const vb = p*(1+(i/100))**(n/365)
 const a = (vb-((vb-p)*(ir/100)))
 console.log(a)
 return a
}
module.exports.calculator=calculator

module.exports.calculatorInvestimento=calculatorInvestimento