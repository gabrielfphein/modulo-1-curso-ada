/*
    Você foi convidado para desenvolver um script para realizar os sorteios para uma  casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)
*/
function gerarDezena() {
    
    return Math.round(Math.random() * 59) + 1;
}

function realizarSorteio() {
    let dezenas = [];

    while (dezenas.length < 6) {
        let dezena = gerarDezena();

       
        if (dezenas.indexOf(dezena) === -1) {
            dezenas.push(dezena);
        }
    }

    return dezenas;
}


const resultado = realizarSorteio();
console.log("Números sorteados:", resultado);
