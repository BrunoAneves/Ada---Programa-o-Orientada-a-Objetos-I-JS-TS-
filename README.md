# Projeto de Agência Bancária em JavaScript

Este é um projeto de agência bancária simples implementado em JavaScript, desenvolvido para fins de estudo. O projeto consiste em três classes principais: `Pessoa`, `Conta`, e `AgenciaBancaria`.

## Classes

### `Pessoa`
- Representa um cliente do banco com atributos: `nome`, `cpf`, e `email`.

### `Conta`
- Representa uma conta bancária com atributos: `cliente` (objeto da classe `Pessoa`), `saldo`, e `numeroConta` (gerado aleatoriamente).
- Métodos para operações como `depositar`, `sacar`, e `transferir`.

### `AgenciaBancaria`
- Gerencia contas através de um array chamado `contas`.
- Métodos incluem `criarConta` para criar uma nova conta com base nas informações do usuário e `atualizaTabela` para atualizar a exibição das contas em uma tabela HTML.

## Utilização

1. **Criar Conta:**
   - Execute `criarConta` para criar uma nova conta, inserindo nome, CPF, e e-mail.

2. **Operações Bancárias:**
   - Contas são exibidas em uma tabela HTML, permitindo depósito, saque, e transferência.

3. **Depósito, Saque e Transferência:**
   - Clique nos botões correspondentes na tabela para realizar as operações desejadas.

## Observações
- Este projeto foi criado para estudo e prática em JavaScript.
- Execute o código em um navegador para interação completa.

##link https://brunoaneves.github.io/Ada-POO-I-Projeto/

**Autor:** [Bruno Araujo Neves]  
**Data:** [13/12/2023]
