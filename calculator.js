


   function getTotalRendimento(obj) {
    var sum = 0;
    for( var el in obj ) {
      
      if( obj.hasOwnProperty( el ) ) {
        if (obj[el]>=0) {
          sum += parseFloat( obj[el] );
          
        }
      }
    }
    return sum;
  }

  function getTotalDeducao (params) {
    var sum = 0;
    for( var el in params ) {
      
      if( params.hasOwnProperty( el ) ) {
        if (params[el]>=0) {
          sum += parseFloat( params[el] );
          
        }
      }
    }
    return sum;
  }


module.exports = {getTotalRendimento,getTotalDeducao }