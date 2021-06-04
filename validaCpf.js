const cpf = prompt("")
const numerosCpf = new Array()
let valida1 = false
let valida2 = false

function numerosNoVetor() {
    let cont = 0
    for (let i = 0; i < cpf.length; i++) {
        if (cpf[i] != "." && cpf[i] != "-") {
            numerosCpf[cont] = cpf[i]
            cont++
        }
    }
}

function validacao(n) {
    let cont2 = 0
    let soma = 0
    for (let i = n; i >= 2; i--) {
        numerosCpf[cont2] *= i
        soma += numerosCpf[cont2]
        cont2++
    }
    return soma * 10 % 11
}

numerosNoVetor()
if (validacao(10) == numerosCpf[9]) valida1 = true

numerosNoVetor()
if (validacao(11) == numerosCpf[10]) valida2 = true

if (valida1 && valida2) console.log("VALIDO")
else console.log("INVALIDO!")