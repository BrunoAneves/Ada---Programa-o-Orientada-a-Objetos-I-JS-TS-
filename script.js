



class Pessoa {
    constructor(nome, cpf, email) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }
}

class Conta {
    constructor(cliente) {
        this.cliente = cliente
        this.saldo = 0
        this.numeroConta = Math.floor(Math.random() * 10000) + 1
    }

    depositar(valor) {

        if (isNaN(valor)) {
            console.log('Não é um valor válido!')
            alert('Não é um valor válido!')
            agencia.atualizaTabela();
        } else {
            this.saldo += valor
            console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`)
            alert(`A conta de número ${this.numeroConta} foi creditada com um depósito de R$${valor}, resultando em um novo saldo de R$${this.saldo.toFixed(2)}`)

            agencia.atualizaTabela();
        }

    };

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
            alert("Saldo insuficiente.")
        } else {
            this.saldo -= valor
            console.log(
                `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`
            );
            alert(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`)
            agencia.atualizaTabela();
        }
    }


    transferir(destino, valor) {

        if (!destino || isNaN(valor) || valor <= 0) {
            console.log("Transferência inválida.")
            alert("Transferência inválida.")


        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para transferência.");
            alert("Saldo insuficiente para transferência.");
        } else {
            this.saldo -= valor
            destino.depositar(valor)
            console.log(`Transferência de R$${valor} realizada. Novo saldo: R$${this.saldo.toFixed(2)}`);
            alert(`Transferência de R$${valor} realizada. Novo saldo: R$${this.saldo.toFixed(2)}`);
            agencia.atualizaTabela();
        }
    }

}



class AgenciaBancaria {
    constructor() {
        this.contas = []

    }

    criarConta() {


        const nome = prompt("Digite o nome do cliente:")
        const cpf = prompt("Digite o CPF do cliente:");
        const email = prompt("Digite o email do cliente:");


        const cliente = new Pessoa(nome, cpf, email)
        console.log(cliente)
        const conta = new Conta(cliente)
        console.log(conta)

        this.contas.push(conta)
        this.atualizaTabela()
    }

    atualizaTabela() {
        const contasDiv = document.getElementById('contas');
        contasDiv.innerHTML = "";

        this.contas.forEach((conta) => {
            const table = document.createElement('table')
            table.innerHTML = `
            <tr>
              <th>Cliente</th>
              <th>Número da Conta</th>
              <th>Saldo</th>
              <th>Ações</th>
            </tr>
            <tr>
              <td>${conta.cliente.nome}</td>
              <td>${conta.numeroConta}</td>
              <td>R$${conta.saldo.toFixed(2)}</td>
              <td>
                <button onclick="agencia.depositar(${conta.numeroConta})">Depositar</button>
                <button onclick="agencia.sacar(${conta.numeroConta})">Sacar</button>
                <button onclick="agencia.transferir(${conta.numeroConta})">Transferir</button>
              </td>
            </tr>
          `;

            contasDiv.appendChild(table)


        })
    }




    depositar(numeroConta) {
        const valor = parseInt(prompt("Digite o valor a ser depositado:"))
        const conta = this.encontrarConta(numeroConta);
        if (conta) {
            conta.depositar(valor);
        }
    }

    sacar(numeroConta) {
        const valor = parseFloat(prompt("Digite o valor a ser sacado:"));
        const conta = this.encontrarConta(numeroConta);
        if (conta) {
            conta.sacar(valor);
        }
    }

    transferir(numeroConta) {
        const contaOrigem = this.encontrarConta(numeroConta);
        if (contaOrigem) {
            const numeroDestinatario = parseInt(prompt("Digite o número da conta destinatária:"));
            const valor = parseFloat(prompt("Digite o valor a ser transferido:"));
            const contaDestino = this.encontrarConta(numeroDestinatario);
            if (contaDestino) {
                contaOrigem.transferir(contaDestino, valor);
            } else {
                alert('Conta ou Valor inválido!')
            }
        }
    }

    encontrarConta(numeroConta) {
        return this.contas.find(conta => conta.numeroConta === numeroConta);
    }




}






const agencia = new AgenciaBancaria();
agencia.atualizaTabela();
