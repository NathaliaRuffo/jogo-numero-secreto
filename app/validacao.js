function verificaSeOChutePossuiUmValorValido (chute) {
    const numero = +chute //convertendo o número para inteiro

    if (chuteForInvalido(numero)) { 
        elementoChute.innerHTML += '<div>Valor Inválido</div>' //para exibir a mensagem na tela
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido (numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`//para exibir a mensagem na tela
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div> O número secreto é menor <i class="fa-sharp-duotone fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div> O número secreto é maior <i class="fa-sharp-duotone fa-solid fa-arrow-up"></i></div>
        `
    }}

function chuteForInvalido(numero) {
    return Number.isNaN(numero) //verificando se o valor passado é um número
}

function numeroForMaiorOuMenorQueOValorPermitido (numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id ==='jogar-novamente') {
        window.location.reload()
    }
})