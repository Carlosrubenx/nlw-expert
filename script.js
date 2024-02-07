const perguntas = [
    {
        pergunta: "Quais são os três principais tipos de seletores em CSS?",
        respostas: [
            "Seletor de Tag, Seletor de Classe, Seletor de ID",
            "Seletor de Elemento, Seletor de Pseudo-classe, Seletor de Combinador",
            "Seletor de Atributo, Seletor Universal, Seletor Adjacente"
        ],
        correta: 0
    },
    {
        pergunta: "O que o atributo 'display' controla em CSS?",
        respostas: [
            "A cor do texto",
            "A posição do elemento",
            "O modo de exibição do elemento"
        ],
        correta: 2
    },
    {
        pergunta: "O que significa a sigla 'CSS'?",
        respostas: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets"
        ],
        correta: 1
    },
    {
        pergunta: "Qual propriedade é usada para definir a cor do texto em CSS?",
        respostas: [
            "background-color",
            "text-color",
            "color"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a sintaxe correta para aplicar uma borda vermelha de 2px de largura a um elemento em CSS?",
        respostas: [
            "border: solid red 2px;",
            "border-width: 2px; border-style: solid; border-color: red;",
            "border: 2px solid red;"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do seletor 'nth-child' em CSS?",
        respostas: [
            "Selecionar o primeiro elemento de um tipo específico",
            "Selecionar um elemento que é o último filho de seu pai",
            "Selecionar um elemento com base em sua posição em relação aos irmãos"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a propriedade usada para alterar o tamanho da fonte em CSS?",
        respostas: [
            "font-size",
            "text-size",
            "size"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função da propriedade 'position' em CSS?",
        respostas: [
            "Controlar a posição de fundo de um elemento",
            "Controlar a posição de um elemento em relação a seu pai",
            "Controlar a ordem de exibição dos elementos"
        ],
        correta: 1
    },
    {
        pergunta: "O que a propriedade 'float' faz em CSS?",
        respostas: [
            "Torna um elemento flutuante no ar",
            "Define como um elemento deve ser posicionado em relação ao conteúdo ao seu redor",
            "Define a direção do texto dentro de um elemento"
        ],
        correta: 1
    },
    {
        pergunta: "Como se seleciona todos os elementos <p> com a classe 'destaque' em CSS?",
        respostas: [
            "p.destaque",
            ".destaque p",
            "p .destaque"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

for(const item of perguntas) {


    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta);

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
        }

        quizItem.querySelector('dl').appendChild(dt);
    }

    // Remove a resposta padrão que está no HTML
    quizItem.querySelector('dl dt').remove();

    // Coloca a pergunta na tela
    quiz.appendChild(quizItem);
}