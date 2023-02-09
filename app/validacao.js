function verificaChute(chute){
    const numero = +chute

    if(chuteInvalido(numero) || chuteExcedente(numero)){
        elementoChute.innerHTML += '<div>valor invalido</div>'
    }

    else if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Voce acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML = `
             <div>Voce disse:</div>
             <span class="box">${chute}</span>
             <div>O numero secreto eh menor <i class="fa-solid fa-down-long"></i></div>
            `
    }else{
        elementoChute.innerHTML = `
             <div>Voce disse:</div>
             <span class="box">${chute}</span>
             <div>O numero secreto eh maior <i class="fa-solid fa-up-long"></i></div>
            `
    }

}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function chuteExcedente(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})

