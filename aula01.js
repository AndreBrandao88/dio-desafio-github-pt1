/*var preco = 2;
var qtd = 5;
var total = preco * qtd;
print ("Total: " + total); */

/*function soma(a, b){  // função soma

    return a + b;
}

soma(10,20); // chamada da função soma
*/

//console.log ("Hello world");

function returnEvenValues (array){
    let evenNums = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            evenNums.push(array[i]);
        }
    }

    console.log (evenNums);
}

let array = ['Os numeros pares são:' ,1,2,3,4,5,6,7,8,9,10];

returnEvenValues (array);
