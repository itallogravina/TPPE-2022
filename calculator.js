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
  if (p<=i) {
    return  {alicota:"0%",imposto: 0}
  }
  else if( (p>i) && (p<=2826.65)){
    const temp = parseFloat(((p-i)*0.075).toFixed(4))
    return  {alicota:"7,5%",imposto: temp}
  }
  else if( p>2826.65 && p<= 3751.05 ){
    const temp = parseFloat(((p-i-922.67)*0.15).toFixed(4))
    return  {alicota:"15%",imposto: temp}
  }
  else if (p>3751.05 && p<= 4664.68){
    const temp = parseFloat(((p-i-922.67-924.40)*0.225).toFixed(4))
    return  {alicota:"22,5%",imposto: temp}
  }
  if(p>4664.68 ){
    const temp = parseFloat(((p-i-922.67-924.40-913.63)*0.275).toFixed(4))
    return  {alicota:"27,5%",imposto: temp}
  }
  
}

function CalculandoAlicota(rend ,previdencia, dependentes,pensao) {
  const baseCalculo= getBasedeCalculo(rend ,previdencia, dependentes,pensao)
  const a =Imposto(baseCalculo)
  const b =a.imposto/baseCalculo
  return b
}

module.exports = {
  getTotalRendimento,
  getTotalDeducao,
  getTotalDependentes,
  getTotalPensao,
  getSomatoriaDeducao,
  getBasedeCalculo,
  Imposto,
  CalculandoAlicota
};
