// Seleciona os elementos HTML que serão manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de objeto contendo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Na maquiagem, o que é Primer?",
        alternativas: [
            "É um item que serve para preparar a pele para a maquiagem.",
            "É um item que serve para deixar a pele com um tom uniformizado."
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "O modernismo teve como marco inicial a Semana de Arte Moderna, que se realizou entre os dias 11 e 18 de fevereiro de 1922, em qual teatro?",
        alternativas: [
            "Teatro municipal do Rio de Janeiro",
            "Teatro municipal de São Paulo"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual exercício é o específico para o desenvolvimento dos músculos do braço, especialmente o bíceps?",
        alternativas: [
            "Remada alta cross",
            "Rosca scott"
        ],
        correta: 1
    },
    {
        enunciado: "Qual órgão pertence ao sistema respiratório e digestivo, simultaneamente?",
        alternativas: [
            "Faringe",
            "Traqueia"
        ],
        correta: 0
    },
    {
        enunciado: "Qual é a única grande metrópole nacional brasileira?",
        alternativas: [
            "São Paulo",
            "Santa Catarina"
        ],
        correta: 0
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0;

// FUNÇÃO MOSTRAR PERGUNTAS
function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa; // Define o texto do botão como a alternativa
        botao.addEventListener("click", () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// FUNÇÃO VERIFICAR RESPOSTA
function verificaResposta(selecionada) {
    if (selecionada === perguntaAtual.correta) {
        pontuacao++;
    }
    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    // Esconde a caixa de perguntas
    caixaPrincipal.style.display = "none";
    // Mostra a caixa de resultado
    caixaResultado.style.display = "block";

    setTimeout(() => caixaResultado.classList.add("mostrar"), 10);
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

    // Criar botão de reiniciar
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar";

    // Adiciona um evento de click ao botão de reiniciar
    botaoReiniciar.addEventListener("click", () => {
        atual = 0;
        pontuacao = 0;
        caixaResultado.classList.remove("mostrar");
        caixaResultado.style.display = "none";
        caixaPrincipal.style.display = "block";
        mostrarPergunta();
    });

    caixaResultado.innerHTML = "";
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicia o quiz
mostrarPergunta();
