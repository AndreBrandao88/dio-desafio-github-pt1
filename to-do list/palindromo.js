function verificarPalindromo(string){

    if(!string) return;

    return string.split("").reverse().join("") === string;

  
}

//console.log(verificarPalindromo("adeus"));


function verificarPalindromo2(string){

    if (!string) return "Digite uma palavra valida";

    for (let i = 0; i < string.lenght / 2; i++){
        if (string[i] != string.lenght -1 -i){
            return false;
        }
    }

    return true;

}


console.log(verificarPalindromo2("ava"));


