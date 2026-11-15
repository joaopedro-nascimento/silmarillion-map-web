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
