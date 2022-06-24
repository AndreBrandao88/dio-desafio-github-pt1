function calculadora(){
    const operacao = Number(prompt ('Escolha uma operação:\n 1 - Soma(+)\n 2 - subtração (-)\n 3 - multiplicação(*) \n 4 - Divisao real(/)\n 5 - Divisão inteira (%)\n 6 - Potenciuacao (*) '));
}

let n1 = Number(prompt('Digite o primeiro número: '));
let n2 = Number(prompt('Digite o segundo número: '));
let resultado;

function soma(){
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
}

if (operacao ==1){
    soma();
} else if (operacao ==2){
    subtracao();
}
else if (operacao ==3){
    multiplicacao();
}
else if (operacao ==4){
    divisao();
}
else if (operacao ==5){
    divisaoInteira();
}
else if (operacao ==6){
    potenciacao();
}

calculadora();


