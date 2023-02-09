const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

const elementoChute = document.getElementById('chute')

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    const chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaChute(chute)  
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
             <div>Voce disse:</div>
             <span class="box">${chute}</span>
            `
}


recognition.addEventListener('end', () => recognition.start())


