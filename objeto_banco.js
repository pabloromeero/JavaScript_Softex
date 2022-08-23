let banco = {
    conta: "00000-0",
    saldo: 100,
    tipodeconta: "Conta-corrente",
    agência: 0001,
    consultar: function() {
        console.log(`Olá, seu saldo é de R$ ${this.saldo}`);
    },
    deposito: function(saldo, dinheiro) {
        return saldo + dinheiro;
    },
    saque: function (saldo, dinheiro) {
        return saldo - dinheiro;
    },
    numero: function(){
        return conta
    }
    }
