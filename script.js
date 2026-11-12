const lugares = {
    menegroth: {
        nome : "Menegroth",
        tipo : "Cidade",
        descricao : "\"As Mil Cavernas\", salões ocultos de Thingol e Melian no rio de Esgalduin em Doriath. Os pilares de Menegroth eram entalhados à semelhanças das faias de Oromë, tronco, galho e folha e iluminado com lanternas de ouro. Aquela era a mais bela habitação de qualquer rei a jamais existir a leste do Mar.",
        x: 62, y: 34.5, icone: "nomemenegroth.png", largura: 90
    },
    gondolin: {
        nome : "Gondolin",
        tipo : "Cidade",
        descricao : "\"A Rocha Oculta\", cidade secreta do Rei Turgon, protegida pelas Montanhas Circundantes (Echoriath).",
        x: 49.2, y: 22.3, icone: "nomegondolin.png", largura: 78
    },
    dorlómin: {
        nome : "Dor-lómin",
        tipo : "Região",
        descricao : "Região ao sul de Hithlum, o território de Fingon oferecido como feudo à Casa de Hador; lar de Húrin e Morwen.",
        x: 29.9, y: 22.73, icone: "nomedorlomin.png", largura: 159, rotacao: 7,
        personagens : ["turin"]
    },
    himring : {
        nome : "Himring",
        tipo : "Cidade",
        descricao : "O grande monte a oeste da Brecha de Maglor na qual ficava a fortaleza de Maedhros; traduzido no texto como \"Sempre-frio\".",
        x: 74.6, y: 19, icone: "nomehimring.png", largura: 90
    },
    nargothrond : {
        nome : "Nargothrond",
        tipo : "Cidade",
        descricao : "<strong>\"A grande fortaleza subterrânea do rio Narog\"</strong>, fundada por Finrod Felagund e destruída por Glaurung; também o reino de Nargothrond, que se estendia a leste e a oeste do Narog.",
        x: 39.1, y: 48.3, icone: "nomenargothrond.png", largura: 90,
        personagens : ["turin"]
    },
    tolsirion : {
        nome : "Tol Sirion",
        tipo : "Cidade",
        descricao : "Ilha no rio, perto do Passo do Sirion, na qual Finrod construiu a torre de Minas Tirith; depois de ser tomada por Sauron, recebeu o nome de Tol-in-Gaurhoth.",
        x: 43.2, y: 22.2, icone: "nometolsirion.png", largura: 50
    },
    vinyamar : {
        nome : "Vinyamar",
        tipo : "Cidade",
        descricao : "A casa de Turgon em Nevrast sob o Monte Taras. O significado é provavelmente \"Nova Morada\".",
        x: 13.2, y: 32.8, icone: "nomevinyamar.png", largura: 87
    },
    amonrûdh : {
        nome : "Amon Rûdh",
        tipo : "Cidade",
        descricao : "\"O Monte Calvo\", uma elevação solitária nas terras ao sul de Brethil; morada de Mîm e covil do bando de proscritos de Túrin.",
        x: 44.2, y: 45.2, icone: "nomeamonrudh.png", largura: 90,
        personagens : ["turin"]
    },
    hithlum : {
        nome : "Hithlum",
        tipo : "Região",
        descricao : "\"Terra da Bruma\", a região cuja divisa a leste e a sul são as Ered Wedthrin e no oeste são as Ered Lómin. Era uma terra bela enquanto o Cerco de Angband durou, embora seu ar fosse fresco e o inverno ali fosse frio.",
        x: 27.4, y: 11.6, icone: "nomehithlum.png", largura: 240
    },
    quedadosirion : {
        nome : "Queda do Sirion",
        tipo : "Cidade",
        descricao : "Onde o \"O Grande Rio\" que corria de norte a sul e dividia Beleriand Oeste e Beleriand Leste mergulhava no fundo da terra com grande estrondo.",
        x: 43, y: 57.2, icone: "nomequedasdosirion.png", largura: 100
    }
};

const personagens = {
    turin : {
        nome : "Túrin Turambar",
        quote : "Pois vitória é vitória, não importa o quão pequena, e não deve ser medida apenas pelo que se segue a ela.",
        descricao : "<strong>Túrin Turambar</strong> foi um guerreiro dos Homens da Casa de Hador, filho de Húrin e Morwen, e um dos maiores heróis trágicos da Primeira Era. Criado em Doriath como pupilo de Thingol, tornou-se um combatente temido, conhecido como Adanedhel, Gwindor e Mormegil, a Espada Negra de Nargothrond. Seu destino foi marcado pela maldição de Morgoth sobre a família de Húrin, que o levou a causar a ruína de Nargothrond e, sem saber, a se casar com a própria irmã, Níniel. Ao descobrir a verdade, matou Glaurung, o Pai dos Dragões, e tirou a própria vida com a espada Gurthang, às margens de Cabed-en-Aras.",
        imagem : "turin.png",
        lugares : ["dorlómin", "nargothrond", "amonrûdh"]
    }
}

const app = document.getElementById("app");

app.innerHTML = `
    <div class="mapa-conteiner">
        <img class="mapa-img" src="imagens/beleriandmap.jpg" alt="Mapa de Beleriand">
    </div>

    <aside id="painel" class="painel">
        <button id="fechar" class="fechar" title="Fechar">✕</button>
        <div id="painel-rolagem" class="painel-rolagem">
            <img id="painel-imagem" class="painel-imagem" alt="">
            <section class="painel-texto">
                <h2 id="painel-titulo"></h2>
                <p id="painel-tipo"></p>
                <blockquote id="painel-quote" class="quote" hidden></blockquote>
                <p id="painel-descricao"></p>
            </section>
            <section id="painel-personagens" class="relacionados" hidden>
                <h3>Personagens</h3>
                <div id="lista-personagens" class="relacionados-lista"></div>
            </section>
        </div>
    </aside>
`;

const mapa = app.querySelector(".mapa-conteiner");
const painel = document.getElementById("painel");

Object.entries(lugares).forEach(([id, lugar]) => {
    const ponto = document.createElement("a");
    ponto.className = "ponto";
    ponto.dataset.id = id;
    ponto.style.left = lugar.x + "%";
    ponto.style.top = lugar.y + "%";

    if (lugar.icone) {
        const img = document.createElement("img");
        img.src = `imagens/${lugar.icone}`;
        img.alt = lugar.nome;
        img.style.width = lugar.largura + "px";
        if (lugar.rotacao) img.style.rotate = lugar.rotacao + "deg";
        ponto.appendChild(img);
    } else {
        ponto.textContent = lugar.nome;
        ponto.classList.add("ponto-texto");
    }

    ponto.addEventListener("click", () => abrirPainel(id));
    mapa.appendChild(ponto);
});

const TEMPO_PAINEL = 750; 
let temporizador = null;

function trocarConteudo(preencher) {
    clearTimeout(temporizador);

    if (painel.classList.contains("aberto")) {
        painel.classList.remove("aberto");
        temporizador = setTimeout(() => {
            preencher();
            painel.classList.add("aberto");
        }, TEMPO_PAINEL);
    } else {
        preencher();
        painel.classList.add("aberto");
    }
}

function mostrarImagem(src) {
    const img = document.getElementById("painel-imagem");
    img.hidden = false;
    img.onerror = () => { img.hidden = true; };
    img.src = src;
    document.getElementById("painel-rolagem").scrollTop = 0;
}

function mostrarFrase(texto) {
    const frase = document.getElementById("painel-quote");
    if (texto) {
        frase.textContent = `“${texto}”`;
        frase.hidden = false;
    } else {
        frase.hidden = true;
    }
}

function abrirPainel(id) {
    trocarConteudo(() => {
        const lugar = lugares[id];
        document.getElementById("painel-titulo").textContent = lugar.nome;
        document.getElementById("painel-tipo").textContent = lugar.tipo;
        document.getElementById("painel-descricao").innerHTML = lugar.descricao;
        mostrarFrase(lugar.quote);
        mostrarImagem(`imagens/${id}.jpg`);

        const secao = document.getElementById("painel-personagens");
        const lista = document.getElementById("lista-personagens");
        lista.innerHTML = "";

        if (lugar.personagens && lugar.personagens.length > 0) {
            lugar.personagens.forEach(pid => {
                const p = personagens[pid];
                if (!p) return;

                const item = document.createElement("button");
                item.className = "relacionado";
                item.title = p.nome;
                item.innerHTML = `
                    <img src="imagens/${p.imagem}" alt="${p.nome}">
                    <span>${p.nome}</span>
                `;
                item.addEventListener("click", () => abrirPersonagem(pid));
                lista.appendChild(item);
            });
            secao.hidden = false;
        } else {
            secao.hidden = true;
        }
    });
}

function abrirPersonagem(pid) {
    trocarConteudo(() => {
        const p = personagens[pid];
        document.getElementById("painel-titulo").textContent = p.nome;
        document.getElementById("painel-tipo").textContent = "Personagem";
        document.getElementById("painel-descricao").innerHTML = p.descricao;
        mostrarFrase(p.quote);
        mostrarImagem(`imagens/${p.imagem}`);
        document.getElementById("painel-personagens").hidden = true;
    });
}

document.getElementById("fechar").addEventListener("click", () => {
    clearTimeout(temporizador);
    painel.classList.remove("aberto");
});