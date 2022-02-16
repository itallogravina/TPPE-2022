


   function getTotal(obj) {
    var sum = 0;
    for( var el in obj ) {
      if( obj.hasOwnProperty( el ) ) {
        sum += parseFloat( obj[el] );
      }
    }
    return sum;
  }
function CalculadoraIR(desc, valorRenddimento) {
  return { desc, valorRenddimento }
}


module.exports = {CalculadoraIR,getTotal }