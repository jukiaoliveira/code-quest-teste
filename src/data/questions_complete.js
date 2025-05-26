const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
      {
        question:
          "Qual tag é usada para inserir uma imagem em uma página HTML?",
        options: ["<img>", "<figure>", "<media>", "<picture>"],
        answer: "<img>",
        tip: "É uma tag de três letras, usada sozinha (self-closing).",
      },
      {
        question:
          "Qual atributo define o texto alternativo exibido se a imagem não carregar?",
        options: ["src", "alt", "title", "label"],
        answer: "alt",
        tip: "É um atributo de três letras.",
      },
      {
        question: "Qual tag representa o título principal da página?",
        options: ["<title>", "<h1>", "<header>", "<head>"],
        answer: "<h1>",
        tip: "É a primeira e mais importante entre as tags de títulos.",
      },
      {
        question:
          "Qual elemento HTML é utilizado para criar uma quebra de linha?",
        options: ["<lb>", "<br>", "<break>", "<nl>"],
        answer: "<br>",
        tip: "É uma tag de duas letras.",
      },
      {
        question:
          "Qual destas tags é usada para agrupar elementos em um bloco, sem significado semântico?",
        options: ["<span>", "<section>", "<div>", "<footer>"],
        answer: "<div>",
        tip: "É uma tag muito utilizada para estruturar layouts.",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
      {
        question:
          "Qual propriedade centraliza um elemento horizontalmente com margin?",
        options: [
          "margin: 0 auto;",
          "text-align: center;",
          "align-items: center;",
          "justify-content: center;",
        ],
        answer: "margin: 0 auto;",
        tip: "É uma combinação de valores para a propriedade margin.",
      },
      {
        question: "Qual seletor seleciona todos os elementos de uma página?",
        options: ["*", ".all", "#all", "body"],
        answer: "*",
        tip: "É um caractere especial.",
      },
      {
        question: "Qual propriedade altera a cor de fundo de um elemento?",
        options: ["color", "background", "background-color", "border-color"],
        answer: "background-color",
        tip: "O nome já indica que é para cor de fundo.",
      },
      {
        question:
          "Como aplicar um estilo somente quando o mouse está sobre um elemento?",
        options: [":hover", ":active", ":focus", ":checked"],
        answer: ":hover",
        tip: "É um pseudo-classe usado para interações de mouse.",
      },
      {
        question:
          "Qual unidade relativa depende do tamanho da fonte do elemento?",
        options: ["px", "em", "%", "vh"],
        answer: "em",
        tip: "É uma unidade relativa ao elemento pai.",
      },
      {
        question:
          "Qual propriedade define a espessura da borda de um elemento?",
        options: ["border-style", "border-width", "outline", "padding"],
        answer: "border-width",
        tip: "É a largura da borda.",
      },
      {
        question:
          "Qual valor da propriedade `display` organiza elementos em linha?",
        options: ["block", "inline", "flex", "grid"],
        answer: "inline",
        tip: "É o oposto de `block`.",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
      {
        question: "O que o método `parseInt()` faz em JavaScript?",
        options: [
          "Converte uma string em um número inteiro",
          "Adiciona dois números",
          "Transforma um número em string",
          "Remove espaços em branco de uma string",
        ],
        answer: "Converte uma string em um número inteiro",
      },
      {
        question:
          "Qual palavra-chave é usada para criar uma função em JavaScript?",
        options: ["func", "def", "function", "lambda"],
        answer: "function",
      },
      {
        question:
          "Qual destas estruturas é usada para repetição (loop) em JavaScript?",
        options: ["if", "switch", "while", "case"],
        answer: "while",
      },
      {
        question: "O que o operador `===` verifica em JavaScript?",
        options: [
          "Igualdade de valor e tipo",
          "Apenas igualdade de valor",
          "Diferença entre dois valores",
          "Se um valor é maior que o outro",
        ],
        answer: "Igualdade de valor e tipo",
      },
      {
        question: "Qual dos seguintes não é um tipo primitivo em JavaScript?",
        options: ["undefined", "object", "number", "string"],
        answer: "object",
      },
    ],
  },
];

export default data;
