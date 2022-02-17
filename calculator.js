function getTotalRendimento(obj) {
  var sum = 0;
  for (var el in obj) {
    if (obj.hasOwnProperty(el)) {
      if (obj[el] >= 0) {
        sum += parseFloat(obj[el]);
      } else {
        return null;
      }
    }
  }
  return sum;
}

function getTotalDeducao(params) {
  var sum = 0;
  for (var el in params) {
    if (params.hasOwnProperty(el)) {
      if (params[el] >= 0) {
        sum += parseFloat(params[el]);
      } else {
        return null;
      }
    }
  }
  return sum;
}

function getTotalDependentes(params) {
  if (params >= 0) {
    return params * 189.59;
  }
  return null;
}

function getTotalPensao(params) {
  var sum = 0;
  for (var el in params) {
    if (params.hasOwnProperty(el)) {
      if (params[el] >= 0) {
        sum += parseFloat(params[el]);
      } else {
        return null;
      }
    }
  }

  return sum;
}

function getSomatoriaDeducao(previdencia, dependentes,pensao) {
  const sum = getTotalDeducao(previdencia) + getTotalDependentes(dependentes) + getTotalPensao(pensao)
  var fixedNum = parseFloat(sum.toFixed( 2 ));

  return fixedNum;
}

function getBasedeCalculo(rend ,previdencia, dependentes,pensao) {
  const sum = getTotalRendimento(rend)-getSomatoriaDeducao(previdencia, dependentes,pensao) 
  var fixedNum = parseFloat(sum.toFixed( 2 ));

  return fixedNum;
}

function Imposto(p) {
  const i = 1903.98

  console.log(i,p)
  if (p<=i) {
    return 0
  }
  else if( (p>i) && (p<=2826.65)){
    return Matp-i.toFixed(2)
  }
  else if( p>2826.65 && p<= 3751.05 ){
    return round(p-i-922.67, 2) 
  }
  else if (p>3751.05 && p<= 4664.68){
    return round(p-i-922.67-924.40, 2) 
  }
  if(p>4664.68 ){

    return round(p-i-922.67-924.40-913.63,2)
  }
  
}

module.exports = {
  getTotalRendimento,
  getTotalDeducao,
  getTotalDependentes,
  getTotalPensao,
  getSomatoriaDeducao,
  getBasedeCalculo,
  Imposto
};
