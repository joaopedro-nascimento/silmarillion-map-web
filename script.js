const lugares = {
    menegroth: {
        nome : "Menegroth",
        tipo : "Cidade",
        descricao : "\"As Mil Cavernas\", salões ocultos de Thingol e Melian no rio de Esgalduin em Doriath. Os pilares de Menegroth eram entalhados à semelhanças das faias de Oromë, tronco, galho e folha e iluminado com lanternas de ouro. Aquela era a mais bela habitação de qualquer rei a jamais existir a leste do Mar."
    },
    gondolin: {
        nome : "Gondolin",
        tipo : "Cidade",
        descricao : "\"A Rocha Oculta\", cidade secreta do Rei Turgon, protegida pelas Montanhas Circundantes (Echoriath)."
    },
    dorlómin: {
        nome : "Dor-lómin",
        tipo : "Região",
        descricao : "Região ao sul de Hithlum, o território de Fingon oferecido como feudo à Casa de Hador; lar de Húrin e Morwen."
    },
    himring : {
        nome : "Himring",
        tipo : "Cidade",
        descricao : "O grande monte a oeste da Brecha de Maglor na qual ficava a fortaleza de Maedhros; traduzido no texto como \"Sempre-frio\"."
    },
    nargothrond : {
        nome : "Nargothrond",
        tipo : "Cidade",
        descricao : "\"A grande fortaleza subterrânea do rio Narog\", fundada por Finrod Felagund e destruída por Glaurung; também o reino de Nargothrond, que se estendia a leste e a oeste do Narog."
    },
    tolsirion : {
        nome : "Tol Sirion",
        tipo : "Cidade",
        descricao : "Ilha no rio, perto do Passo do Sirion, na qual Finrod construiu a torre de Minas Tirith; depois de ser tomada por Sauron, recebeu o nome de Tol-in-Gaurhoth."
    },
    vinyamar : {
        nome : "Vinyamar",
        tipo : "Cidade",
        descricao : "A casa de Turgon em Nevrast sob o Monte Taras. O significado é provavelmente \"Nova Morada\"."
    },
    amonrûdh : {
        nome : "Amon Rûdh",
        tipo : "Cidade",
        descricao : "\"O Monte Calvo\", uma elevação solitária nas terras ao sul de Brethil; morada de Mîm e covil do bando de proscritos de Túrin. "
    },
    mithrim : {
        nome : "Mithrim",
        tipo : "Região",
        descricao : "O nome do grande lago do leste de Hithlum e também da região em volta dele e das montanhas a oeste, separando Mithrim de Dor-lómin. A palavra originalmente se referia aos Elfos sindarin que habitavam ali."
    },
    quedadosirion : {
        nome : "Queda do Sirion",
        tipo : "Cidade",
        descricao : "Onde o \"O Grande Rio\" que corria de norte a sul e dividia Beleriand Oeste e Beleriand Leste mergulhava no fundo da terra com grande estrondo."
    }
};

const painel = document.getElementById("painel");

document.querySelectorAll(".ponto").forEach(ponto => {
    ponto.addEventListener("click", () => {
        const lugar = lugares[ponto.dataset.id];
        document.getElementById("painel-titulo").textContent = lugar.nome;
        document.getElementById("painel-tipo").textContent = lugar.tipo;
        document.getElementById("painel-descricao").textContent = lugar.descricao;
        painel.classList.add("aberto");
    });
});

document.getElementById("fechar").addEventListener("click", () => {
    painel.classList.remove("aberto");
});