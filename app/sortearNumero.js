const maiorValor = parseInt(Math.random() * 1001)
const menorValor = parseInt(Math.random() * (maiorValor - 1))
const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * ((maiorValor + 1) - menorValor) + menorValor)
}

console.log('Numero secreto:', numeroSecreto)

const elementoMaiorValor = document.getElementById('maior-valor')
const elementoMenorValor = document.getElementById('menor-valor')

elementoMaiorValor.innerHTML = maiorValor
elementoMenorValor.innerHTML = menorValor

