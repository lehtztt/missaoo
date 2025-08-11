const caixaPrincipal = document.querySelector(".caixa-pricipal");

const caixaPerguntas = document.querySelector(".caixa-pricipal");

const caixaAlternativas = document.querySelector(".caixa-pricipal");

const caixaResultado = document.querySelector(".caixa-pricipal");

const caixaResultado = document.querySelector(".caixa-pricipal");

const lista = [];
const perguntas [
    {
        enunciado: "Perguntas 1"
    Alternativa: ["Alternativa 1","Alternativa 2"]
}

  {
        enunciado: "Perguntas 2"
    Alternativa: ["Alternativa 1","Alternativa 2"]
}

  {
        enunciado: "Perguntas 3"
    Alternativa: ["Alternativa 1","Alternativa 2"]
}

  {
        enunciado: "Perguntas 4"
    Alternativa: ["Alternativa 1","Alternativa 2"]
}

  {
        enunciado: "Perguntas 5"
    Alternativa: ["Alternativa 1","Alternativa 2"]
}

];

let atual = 0
let perguntaAtual;

Function mostraPerguntas{
    perguntasAtual = pergunta(atual);
    caixaPerguntas.textContent = peerguntaAtual.enunciado;

}

mostraPerguntas();