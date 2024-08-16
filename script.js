// Seleciona os elementos HTML que manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

//Arry de objeto contendo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Em relação a maquiagem, o que é Primer?",
        alternativas: [
            "é um item que serve para preparar a pele para a maquiagem",
            "é um item que serve para deixar a pele com um tom uniformiado"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "O Modernimo teve como marco inicial a Semana da Arte Moderna, que se realizou entre os dias 11 e 18 de fevereiro de 1922, em qual teatro?",
        alternativas: [
            "teatro municipal do Rio de Janeiro",
            "teatro municipal de São Paulo"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual exercício é o específico para o desenvolvimento dos músculos do braço, especificamente o bíceps?",
        alternativas: [
            "rosca scott",
            "remada alta cross"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Qual órgão pertence ao sistema respiratório e digestivo, simultaneamente?",
        alternativas: [
            "traqueia",
            "faringe"
        ],
        correta: 1 // A segunda alternativa é a correta 
    },
    {
        enunciado: "Qual é a única grande metrópole nacional brasileira?",
        alternativas: [
            "são paulo",
            "santa catarina"
        ],
        correta: 0 // A segunda alternativa é a correta 
    }
];

// inicializa o índice da pergunta atual e a pontuação

let atual = 0;
let perguntaAtual;
let pontuacao = 0; // Inicie a pontuação em 0