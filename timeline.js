const ANO_MIN = 1;
const ANO_MAX = 590;
const PX_POR_ANO = 5;
const ICONE_LIVRO = `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19.5A2 2 0 0 1 6 18h13"/></svg>`;

function htmlFonte(ev) {
    if (!ev || !ev.livro) return "";
    const cap = ev.capitulo ? ` ${ev.capitulo}` : "";
    return `<span class="fonte-item">${ICONE_LIVRO}<em>${ev.livro}</em>${cap}</span>`;
}

const eventos = {
    nascerdosol : {
        nome : "O Primeiro Nascer do Sol",
        ano : 1,
        resumo : "A luz do Sol revela Beleriand, e os Homens despertam em Hildórien.",
        descricao : "",
        imagem : "",
        livro : "O Silmarillion",
        capitulo : "Quenta Silmarillion, cap. 12",
        lugares : [""],
        personagens : [""]
    },
    bragollach: {
        nome : "Dagor Bragollach",
        ano : 455,
        resumo : '"A Batalha das Chamas Repentinas", quarta das grandes batalhas das Guerras de Beleriand.',
        descricao : "",
        imagem : "bragollach.jpg",
        livro : "O Silmarillion",
        capitulo : "Quenta Silmarillion, cap. 18",
        lugares : ["ardgalen", "thangorodrim", "angband", "dorthonion", "eredwethrin", "hithlum", "eithelsirion", "passodosirion", "pantanodeserech", "himring", "lothlann", "rerir", "thargelion", "passodoaglon"],
        personagens : ["fingolfin", "morgoth", "glaurung", "angrod", "aegnor", "finrod", "fingon", "turgon", "gilgalad", "maedhros", "maglor", "celegorm", "curufin", "caranthir", "amrod", "amras", "bregolas", "barahir", "hador", "gundor", "galdor", "thorondor"]
    },
    nirnaeth: {
        nome : "Nirnaeth Arnoediad",
        ano : 472,
        resumo : '"Lágrimas Inumeráveis", a ruinosa quinta batalha das Guerras de Beleriand.',
        descricao : "",
        imagem : "",
        livro : "O Silmarillion",
        capitulo : "Quenta Silmarillion, cap. 20",
        lugares : ["eithelsirion", "baradeithel", "dorthonion", "anfauglith", "angband", "pantanodeserech", "montedolmed", "haudhen-Ndengin"],
        personagens: ["fingon", "turgon", "maedhros", "maglor", "gwindor", "gelmir", "ecthelion", "glorfindel", "mablung", "beleg", "hurin", "huor", "haldir", "elfang", "azaghâl", "morgoth", "gothmog", "glaurung"]
    },
    tuornasce : {
        nome : "Tuor nasce",
        ano : 472,
        resumo : "",
        descricao : "Tuor nasceu de sua mãe Rían e seu pai Huor e cresceu em Androth.",
        imagem : "tuor.jpeg",
        livro : "O Silmarillion",
        capitulo : "Quenta Silmarillion, cap. 21",
        lugares : ["mithrim"],
        personagens : ["tuor"]
    },
    quedanargothrond : {
        nome : "Saque de Nargothrond",
        ano : 495,
        resumo : "A grande fortaleza subterrânea do Rio Narog é destruída por Glaurung.",
        descricao : "",
        imagem : "",
        livro : "Os Filhos de Húrin",
        capitulo : "cap. 11",
        lugares : ["nargothrond"],
        personagens : ["turin", "orodreth", "gelmir", "arminas", "gwindor", "finduilas", "glaurung"]
    },
    tuorevoronwe : {
        nome : "Encontro de Tuor e Voronwë",
        ano : 495,
        resumo : "Após a tempestade em Vinyamar, Tuor encontra Voronwë que aceita guiá-lo a Gondolin.",
        descricao : "",
        imagem : "tuor_e_voronwe.jpeg",
        credito : "tintalles",
        creditoLink : "https://x.com/tintalles",
        livro : "A Queda de Gondolin",
        capitulo : "A Última Versão",
        lugares : ["vinyamar", "nevrast"],
        personagens : ["tuor", "voronwe", "ulmo"]
    },
    maglorelrondelros: {
        nome: "Cativeiro de Elros e Elrond",
        ano: 538,
        resumo: "Maglor mantém Elros e Elrond em cativeiro.",
        descricao: "Capturados após o saque das Fozes do Sirion, Elrond e Elros foram poupados da morte. Cansado do fardo de seu juramento, Maglor sentiu piedade dos gêmeos, acolhendo-os e criando-os com um afeto inesperado.",
        imagem : "maglorelrondelros.jpg",
        credito : "tintalles",
        creditoLink : "https://x.com/tintalles",
        livro : "O Silmarillion",
        capitulo : "Quenta Silmarillion, cap. 24 ",
        lugares: ["amonereb"],
        personagens: ["maglor", "elrond", "elros"]
    },
    quedagondolin: {
        nome: "A queda de Gondolin",
        ano: 511,
        resumo: "A cidade oculta é destruída.",
        descricao: "",
        imagem : "",
        livro : "A Queda de Gondolin",
        lugares: ["gondolin"],
        personagens: ["turgon", "idril", "tuor", "earendil", "voronwe", "meleth", "hendor", "ecthelion", "glorfindel", "legolasverdefolha", "thorondor", "maeglin", "morgoth", "gothmog"]
    },
    dagoraglareb: {
        nome: "Dagor Aglareb",
        ano: 60,
        resumo: "",
        descricao: "",
        imagem : "dagoraglareb.webp",
        livro : "O Silmarillion",
        capitulo : "Quenta Silmarillion, cap. 13",
        lugares : ["angband", "ardgalen", "dorthonion", "passodosirion", "montanhasazuis"],
        personagens : ["morgoth", "fingolfin", "maedhros", "maglor"]
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
        <button type="button" class="tl-cartao-fechar" title="Fechar">✕</button>
        <div class="tl-cartao-imagem" hidden></div>
        <h2 class="tl-cartao-nome"></h2>
        <p class="tl-cartao-ano"></p>
        <p class="tl-cartao-texto">
            <span class="tl-cartao-resumo"></span>
            <a href="#" class="tl-cartao-mais">Mais…</a>
        </p>
        <div class="tl-cartao-nav" hidden>
            <button type="button" class="tl-cartao-seta tl-cartao-anterior" title="Evento anterior do mesmo ano">‹</button>
            <span class="tl-cartao-contador"></span>
            <button type="button" class="tl-cartao-seta tl-cartao-proximo" title="Próximo evento do mesmo ano">›</button>
        </div>
    </div>
    <div class="tl-indicador">
        <button type="button" class="tl-seta tl-seta-anterior" title="Evento anterior">‹</button>
        <span class="tl-indicador-ano" id="tl-ano-atual">${ANO_MIN}</span>
        <button type="button" class="tl-seta tl-seta-proximo" title="Próximo evento">›</button>
    </div>
    <div class="tl-trilho" id="tl-trilho">
        <div class="tl-conteudo" id="tl-conteudo"></div>
    </div>
`;
document.body.appendChild(timelineEl);

const trilho    = document.getElementById("tl-trilho");
const conteudo  = document.getElementById("tl-conteudo");
const rotuloAno = document.getElementById("tl-ano-atual");
const cartao    = document.getElementById("tl-cartao");

let eventoAtivo = null;
let eventosDoAnoAtual = [];
let indiceNoAno = 0;
let temporizadorCartao = null;

function obterEventosDoAno(ano) {
    return eventosOrdenados.filter(e => e.ano === ano);
}

function eventoAtualDoCartao() {
    return eventosDoAnoAtual[indiceNoAno] || eventoAtivo;
}

function atualizarNavegacaoAno() {
    const nav = cartao.querySelector(".tl-cartao-nav");
    const contador = cartao.querySelector(".tl-cartao-contador");

    if (eventosDoAnoAtual.length > 1) {
        contador.textContent = `${indiceNoAno + 1} / ${eventosDoAnoAtual.length}`;
        nav.hidden = false;
    } else {
        nav.hidden = true;
    }
}

function criar(classe, tag = "div") {
    const el = document.createElement(tag);
    el.className = classe;
    return el;
}

function montarEscala() {
    const metade = trilho.clientWidth / 2;
    const largura = (ANO_MAX - ANO_MIN) * PX_POR_ANO;
    const x = ano => metade + (ano - ANO_MIN) * PX_POR_ANO;

    conteudo.innerHTML = "";
    conteudo.style.width = (largura + trilho.clientWidth) + "px";

    const barra = criar("tl-barra");
    barra.style.left = metade + "px";
    barra.style.width = largura + "px";
    conteudo.appendChild(barra);

    for (let ano = ANO_MIN; ano <= ANO_MAX; ano++) {
        if (ano === ANO_MIN || ano % 50 === 0) {
            const marca = criar("tl-ano", "span");
            marca.textContent = ano;
            marca.style.left = x(ano) + "px";
            conteudo.appendChild(marca);
        } else if (ano % 10 === 0) {
            const marca = criar("tl-marca", "span");
            marca.style.left = x(ano) + "px";
            conteudo.appendChild(marca);
        }
    }

    eventosOrdenados.forEach(ev => {
        const botao = criar("tl-evento", "button");
        botao.dataset.id = ev.id;
        botao.title = `${ev.nome} (${ev.ano})`;
        botao.style.left = x(ev.ano) + "px";
        botao.addEventListener("click", () => selecionarEvento(ev));
        conteudo.appendChild(botao);
    });

    marcarAtivo();
}

function marcarAtivo() {
    conteudo.querySelectorAll(".tl-evento").forEach(b => {
        b.classList.toggle("ativo", !!eventoAtivo && b.dataset.id === eventoAtivo.id);
    });
}

function posicaoAno() {
    return trilho.scrollLeft / PX_POR_ANO + ANO_MIN;
}

function atualizarAno() {
    rotuloAno.textContent = Math.round(posicaoAno());
}

function irParaAno(ano) {
    trilho.scrollTo({ left: (ano - ANO_MIN) * PX_POR_ANO, behavior: "smooth" });
}

trilho.addEventListener("scroll", atualizarAno, { passive: true });

let arrastando = false;
let inicioX = 0;
let inicioScroll = 0;

trilho.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse" || e.target.closest(".tl-evento")) return;
    arrastando = true;
    inicioX = e.clientX;
    inicioScroll = trilho.scrollLeft;
    trilho.setPointerCapture(e.pointerId);
    trilho.classList.add("arrastando");
});

trilho.addEventListener("pointermove", e => {
    if (!arrastando) return;
    trilho.scrollLeft = inicioScroll - (e.clientX - inicioX);
});

function soltar() {
    arrastando = false;
    trilho.classList.remove("arrastando");
}
trilho.addEventListener("pointerup", soltar);
trilho.addEventListener("pointercancel", soltar);

trilho.addEventListener("wheel", e => {
    e.preventDefault();
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    trilho.scrollLeft += delta;
}, { passive: false });

function irParaVizinho(direcao) {
    const pos = posicaoAno();
    let alvo;

    if (eventoAtivo && Math.abs(eventoAtivo.ano - pos) < 0.5) {
        alvo = eventosOrdenados[eventosOrdenados.indexOf(
            eventosOrdenados.find(e => e.id === eventoAtivo.id)
        ) + direcao];
    } else if (direcao > 0) {
        alvo = eventosOrdenados.find(e => e.ano > pos + 0.5);
    } else {
        alvo = [...eventosOrdenados].reverse().find(e => e.ano < pos - 0.5);
    }

    if (alvo) selecionarEvento(alvo);
}

timelineEl.querySelector(".tl-seta-anterior").addEventListener("click", () => irParaVizinho(-1));
timelineEl.querySelector(".tl-seta-proximo").addEventListener("click", () => irParaVizinho(1));

function preencherCartao(ev) {
    cartao.querySelector(".tl-cartao-nome").textContent = ev.nome;
    cartao.querySelector(".tl-cartao-ano").textContent = `Ano ${ev.ano} da Primeira Era`;
    cartao.querySelector(".tl-cartao-resumo").textContent = ev.resumo || ev.descricao || "";
    atualizarNavegacaoAno();

    const circulo = cartao.querySelector(".tl-cartao-imagem");
    circulo.hidden = true;
    cartao.classList.remove("com-imagem");

    if (ev.imagem) {
        const src = `imagens/eventos/${ev.imagem}`;
        const teste = new Image();
        teste.onload = () => {
            const atual = eventoAtualDoCartao();
            if (atual && atual.id === ev.id) {
                circulo.style.backgroundImage = `url("${src}")`;
                circulo.hidden = false;
                cartao.classList.add("com-imagem");
            }
        };
        teste.src = src;
    }
}

function mudarEventoNoAno(delta) {
    if (eventosDoAnoAtual.length <= 1) return;
    indiceNoAno = (indiceNoAno + delta + eventosDoAnoAtual.length) % eventosDoAnoAtual.length;
    const ev = eventosDoAnoAtual[indiceNoAno];
    eventoAtivo = ev;
    marcarAtivo();
    destacarLugares(ev.lugares);
    preencherCartao(ev);
}

function selecionarEvento(ev) {
    if (typeof temporizador !== "undefined") clearTimeout(temporizador);
    if (typeof painel !== "undefined") painel.classList.remove("aberto");

    eventosDoAnoAtual = obterEventosDoAno(ev.ano);
    const idx = eventosDoAnoAtual.findIndex(item => item.id === ev.id);
    indiceNoAno = idx >= 0 ? idx : 0;

    eventoAtivo = eventosDoAnoAtual[indiceNoAno];
    marcarAtivo();
    destacarLugares(eventoAtivo.lugares);
    irParaAno(eventoAtivo.ano);

    clearTimeout(temporizadorCartao);
    preencherCartao(eventoAtivo);
    cartao.classList.add("aberto");
}

function fecharCartao() {
    clearTimeout(temporizadorCartao);
    eventoAtivo = null;
    eventosDoAnoAtual = [];
    indiceNoAno = 0;
    marcarAtivo();
    destacarLugares([]);
    cartao.classList.remove("aberto");
}

cartao.querySelector(".tl-cartao-fechar").addEventListener("click", fecharCartao);
cartao.querySelector(".tl-cartao-anterior").addEventListener("click", () => mudarEventoNoAno(-1));
cartao.querySelector(".tl-cartao-proximo").addEventListener("click", () => mudarEventoNoAno(1));

cartao.querySelector(".tl-cartao-mais").addEventListener("click", e => {
    e.preventDefault();
    const alvo = eventoAtualDoCartao();
    if (alvo) abrirEvento(alvo.id);
});

function destacarLugares(ids = []) {
    document.querySelectorAll(".ponto").forEach(p => {
        p.classList.toggle("destaque", ids.includes(p.dataset.id));
    });
}

function abrirEvento(id) {
    const ev = eventos[id];
    if (!ev) return;

    trocarConteudo(() => {
        document.getElementById("painel-titulo").textContent = ev.nome;
        document.getElementById("painel-tipo").textContent = `Evento · Ano ${ev.ano} da Primeira Era`;
        const fonte = document.getElementById("painel-fonte");
        fonte.innerHTML = htmlFonte(ev);
        fonte.hidden = !fonte.innerHTML;
        document.getElementById("painel-descricao").innerHTML = ev.descricao || ev.resumo || "";
        mostrarFrase(ev.quote);
        if (ev.imagem) {
            mostrarImagem(`imagens/eventos/${ev.imagem}`);
        } else {
            const rolagem = document.getElementById("painel-rolagem");
            const img = document.getElementById("painel-imagem");
            img.hidden = true;
            rolagem.classList.add("sem-imagem");
        }
        if (typeof mostrarCredito === "function") mostrarCredito(ev.credito, ev.creditoLink);

        montarRelacionados(
            "painel-lugares", "lista-lugares",
            ev.lugares, lugares,
            (lid) => `imagens/lugares/${lid}.jpg`,
            abrirPainel
        );
        montarRelacionados(
            "painel-personagens", "lista-personagens",
            ev.personagens, personagens,
            (pid, p) => `imagens/personagens/${p.imagem}`,
            abrirPersonagem
        );
    });
}

montarEscala();
atualizarAno();

window.addEventListener("resize", () => {
    const ano = posicaoAno();
    montarEscala();
    trilho.scrollLeft = (ano - ANO_MIN) * PX_POR_ANO;
});