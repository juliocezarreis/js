export class ContaCorrente {
    _saldo = 0

    agencia
    cliente

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }
        return false
    }
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor
            return valor
        }
    }

    transferir(valor, conta) {
        conta.depositar(this.sacar(valor))
    }
}