function calculoMod() {
    let atributo = document.querySelectorAll('.atributo-valor')

    atributo.forEach(element => {
        let span = element.nextElementSibling

        let valor = parseInt(element.value) || 0

        let mod = Math.round(valor - 10) / 2

        span.innerHTML = mod >= 0 ? `+${mod}` : mod
    })
}

//Essa função esta verificando se algo esta sendo digitado nos inputs da classe atributo-valor
document.querySelectorAll('.atributo-valor').forEach(input => {
    input.addEventListener('input', calculoMod)

})

