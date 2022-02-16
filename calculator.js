


function CalculadoraIR(desc, valorRenddimento) {
 export default function getTotal(params) {
    var total = 0;
    for (var i = 0; i < params.length; i++) {
      total += params[i];
    }
    return total
  }

  return { desc, total }
}


module.exports.CalculadoraIR = CalculadoraIR