// Importando objeto e função
const {aluno, Aluno} = require('./Estudantes');

// objeto curso
let curso = {
    nome: 'JavaScript',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudantes: [aluno],
    aprovacaoAluno: function (alunoLetra) {
        if(alunoLetra.calculoMedia() >= this.notaAprovacao && alunoLetra.quantidadeFaltas <= this.faltasMaximas ) {
            return 'Aluno aprovado';
        } else {
            return 'Aluno reprovado';
        }
    },
    aprovacao: function aprovados () {
        let listaAprovados = [];
        for (let i=0; i<this.listaEstudantes.length; i++) {
            if (curso.listaEstudantes[i].quantidadeFaltas <= this.faltasMaximas && curso.listaEstudantes[i].calculoMedia() >= this.notaAprovacao) {
                listaAprovados.push(true);
            } else {
                listaAprovados.push(false);
            }
        }
        return listaAprovados;
    }
};

//                    ('Luiz', 2, [9, 8, 8]); // APROVADO  --------->  É um objeto que foi adicionado em Estudantes.js
let alunoA = new Aluno('Fernanda', 2, [10, 10, 9]); // APROVADO, a príncipio, porém REPROVADO pois foi adicionado uma falta na linha 47
let alunoB = new Aluno('Eduardo', 5, [7, 8, 10]); // REPROVADO por FALTA
let alunoC = new Aluno('Jean', 0, [6, 6, 8]); // REPROVADO por MÉDIA
let alunoD = new Aluno('Lucas', 2, [10, 10, 9]); // REPROVADO

curso.listaEstudantes.push(alunoA, alunoB, alunoC, alunoD);

console.log('Lista de Estudantes:')
console.log(curso.listaEstudantes);
console.log(''); // Usar uma linha pra dar espaço

console.log('Nome do curso:\n'+curso.nome+'\n');
console.log('Faltas máximas do curso:\n'+curso.faltasMaximas+'\n');
console.log('Nota mínima do curso:\n'+curso.notaAprovacao+'\n');

console.log('Aprovação em booleano (ANTES de adicionar uma falta no alunoA):');
console.log(curso.aprovacao());
console.log(''); // Usar uma linha pra dar espaço

console.log('Tudo dentro de alunoA:');
console.log(alunoA);
console.log(''); // Usar uma linha pra dar espaço
console.log('Quantidade de faltas do alunoA:\n' + alunoA.quantidadeFaltas + '\n');
console.log('Adicionando uma falta ao alunoA:\n' + alunoA.faltas() + '\n');
console.log('Quantidade de faltas do alunoA:\n' + alunoA.quantidadeFaltas + '\n');

console.log('Média de notas do alunoA:\n' + alunoA.calculoMedia() + '\n');

console.log('Aprovação em booleano (DEPOIS de adicionar uma falta no alunoA):');
console.log(curso.aprovacao());