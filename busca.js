const FONTES_BUSCA = [
    {
        tipo: "Personagem",
        dados: () => personagens,
        subtitulo: p => p.raca || "Personagem",
        imagem: (id, p) => `imagens/personagens/${p.imagem}`,
        abrir: id => abrirPersonagem(id)
    }
];

const MAX_RESULTADOS = 30;

function normalizar(texto) {
    return (texto || "")
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .trim();
}

const buscaEl = document.createElement("div");
buscaEl.id = "busca";
buscaEl.className = "busca";
buscaEl.innerHTML = `
    <div class="busca-barra">
        <input id="busca-campo" class="busca-campo" type="search" autocomplete="off"
               placeholder="Buscar personagens…" aria-label="Buscar">
        <button id="busca-botao" class="busca-botao" title="Buscar" aria-label="Buscar">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
        </button>
    </div>
    <div id="busca-resultados" class="busca-resultados" hidden>
        <ul id="busca-lista" class="busca-lista"></ul>
    </div>
`;
document.body.appendChild(buscaEl);

const buscaCampo = document.getElementById("busca-campo");
const buscaBotao = document.getElementById("busca-botao");
const buscaResultados = document.getElementById("busca-resultados");
const buscaLista = document.getElementById("busca-lista");

function pesquisar(consulta) {
    const q = normalizar(consulta);
    if (!q) return [];

    const achados = [];
    FONTES_BUSCA.forEach(fonte => {
        Object.entries(fonte.dados()).forEach(([id, item]) => {
            const nome = normalizar(item.nome);
            const sub = normalizar(fonte.subtitulo(item));

            let pontos = 0;
            if (nome.startsWith(q)) pontos = 3;
            else if (nome.split(/\s+/).some(parte => parte.startsWith(q))) pontos = 2;
            else if (nome.includes(q)) pontos = 1;
            else if (sub.includes(q)) pontos = 0.5;

            if (pontos > 0) achados.push({ fonte, id, item, pontos });
        });
    });

    return achados
        .sort((a, b) => b.pontos - a.pontos || a.item.nome.localeCompare(b.item.nome, "pt-BR"))
        .slice(0, MAX_RESULTADOS);
}

function mensagem(texto) {
    const li = document.createElement("li");
    li.className = "busca-aviso";
    li.textContent = texto;
    buscaLista.appendChild(li);
}

function renderizar() {
    buscaLista.innerHTML = "";
    const consulta = buscaCampo.value;

    if (!consulta.trim()) {
        mensagem("Digite para buscar.");
        return;
    }

    const resultados = pesquisar(consulta);
    if (resultados.length === 0) {
        mensagem("Nenhum resultado.");
        return;
    }

    resultados.forEach(({ fonte, id, item }) => {
        const li = document.createElement("li");
        const botao = document.createElement("button");
        botao.className = "busca-item";
        botao.type = "button";

        const icone = document.createElement("span");
        icone.className = "busca-item-icone";
        const img = document.createElement("img");
        img.src = fonte.imagem(id, item);
        img.alt = "";
        img.onerror = () => img.remove();
        icone.appendChild(img);

        const nome = document.createElement("span");
        nome.className = "busca-item-nome";
        nome.textContent = item.nome;

        const tipo = document.createElement("small");
        tipo.className = "busca-item-tipo";
        tipo.textContent = `${fonte.tipo} · ${fonte.subtitulo(item)}`;

        botao.append(icone, nome, tipo);
        botao.addEventListener("click", () => {
            fonte.abrir(id);
            fecharBusca();
        });

        li.appendChild(botao);
        buscaLista.appendChild(li);
    });
}

function abrirBusca() {
    buscaEl.classList.add("aberta");
    buscaResultados.hidden = false;
    renderizar();
    buscaCampo.focus();
}

function fecharBusca() {
    buscaEl.classList.remove("aberta");
    buscaResultados.hidden = true;
    buscaCampo.value = "";
    buscaCampo.blur();
}

buscaBotao.addEventListener("click", () => {
    buscaEl.classList.contains("aberta") ? fecharBusca() : abrirBusca();
});

buscaCampo.addEventListener("input", renderizar);

buscaCampo.addEventListener("keydown", e => {
    if (e.key === "Escape") fecharBusca();
    if (e.key === "Enter") {
        const primeiro = buscaLista.querySelector(".busca-item");
        if (primeiro) primeiro.click();
    }
});

document.addEventListener("pointerdown", e => {
    if (buscaEl.classList.contains("aberta") && !buscaEl.contains(e.target)) fecharBusca();
});