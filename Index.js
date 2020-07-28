// Criar um programa que calcula a média
// das turmas e  envia
// mensagem do cálculo da média.

const alunosDaTurmaA = [
    {
        nome: "Mayk",
        nota: 10
    },

    {
        nome: "Diego",
        nota: 10
    },

    { 
        nome: "Fulano",
        nota: 8
    },
    { 
        nome: "Mais um aluno",
        nota: 1
    }

]


const alunosDaTurmaB = [
    {
        nome: "Cleiton",
        nota: 1.8
    },

    {
        nome: "Robson",
        nota: 10
    },

    { 
        nome: "Siclano",
        nota: 0
    },
    { 
        nome: "Novo Aluno",
        nota: 0
    }
]


function calculaMedia(alunos){
    let soma = 0;
    for(let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

function enviaMensagem(media, turma){
    //Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
       console.log(`A média da ${turma} foi de ${media}. Parabéns`)
    } else {
       console.log(`A média da turma ${turma} foi menor que 5`)
    }
    
}


const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

