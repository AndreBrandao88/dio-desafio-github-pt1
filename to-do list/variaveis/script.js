/*
// tipos primitivos

//bolean

var vOuf = true;
console.log(vOuf); //vai exibir o valor da variavel
console.log(typeof(vOuf)); //vai exibir o tipo da variavel pois add o typeof

// string
var nome = 'diana';

console.log(nome);
console.log(typeof(nome));

let variavel2 ='diana';
console.log(variavel2);

const constante = 'ana';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){

    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}


// number
var numroQualquer =1;
consolog.log(typeof(numroQualquer)); 

// adicao
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 1 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 1 * 1;
console.log(multiplicacao);

// divisão real
var divisaoReal = 1 / 1;
console.log(divisaoReal);

// divisão inteira para ver resto da divisao
var divisaoInteira = 1 % 1;
console.log(divisaoInteira);

// operação de potencia
var potencia = 1 ** 1;
console.log(potencia);

// operação maior que 10
var maiorQue10 = 10 > 1;
console.log(maiorQue10);

// operação menor que 10
var menorQue10 = 10 < 1;
console.log(menorQue10);

// operação igual a 10
var igualA10 = 10 == 1;
console.log(igualA10);

// criando array
let array = ['String', 1, true]; 
console.log(array);

let arraydois = ['string', 1, true, ['array1'], ['array2']];
*/
//forEach

array.forEach(function(item, index){console.log (item, index)});

array.pusch('novo item'); //adiciona novo valor ao array no final do array
console.log(array);

array.pop(); // remove o ultimo item 

array.shift (); // remove o primeiro item do array 

array.unshift ('novo item'); // adiciona novo item no inicio do array

console.log(array.indexOf(true)); // retorna o indice do valor true dentro da array 

array.splice(0,3); // remove valores do indice 0 ao 3 

let novoArray = array.splice(0 , 3); // retorna um novo array com os valores removidos
console.log(novoArray);

let object = {string: 'string', number: 1, boolean: true};