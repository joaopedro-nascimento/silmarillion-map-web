const ANO_MIN = 1;
const ANO_MAX = 590;
const PX_POR_ANO = 5;
const ICONE_LIVRO = `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19.5A2 2 0 0 1 6 18h13"/></svg>`;
const ICONE_DATA  = `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`;

function htmlFonte(ev) {
    const data = `<span class="fonte-item">${ICONE_DATA}${ev.ano} P.E.</span>`;
    if (!ev.livro) return data;
    const cap = ev.capitulo ? ` ${ev.capitulo}` : "";
    return `${data}<span class="fonte-sep">◆</span>
            <span class="fonte-item">${ICONE_LIVRO}<em>${ev.livro}</em>${cap}</span>`;
}

const eventos = {
    nascerdosol : {
        nome : "O Primeiro Nascer do Sol",
        ano : 1,
        resumo : "A luz do Sol revela Beleriand, e os Homens despertam em Hildórien.",
        descricao : "",
        lugares : [""],
        personagens : ["", ""]
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
    quedanargothrond : {
        nome : "Saque de Nargothrond",
        ano : 495,
        resumo : "A grande fortaleza subterrânea do Rio Narog é destruída por Glaurung.",
        descricao : "",
        imagem : "",
        livro : "Os Filhos de Húrin",
        capitulo : "cap. 11",
        lugares : ["nargothrond", ],
        personagens : ["turin"]
    },
    quedagondolin: {
        nome: "A queda de Gondolin",
        ano: 511,
        resumo: "A cidade oculta é destruída.",
        descricao: "",
        imagem : "",
        livro : "A Queda de Gondolin",
        lugares: ["gondolin"],
        personagens: []
    },
    dagoraglareb: {
        nome: "Dagor Aglareb",
        ano: 60,
        resumo: '"A Batalha Gloriosa", terceira das grandes batalhas das Guerras de Beleriand.',
        descricao: "A <strong>Dagor Aglareb</strong> (“Batalha Gloriosa”) foi a terceira grande batalha das Guerras de Beleriand. Morgoth, achando que os Noldor estavam descuidados, atacou com Orques vindos de Ard-galen, mas Fingolfin e Maedhros, vigilantes, esmagaram a hoste principal de ambos os lados e a perseguiram até a vista de Angband, destruindo-a por completo. A vitória deu início ao Cerco de Angband, que durou cerca de quatrocentos anos do Sol.",
        imagem : "dagoraglareb.webp",
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
    cartao.querySelector(".tl-cartao-resumo").textContent = ev.resumo;

    const circulo = cartao.querySelector(".tl-cartao-imagem");
    circulo.hidden = true;
    cartao.classList.remove("com-imagem");

    if (ev.imagem) {
        const src = `imagens/eventos/${ev.imagem}`;
        const teste = new Image();
        teste.onload = () => {
            if (eventoAtivo && eventoAtivo.id === ev.id) {
                circulo.style.backgroundImage = `url("${src}")`;
                circulo.hidden = false;
                cartao.classList.add("com-imagem");
            }
        };
        teste.src = src;
    }
}

function selecionarEvento(ev) {
    clearTimeout(temporizador);
    painel.classList.remove("aberto");
    
    eventoAtivo = ev;
    marcarAtivo();
    destacarLugares(ev.lugares);
    irParaAno(ev.ano);

    clearTimeout(temporizadorCartao);
    const mostrar = () => {
        preencherCartao(ev);
        cartao.classList.add("aberto");
    };

    if (cartao.classList.contains("aberto")) {
        cartao.classList.remove("aberto");
        temporizadorCartao = setTimeout(mostrar, 300);
    } else {
        mostrar();
    }
}

function fecharCartao() {
    clearTimeout(temporizadorCartao);
    eventoAtivo = null;
    marcarAtivo();
    destacarLugares([]);
    cartao.classList.remove("aberto");
}

cartao.querySelector(".tl-cartao-fechar").addEventListener("click", fecharCartao);

cartao.querySelector(".tl-cartao-mais").addEventListener("click", e => {
    e.preventDefault();
    if (eventoAtivo) abrirEvento(eventoAtivo.id);
});

function destacarLugares(ids = []) {
    document.querySelectorAll(".ponto").forEach(p => {
        p.classList.toggle("destaque", ids.includes(p.dataset.id));
    });
}

function abrirEvento(id) {
    const ev = eventos[id];

    trocarConteudo(() => {
        document.getElementById("painel-titulo").textContent = ev.nome;
        document.getElementById("painel-tipo").textContent = `Evento · Ano ${ev.ano} da Primeira Era`;
        const fonte = document.getElementById("painel-fonte");
        fonte.innerHTML = htmlFonte(ev);
        fonte.hidden = false;
        document.getElementById("painel-descricao").innerHTML = ev.descricao;
        mostrarFrase(ev.quote);
        mostrarImagem(`imagens/eventos/${ev.imagem || id + ".jpg"}`);
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
