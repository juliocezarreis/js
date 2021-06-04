import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente()
cliente1.nome = "Paula Tejando"
cliente1._cpf = "98308077856"

const conta1 = new ContaCorrente()
conta1.agencia = 1001
conta1.cliente = cliente1

console.log(cliente1)
console.log(conta1)