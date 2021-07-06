// PASSO 1 - Criação de um objeto aluno e PASSO 2 - funções calcularMedia e faltas
let aluno = {
    nome: 'Luiz',
    quantidadeFaltas: 2,
    notas: [9, 8, 8],
    calculoMedia: function () {
        return this.notas.reduce(function (acum, total) {
        return (acum + total);
        }) /this.notas.length;
    },
    faltas: function () {
        return this.quantidadeFaltas = this.quantidadeFaltas + 1;
    }
};

// PASSO 1 - Criação de uma função construtora para alunos

function Aluno(nome, quantidadeFaltas, notas) {
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    this.calculoMedia = function calculoMedia () {
        return this.notas.reduce(function (acum, total) {
            return (acum + total);
        }) /this.notas.length;
    };
    this.faltas = function faltas () {
        return this.quantidadeFaltas = this.quantidadeFaltas + 1;
    };
};

module.exports = {aluno, Aluno};