const lugares = {
    menegroth: {
        nome : "Menegroth",
        tipo : "Cidade",
        descricao : "\"As Mil Cavernas\", salões ocultos de Thingol e Melian no rio de Esgalduin em Doriath. Os pilares de Menegroth eram entalhados à semelhanças das faias de Oromë, tronco, galho e folha e iluminado com lanternas de ouro. Aquela era a mais bela habitação de qualquer rei a jamais existir a leste do Mar.",
        x: 62, y: 34.5, icone: "nomemenegroth.png", largura: 90,
        personagens : ["galadriel", "melian", "celegorm", "beleg"]
    },
    gondolin: {
        nome : "Gondolin",
        tipo : "Cidade",
        descricao : "\"A Rocha Oculta\", cidade secreta do Rei Turgon, protegida pelas Montanhas Circundantes (Echoriath).",
        x: 49.2, y: 22.3, icone: "nomegondolin.png", largura: 78,
        personagens : ["turgon", "fingolfin", "aredhel", "tuor", "glorfindel", "voronwe"]
    },
    dorlómin: {
        nome : "Dor-lómin",
        tipo : "Região",
        descricao : "Região ao sul de Hithlum, o território de Fingon oferecido como feudo à Casa de Hador; lar de Húrin e Morwen.",
        x: 29.9, y: 22.73, icone: "nomedorlomin.png", largura: 159, rotacao: 7,
        personagens : ["turin", "fingolfin", "tuor"]
    },
    himring : {
        nome : "Himring",
        tipo : "Cidade",
        descricao : "O grande monte a oeste da Brecha de Maglor na qual ficava a fortaleza de Maedhros; traduzido no texto como \"Sempre-frio\".",
        x: 74.6, y: 19, icone: "nomehimring.png", largura: 90,
        personagens : ["celegorm", "maglor", "maedhros"]
    },
    nargothrond : {
        nome : "Nargothrond",
        tipo : "Cidade",
        descricao : "<strong>\"A grande fortaleza subterrânea do rio Narog\"</strong>, fundada por Finrod Felagund e destruída por Glaurung; também o reino de Nargothrond, que se estendia a leste e a oeste do Narog.",
        x: 39.1, y: 48.3, icone: "nomenargothrond.png", largura: 90,
        personagens : ["turin", "finrod", "glaurung", "celegorm"]
    },
    tolsirion : {
        nome : "Tol Sirion",
        tipo : "Cidade",
        descricao : "Ilha no rio, perto do Passo do Sirion, na qual Finrod construiu a torre de Minas Tirith; depois de ser tomada por Sauron, recebeu o nome de Tol-in-Gaurhoth.",
        x: 43.2, y: 22.2, icone: "nometolsirion.png", largura: 50,
        personagens : ["finrod"]
    },
    vinyamar : {
        nome : "Vinyamar",
        tipo : "Cidade",
        descricao : "A casa de Turgon em Nevrast sob o Monte Taras. O significado é provavelmente \"Nova Morada\".",
        x: 13.2, y: 32.8, icone: "nomevinyamar.png", largura: 87,
        personagens : ["turgon", "aredhel", "cirdan", "tuor", "ulmo", "voronwe"]
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
        x: 27.4, y: 11.6, icone: "nomehithlum.png", largura: 240,
        personagens : ["fingolfin", "feanor", "galadriel", "fingon", "celegorm", "gilgalad"]
    },
    quedadosirion : {
        nome : "Queda do Sirion",
        tipo : "Cidade",
        descricao : "Onde o \"O Grande Rio\" que corria de norte a sul e dividia Beleriand Oeste e Beleriand Leste mergulhava no fundo da terra com grande estrondo.",
        x: 43, y: 57.2, icone: "nomequedasdosirion.png", largura: 100
    },
    baradnimras : {
        nome : "Barad Nimras",
        tipo : "Torre",
        descricao : '"Torre do Chifre Branco", erigida por Finrod Felagund no cabo a oeste de Eglarest.',
        x: 17.8, y: 57.6, icone: "nomebaradnimras.png", largura: 120,
        personagens : ["finrod"]
    },
    dorthonion : {
        nome : "Taur-Nu-Fuin (Dorthonion)",
        tipo : "Região",
        descricao : '"Terra de Pinheiros", os grandes planaltos cobertos de florestas na fronteira norte de Beleriand, depois chamados de Taur-nu-Fuin.',
        x: 56.78, y: 21, icone: "nomedorthonion.png", largura: 189,
        personagens : ["angrod", "aegnor", "finrod", "boromir", "bregolas", "barahir", "beren", "baragund", "belegund", "radhruin", "dairuin", "dagnir", "ragnor", "gildor", "gorlim", "arthad", "urthel", "hathaldir", "maedhros"]
    },
    falas : {
        nome : "Falas",
        tipo : "Região",
        descricao : "As costas do oeste de Beleriand, ao sul de Nevrast.",
        x: 21, y: 52.3, icone: "nomefalas.png", largura: 310, rotacao: 41,
        personagens : ["cirdan", "finrod", "gilgalad"]
    },
    mithrim : {
        nome : "Mithrim",
        tipo : "Região",
        descricao : "A região em volta do grande lago do leste de Hithlum.",
        x: 38.7, y: 17.3, icone: "nomemithrim.png", largura: 120,
        personagens : ["feanor", "celegorm", "maedhros", "caranthir", "fingolfin", "finrod", "fingon", "thorondor", "angrod", "rian", "tuor"]
    }
};

const familias = {
    fingolfin : {
        nome : "Casa de Fingolfin",
        descricao : "",
        personagens : {
            fingolfin : {
                nome : "Fingolfin",
                raca : "Elfo Noldo",
                quote : "Assim ele chegou sozinho aos portões de Angband, e soou sua trompa, e golpeou, mais uma vez, as portas brônzeas, e desafiou Morgoth a vir para fora para combate singular. E Morgoth veio.",
                descricao : "",
                imagem : "fingolfin.jpeg",
                lugares : ["hithlum", "dorlómin", "gondolin"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            fingon : {
                nome : "Fingon",
                raca : "Elfo Noldo",
                quote : "Ó Rei a quem todas as aves são caras, dai força agora às penas desta flecha e achai alguma misericórdia para os Noldor em seu apuro!",
                descricao : "",
                imagem : "fingon.jpeg",
                lugares : ["hithlum"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            turgon : {
                nome : "Turgon",
                raca : "Elfo Noldo",
                quote : 'Grande é a queda de Gondolin, e a glória de meu povo jamais será esquecida! Contudo, eu não desferirei mais golpe algum em fuga... Sus! Aqui permaneço, e com a minha cidade hei de cair!',
                descricao : '',
                imagem : "",
                lugares : ["vinyamar", "gondolin"]
            },
            aredhel : {
                nome : "Aredhel, a Branca",
                raca : "Elfa Noldo",
                quote : "Sou tua irmã, e não tua serviçal, e fora de teus grilhões seguirei como me parecer bom. E, se me recusas uma escolta, então irei sozinha.",
                descricao : "",
                imagem : "aredhel.png",
                lugares : ["vinyamar", "gondolin"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            gilgalad : {
                nome : "Gil-Galad",
                raca : "Elfo Noldo",
                quote : "Ai da fraqueza dos grandes! Pois um rei poderoso é Gil-galad, e sábio em todo conhecimento é Mestre Elrond; e, contudo, não me querem auxiliar em meus labores.",
                descricao : "",
                imagem : "gilgalad.png",
                lugares : ["hithlum", "brithombar", "eglarest", "balar", "fozesdosirion"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            }
        }
    },
 
    feanor : {
        nome : "Casa de Fëanor",
        descricao : "",
        personagens : {
            feanor : {
                nome : "Fëanor",
                raca : "Elfo Noldo",
                quote : "Belo há de ser o fim, ainda que longa e dura haja de ser a estrada!",
                descricao : "",
                imagem : "feanor.jpg",
                lugares : ["hithlum"],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            },
            maedhros: {
                nome : "Maedhros, o alto",
                raca : "Elfo Noldo",
                quote : "Se não houvesse desavença alguma entre nós, senhor, ainda assim a realeza, por direito, caberia a vós, o mais velho aqui da casa de Finwë, e não o menos sábio.",
                descricao : "",
                imagem : "maedhros.jpg",
                lugares : ["angband", "mithrim", "himring", "marcademaedhros", "ivrin", "dorthonion", "anfauglith", "ossiriand", "amonereb", "doriath"],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            },
            maglor : {
                nome : "Maglor, o grande cantor",
                raca : "Elfo Noldo",
                quote : "O juramento não diz que não possamos aguardar o tempo propício, e pode ser que em Valinor tudo seja perdoado e esquecido, e que hajamos de receber o que é nosso em paz.",
                descricao : "",
                imagem : "maglor.jpg",
                lugares : ["ivrin", "brechademaglor", "himring", "montedolmed"],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            },
            celegorm : {
                nome : "Celegorm, o alvo",
                raca : "Elfo Noldo",
                quote : "Seja amigo ou inimigo, seja demônio de Morgoth, ou Elfo, ou filho dos Homens, ou qualquer outra coisa viva em Arda, nem lei, nem laço, nem liga infernal, nem força dos Valar, nem poder algum de feitiçaria há de defendê-lo do ódio perseguidor dos filhos de Fëanor, se ele tomar ou achar uma Silmaril e a mantiver. Pois as Silmarils apenas nós reivindicamos até que o mundo finde.",
                descricao : "",
                imagem : "celegorm.jpeg",
                lugares : ["himring", "nargothrond", "menegroth"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            }
        }
    },
 
    finarfin : {
        nome : "Casa de Finarfin",
        descricao : "",
        personagens : {
            finrod : {
                nome : "Finrod Felagund",
                raca : "Elfo Noldo",
                quote : "Um juramento também hei de fazer, e devo estar livre para cumpri-lo e adentrar a escuridão. Nem nada de meu reino há de durar para que um filho possa herdá-lo.",
                descricao : "",
                imagem : "finrod.jpg",
                lugares : ["tolsirion", "nargothrond", "baradnimras"],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            },
            galadriel : {
                nome : "Galadriel",
                raca : "Elfa Noldo",
                quote : "Que te seja uma luz nos lugares escuros, quando todas as outras luzes se apagam. Recorda Galadriel e seu espelho!",
                descricao : "",
                imagem : "galadriel.jpeg",
                lugares : ["menegroth", "hithlum"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            }
        }
    },
 
    gondolin : {
        nome : "Povo de Gondolin",
        descricao : "",
        personagens : {
            glorfindel : {
                nome : "Glorfindel",
                raca : "Elfo Noldo",
                quote : 'Ainda dizem os Eldar quando veem uma bela luta com grande disparidade de forças contra uma fúria maligna: "Ai de nós! É Glorfindel contra o Balrog", e seus corações ainda estão feridos por causa daquele belo homem dos Noldor.',
                descricao : "",
                imagem : "glorfindel.jpeg",
                lugares : ["gondolin"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            voronwe : {
                nome : "Voronwë",
                raca : "Elfo Noldo",
                quote : "Alae! Ered en Echoriath, ered e.mbar nín!",
                descricao : "",
                imagem : "voronwe.jpeg",
                lugares : ["gondolin", "nevrast", "vinyamar", "nantathrin", "balar", "fozdosirion"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            }
        }
    },
 
    hador : {
        nome : "Casa de Hador",
        descricao : "",
        personagens : {
            turin : {
                nome : "Túrin Turambar",
                raca : "Homem",
                quote : "Pois vitória é vitória, não importa o quão pequena, e não deve ser medida apenas pelo que se segue a ela.",
                descricao : "",
                imagem : "",
                lugares : ["dorlómin", "nargothrond", "amonrûdh"]
            },
            tuor : {
                nome : "Tuor",
                raca : "Homem",
                quote : "Gondolin ainda resiste e Ulmo não permitirá que pereça!",
                descricao : "",
                imagem : "tuor.jpeg",
                lugares : ["mithrim", "dorlómin", "nevrast", "vinyamar", "ivrin", "dimbar", "gondolin", "fozdosirion"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            }
        }
    },
 
    sindar : {
        nome : "Sindar e Doriath",
        descricao : "",
        personagens : {
            cirdan : {
                nome : 'Círdan "O Armador"',
                raca : "Elfo Sindar",
                quote : "Toma agora este Anel, pois teus labores e teus cuidados serão pesados, mas em tudo ele há de te apoiar e te defender do cansaço.",
                descricao : "",
                imagem : "cirdan.jpeg",
                lugares : ["vinyamar"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            beleg : {
                nome : "Beleg Arcoforte",
                raca : "Elfo Sindar",
                quote : "Buscarei Túrin até encontrá-lo e vou trazê-lo de volta a Menegroth, se puder; pois o amo também.",
                descricao : "",
                imagem : "beleg.jpeg",
                lugares : ["menegroth"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            melian : {
                nome : "Melian",
                raca : "Maia",
                quote : "Suas espadas e seus conselhos hão de ter dois gumes.",
                descricao : "",
                imagem : "melian.jpeg",
                lugares : ["menegroth"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            }
        }
    },
 
    poderes : {
        nome : "Valar e Servos de Morgoth",
        descricao : "",
        personagens : {
            ulmo : {
                nome : "Ulmo",
                raca : "Vala",
                quote : "Em verdade, a Água agora se tornou mais bela do que o meu coração imaginara, nem meu pensamento secreto concebera o floco de neve, nem em toda a minha música estava contido o cair da chuva. Buscarei Manwë, para que ele e eu possamos fazer melodias para sempre para teu deleite!",
                descricao : "",
                imagem : "ulmo.jpeg",
                lugares : ["vinyamar"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            glaurung : {
                nome : "Glaurung, Pai de Dragões",
                raca : "Dragão",
                quote : "Filho adotivo ingrato, proscrito, matador de teu amigo, ladrão de amor, usurpador de Nargothrond, capitão imprudente e desertor de tua família.",
                descricao : "",
                imagem : "glaurung.jpeg",
                lugares : ["nargothrond"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            }
        }
    }
};

const personagens = Object.fromEntries(
    Object.entries(familias).flatMap(([chaveFamilia, familia]) =>
        Object.entries(familia.personagens).map(([chave, personagem]) => [
            chave,
            { ...personagem, familia : chaveFamilia }
        ])
    )
);

const app = document.getElementById("app");

app.innerHTML = `
    <div class="mapa-conteiner">
        <img class="mapa-img" src="imagens/beleriandmap.jpg" alt="Mapa de Beleriand">
    </div>

    <aside id="painel" class="painel">
        <button id="fechar" class="fechar" title="Fechar">✕</button>
        <div id="painel-rolagem" class="painel-rolagem">
            <img id="painel-imagem" class="painel-imagem" alt="">
            <div class="painel-corpo">
                <p id="painel-credito" class="painel-credito" hidden></p>
                <section class="painel-texto">
                    <h2 id="painel-titulo"></h2>
                    <p id="painel-tipo"></p>
                    <p id="painel-fonte" class="fonte" hidden></p>
                    <blockquote id="painel-quote" class="quote" hidden></blockquote>
                    <p id="painel-descricao"></p>
                </section>
                <section id="painel-lugares" class="relacionados" hidden>
                    <h3>Lugares</h3>
                    <div id="lista-lugares" class="relacionados-lista"></div>
                </section>
                <section id="painel-personagens" class="relacionados" hidden>
                    <h3>Personagens</h3>
                    <div id="lista-personagens" class="relacionados-lista"></div>
                </section>
            </div>
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
        img.src = `imagens/nomes/${lugar.icone}`;
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
    const rolagem = document.getElementById("painel-rolagem");
    const img = document.getElementById("painel-imagem");

    rolagem.classList.remove("sem-imagem");
    img.hidden = false;
    img.onerror = () => {
        img.hidden = true;
        rolagem.classList.add("sem-imagem");   // sem imagem, o corpo não faz o corte
    };
    img.src = src;
    rolagem.scrollTop = 0;
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

function montarRelacionados(secaoId, listaId, ids, fonte, caminhoImagem, aoClicar) {
    const secao = document.getElementById(secaoId);
    const lista = document.getElementById(listaId);
    lista.innerHTML = "";

    const validos = (ids || []).filter(id => fonte[id]);

    validos.forEach(id => {
        const dado = fonte[id];
        const item = document.createElement("button");
        item.className = "relacionado";
        item.title = dado.nome;
        item.innerHTML = `
            <img src="${caminhoImagem(id, dado)}" alt="${dado.nome}">
            <span>${dado.nome}</span>
        `;
        item.addEventListener("click", () => aoClicar(id));
        lista.appendChild(item);
    });

    secao.hidden = validos.length === 0;
}

function abrirPainel(id) {
    if(typeof fecharCartao === "function") fecharCartao();
    document.getElementById("painel-fonte").hidden = true;
    
    trocarConteudo(() => {
        const lugar = lugares[id];
        document.getElementById("painel-titulo").textContent = lugar.nome;
        document.getElementById("painel-tipo").textContent = lugar.tipo;
        document.getElementById("painel-descricao").innerHTML = lugar.descricao;
        mostrarFrase(lugar.quote);
        mostrarImagem(`imagens/lugares/${id}.jpg`);

        montarRelacionados(
            "painel-personagens", "lista-personagens",
            lugar.personagens, personagens,
            (pid, p) => `imagens/personagens/${p.imagem}`,
            abrirPersonagem
        );
        montarRelacionados("painel-lugares", "lista-lugares", [], lugares, () => "", abrirPainel);
        
    mostrarCredito(lugar.credito, lugar.creditoLink);
    });
}

function abrirPersonagem(pid) {
    if (typeof fecharCartao === "function") fecharCartao();
    document.getElementById("painel-fonte").hidden = true;

    trocarConteudo(() => {
        const p = personagens[pid];
        document.getElementById("painel-titulo").textContent = p.nome;
        document.getElementById("painel-tipo").textContent = p.raca || "Personagem";
        document.getElementById("painel-descricao").innerHTML = p.descricao;
        mostrarFrase(p.quote);
        mostrarImagem(`imagens/personagens/${p.imagem}`);

        montarRelacionados(
            "painel-lugares", "lista-lugares",
            p.lugares, lugares,
            (id) => `imagens/lugares/${id}.jpg`,
            abrirPainel
        );
        montarRelacionados("painel-personagens", "lista-personagens", [], personagens, () => "", abrirPersonagem);
        
        mostrarCredito(p.credito, p.creditoLink);
    });
}

document.getElementById("fechar").addEventListener("click", () => {
    clearTimeout(temporizador);
    painel.classList.remove("aberto");
});

function mostrarCredito(nome, link) {
    const el = document.getElementById("painel-credito");
    el.textContent = "";

    if (!nome) {
        el.hidden = true;
        return;
    }

    el.append("por ");
    if (link) {
        const a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = nome;
        el.appendChild(a);
    } else {
        el.append(nome);
    }
    el.hidden = false;
}