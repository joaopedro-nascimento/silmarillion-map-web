const ANO_MIN = 1;
const ANO_MAX = 590;
const PX_POR_ANO = 5;

const eventos = {
    lammoth : {
        nome : "Batalha de Lammoth",
        ano : 1,
        resumo : "Logo após Fingolfin e seu exército chegarem à Terra-média, foi travada uma batalha em Lammoth contra os Orcs da região.",
        descricao : "",
        lugares: ["hithlum"],
        personagens: ["fingolfin"]
    },

    bragollach: {
        nome : "Dagor Bragollach",
        ano : 455,
        resumo : '"A Batalha das Chamas Repentinas", quarta das grandes batalhas das Guerras de Beleriand.',
        descricao : "",
        lugares : ["hithlum", "himring", "gondolin"],
        personagens : ["fingolfin"]
    },

    nirnaeth: {
        nome : "Nirnaeth Arnoediad",
        ano : 472,
        resumo : '"Lágrimas Inumeráveis", o nome dado à ruinosa quinta batalha das Guerras de Beleriand.',
        descricao : "",
        lugares : ["dorlómin", "hithlum", "gondolin"],
        personagens: []
    },

    quedanargothrond : {
        nome : "Saque de Nargothrond",
        ano : 495,
        resumo : "A grande fortaleza subterrânea do Rio Narog fundada por Finrod Felagund é destruída por Glaurung.",
        descricao : "",
        lugares : ["nargothrond", ],
        personagens : ["turin"]
    },

    quedagondolin: {
        nome: "A queda de Gondolin",
        ano: 511,
        resumo: "Morgoth descobre o refúgio secreto de Turgon e lança sobre Gondolin Orques, Balrogs e dragões. A cidade oculta é destruída.",
        descricao: "",
        lugares: ["gondolin"],
        personagens: []
    }
};

const eventosOrdenados = Object.entries(eventos)
    .map(([id, e]) => ({ id, ...e }))
    .sort((a, b) => a.ano - b.ano);

const timelineEl = document.createElement("section");
timelineEl.id = "timeline";
timelineEl.className = "timeline";
timelineEl.innerHTML = `
    <div id="tl-cartao" class="tl-cartao" role="dialog" aria-label="Evento">
        <button class="tl-cartao-fechar" title="Fechar">✕</button>
        <div class="tl-cartao-imagem" hidden></div>
        <h2 class="tl-cartao-nome"></h2>
        <p class="tl-cartao-ano"></p>
        <p class="tl-cartao-texto">
            <span class="tl-cartao-resumo"></span>
            <a href="#" class="tl-cartao-mais">Mais…</a>
        </p>
    </div>
    <div class="tl-indicador">
        <button class="tl-seta tl-seta-anterior" title="Evento anterior">‹</button>
        <span class="tl-indicador-ano" id="tl-ano-atual">${ANO_MIN}</span>
        <button class="tl-seta tl-seta-proximo" title="Próximo evento">›</button>
    </div>
    <div class="tl-trilho" id="tl-trilho">
        <div class="tl-conteudo" id="tl-conteudo"></div>
    </div>
`;
document.body.appendChild(timelineEl);

const trilho     = document.getElementById("tl-trilho");
const conteudo   = document.getElementById("tl-conteudo");
const rotuloAno  = document.getElementById("tl-ano-atual");
const cartao     = document.getElementById("tl-cartao");

let eventoAtivo = null;
let temporizadorCartao = null;