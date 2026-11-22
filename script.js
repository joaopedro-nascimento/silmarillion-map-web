const lugares = {
    menegroth: {
        nome : "Menegroth",
        tipo : "Cidade",
        descricao : "\"As Mil Cavernas\", salões ocultos de Thingol e Melian no rio de Esgalduin em Doriath. Os pilares de Menegroth eram entalhados à semelhanças das faias de Oromë, tronco, galho e folha e iluminado com lanternas de ouro. Aquela era a mais bela habitação de qualquer rei a jamais existir a leste do Mar.",
        x: 62, y: 34.5, icone: "nomemenegroth.png", largura: 90,
        personagens : ["galadriel", "melian", "celegorm", "beleg", "luthien", "eol", "caranthir", "curufin", "amrod", "amras"]
    },
    gondolin: {
        nome : "Gondolin",
        tipo : "Cidade",
        descricao : "\"A Rocha Oculta\", cidade secreta do Rei Turgon, protegida pelas Montanhas Circundantes (Echoriath).",
        x: 49.2, y: 22.3, icone: "nomegondolin.png", largura: 78,
        personagens : ["turgon", "fingolfin", "aredhel", "tuor", "maeglin", "glorfindel", "voronwe", "eol"]
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
        personagens : ["celegorm", "maglor", "maedhros", "curufin"]
    },
    nargothrond : {
        nome : "Nargothrond",
        tipo : "Cidade",
        descricao : "<strong>\"A grande fortaleza subterrânea do rio Narog\"</strong>, fundada por Finrod Felagund e destruída por Glaurung; também o reino de Nargothrond, que se estendia a leste e a oeste do Narog.",
        x: 39.1, y: 48.3, icone: "nomenargothrond.png", largura: 90,
        personagens : ["turin", "finrod", "glaurung", "celegorm", "luthien", "curufin"]
    },
    tolsirion : {
        nome : "Tol Sirion",
        tipo : "Cidade",
        descricao : "Ilha no rio, perto do Passo do Sirion, na qual Finrod construiu a torre de Minas Tirith; depois de ser tomada por Sauron, recebeu o nome de Tol-in-Gaurhoth.",
        x: 43.2, y: 22.2, icone: "nometolsirion.png", largura: 50,
        personagens : ["finrod", "luthien", "curufin"]
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
        x: 22.6, y: 51.3, icone: "nomefalas.png", largura: 310, rotacao: 36,
        personagens : ["cirdan", "finrod", "gilgalad"]
    },
    mithrim : {
        nome : "Mithrim",
        tipo : "Região",
        descricao : "A região em volta do grande lago do leste de Hithlum.",
        x: 38.7, y: 17.3, icone: "nomemithrim.png", largura: 120,
        personagens : ["feanor", "celegorm", "maedhros", "caranthir", "fingolfin", "finrod", "fingon", "thorondor", "angrod", "rian", "tuor", "curufin", "amrod", "amras"]
    },
    balar : {
        nome : "Ilha de Balar",
        tipo : "Ilha",
        descricao : "Ilha na baía de Balar, que diziam ser a ponta leste de Tol Eressëa que se quebrou, onde Círdan e Gil-galad habitaram depois das Nirnaeth Arnoediad.",
        x: 32, y: 93, icone: "nomebalar.png", largura: 95, rotacao : -17,
        personagens : ["osse", "cirdan", "gilgalad"]
    },
    nevrast : {
        nome: "Nevrast",
        tipo : "Região",
        descricao : "A região a oeste de Dor-lómin, além das Ered Lómin, onde Turgon habitava antes de sua partida para Gondolin.",
        x: 18, y: 27.9, icone: "nomenevrast.png", largura: 135, rotacao : -26,
        personagens : ["turgon", "ulmo", "osse", "aredhel", "voronwe", "tuor", "idril"]
    },
    ossiriand : {
        nome: "Ossiriand",
        tipo : "Região",
        descricao : '"Terra dos Sete Rios" (sendo esses o Gelion e seus tributários que desciam das Montanhas Azuis), a terra dos Elfos-verdes. Conforme a canção de Barbárvore em As Duas Torres, III, 4: "Passeei no Verão entre os olmeiros de Ossiriand. Ah! A luz e a música no Verão junto aos Sete Rios de Ossir!"',
        x: 89, y: 68.4, icone: "nomeossiriand.png", largura: 368, rotacao : 94,
        personagens : ["finrod", "beor", "beren", "luthien", "dioreluchil", "nimloth", "elured", "elurin", "elwing"]
    },
    eglarest : {
        nome : "Eglarest",
        tipo : "Porto",
        descricao : "O porto sul da Falas, na costa de Beleriand.",
        x: 23.3, y: 58, icone: "nomeeglarest.png", largura: 68, rotacao: -48,
        personagens : ["cirdan", "finrod", "gilgalad"]
    },
    brithombar : {
        nome : "Brithombar",
        tipo : "Porto",
        descricao : "Nos Portos da Falas, o que ficava mais ao norte na costa de Beleriand.",
        x: 17.3, y: 50.4, icone: "nomebrithombar.png", largura: 87,
        personagens : ["cirdan", "gilgalad"]
    },
    lammoth : {
        nome : "Lammoth",
        tipo : "Região",
        descricao : '"O Grande Eco", região ao norte do Estreito de Drengist, que recebeu esse nome por causa dos ecos do grito de Morgoth em sua luta com Ungoliant.',
        x: 14.5, y: 13, icone: "nomelammoth.png", largura: 136, rotacao : 52,
        personagens : ["morgoth", "ungoliant", "feanor", "celegorm"]
    },
    eithelsirion : {
        nome : "Eithel Sirion",
        tipo : "Torre",
        descricao : '"Nascente do Sirion" do lado leste das Ered Wethrim, onde ficava a grande fortaleza de Fingolfin e Fingon',
        x: 45.5, y: 10.8, icone: "nomeeithelsirion.png", largura: 87,
        personagens : ["fingolfin", "fingon", "hador", "gundor", "galdor", "hurin", "huor", "gwindor", "haldir", "gelmir"]
    },
    nanelmoth : {
        nome : "Nan Elmoth",
        tipo : "Floresta",
        descricao : "A floresta a leste do rio Celon onde Elwë (Thingol) foi encantado por Melian e se perdeu; mais tarde, o lugar da morada de Eöl.",
        x: 70.65, y: 37.84, icone: "nomenanelmoth.png", largura: 104,
        personagens : ["melian", "thingol", "eol", "aredhel", "maeglin"]
    },
    tumhalad : {
        nome : "Tumhalad",
        tipo : "Vale",
        descricao : "Vale da terra entre os rios Ginglith e Narog onde a hoste de Nargothrond foi derrotada.",
        x: 33.4, y: 41.8, icone: "nometumhalad.png", largura: 70, rotacao : 15,
        personagens : ["turin", "orodreth", "gwindor", "glaurung"]
    }
};

const familias = {
    valinor : {
        nome : "Elfos em Valinor",
        descricao : "",
        personagens : {
            finwe : {
                nome : "Finwë",
                raca : "Elfo Noldo",
                quote : "Decerto há cura em Aman? Aqui todo cansaço pode achar repouso.",
                descricao : "",
                imagem : "finwe.jpg",
                lugares : [""],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            },
            findis : {
                nome : "Findis",
                raca : "Elfo Noldo",
                quote : "",
                descricao : "Findis é a primogênita de Finwë e Indis, filha mais velha do segundo casamento do rei dos Noldor. Seu nome é um amálgama dos nomes dos pais (Finwë + Indis).",
                imagem : "findis.jpg",
                lugares : [""],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            },
            irime : {
                nome : "Írimë",
                raca : "Elfa Noldo",
                quote : "",
                descricao : 'Írimë (também chamada Írien, com nome-materno Lalwendë, "donzela risonha", e conhecida como Lalwen) é a filha mais nova de Finwë e Indis. Foi para o exílio com seu irmão Fingolfin, de quem era muito próxima.',
                imagem : "irime.jpg",
                lugares : [""],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            },
            miriel : {
                nome : "Míriel Serindë",
                raca : "Elfa Noldo",
                quote : "Vim até aqui para escapar do corpo e não desejo jamais retornar a ele.",
                descricao : 'Míriel Serindë ("a Bordadeira") foi a primeira esposa de Finwë e mãe de Fëanor. Era famosa pela habilidade soberba com agulhas e tecelagem, superior à de qualquer outro entre os Noldor. Consumida em espírito e corpo ao dar à luz Fëanor, desejou repouso, passou aos salões de Mandos e jamais retornou.',
                imagem : "miriel.jpg",
                lugares : [""],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            },
            nerdanel : {
                nome : "Nerdanel",
                raca : "Elfa Noldo",
                quote : "Não vais ficar com todos eles. Pelo menos um jamais pisará na Terra-média.",
                descricao : "Nerdanel é a esposa de Fëanor e mãe de seus sete filhos. Filha do ferreiro Mahtan, era forte, de mente livre e sedenta de conhecimento. Era mais lenta e paciente que Fëanor, e afastou-se dele quando seus feitos a entristeceram.",
                imagem : "nerdanel.jpg",
                lugares : [""],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            }
        }
    },
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
                lugares : ["hithlum", "dorlómin", "gondolin", "eithelsirion"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            fingon : {
                nome : "Fingon",
                raca : "Elfo Noldo",
                quote : "Ó Rei a quem todas as aves são caras, dai força agora às penas desta flecha e achai alguma misericórdia para os Noldor em seu apuro!",
                descricao : "",
                imagem : "fingon.jpeg",
                lugares : ["hithlum", "eithelsirion"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            turgon : {
                nome : "Turgon",
                raca : "Elfo Noldo",
                quote : 'Grande é a queda de Gondolin, e a glória de meu povo jamais será esquecida! Contudo, eu não desferirei mais golpe algum em fuga... Sus! Aqui permaneço, e com a minha cidade hei de cair!',
                descricao : '',
                imagem : "",
                lugares : ["vinyamar", "gondolin", "nevrast"]
            },
            aredhel : {
                nome : "Aredhel, a Branca",
                raca : "Elfa Noldo",
                quote : "Sou tua irmã, e não tua serviçal, e fora de teus grilhões seguirei como me parecer bom. E, se me recusas uma escolta, então irei sozinha.",
                descricao : "",
                imagem : "aredhel.png",
                lugares : ["vinyamar", "gondolin", "nevrast", "nanelmoth"],
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
                lugares : ["hithlum", "lammoth"],
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
                lugares : ["himring", "nargothrond", "menegroth", "lammoth"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            caranthir : {
                nome : "Caranthir, o moreno",
                raca : "Elfo Noldo",
                quote : "Sim e mais! Não deixeis que os filhos de Finarfin corram de lá para cá, contando histórias para esse Elfo Escuro em suas cavernas! Quem os fez nossos arautos para lidar com ele? E, embora tenham vindo, de fato, a Beleriand, que não esqueçam tão rápido que seu pai é um senhor dos Noldor, ainda que sua mãe seja doutra gente.",
                descricao : "",
                imagem : "caranthir.jpg",
                lugares : ["helevorn", "thargelion", "rerir", "brechademaglor", "mithrim", "amonereb", "menegroth"],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            },
            curufin : {
                nome : "Curufin, o matreiro",
                raca : "Elfo Noldo",
                quote : "O que procuras, Elfo Escuro, em minhas terras? Uma matéria urgente, talvez, para fazer com que alguém tão tímido do sol viaje de dia.",
                descricao : "",
                imagem : "curufin.jpg",
                lugares : ["drengist", "ardgalen", "dordaedeloth", "himlad", "aglon", "nanelmoth", "thargelion", "doriath", "tolsirion", "nargothrond", "himring", "dolmed", "mithrim", "ossiriand", "menegroth"],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            },
            amrod : {
                nome : "Amrod",
                raca : "Elfo Noldo",
                quote : "e os mais novos, Amrod e Amras, que eram irmãos gêmeos, semelhantes em ânimo e rosto.",
                descricao : "",
                imagem : "amrod.jpg",
                lugares : ["drengist", "mithrim", "ardgalen", "dordaedeloth", "leste", "estolad", "ramdal", "amonereb", "dolmed", "ossiriand", "menegroth", "fozesdosirion"],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            },
            amras : {
                nome : "Amras",
                raca : "Elfo Noldo",
                quote : "e os mais novos, Amrod e Amras, que eram irmãos gêmeos, semelhantes em ânimo e rosto.",
                descricao : "",
                imagem : "amras.jpg",
                lugares : ["drengist", "mithrim", "ardgalen", "dordaedeloth", "leste", "estolad", "ramdal", "amonereb", "dolmed", "ossiriand", "menegroth", "fozesdosirion"],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
            }
        }
    },
 
    finarfin : {
        nome : "Casa de Finarfin",
        descricao : "",
        personagens : {
            earwen : {
                nome : "Ëarwen",
                raca : "Elfa Teleri",
                quote : "",
                descricao : 'Conhecida como "a donzela-cisne de Alqualondë", Eärwen é a filha do Rei Olwë, senhor dos elfos Teleri, e sobrinha do Rei Thingol de Doriath. Desposando Finarfin, ela uniu a casa real dos Teleri à Terceira Casa dos Noldor e teve filhos ilustres, entre eles Finrod, Galadriel e Angrod. Sua linhagem e laços afetivos tiveram peso decisivo na história dos Exilados: motivaram o arrependimento e o retorno de Finarfin a Valinor após o Fratricídio contra o povo dela, levaram Anairë (esposa de Fingolfin) a permanecer em Aman por amizade a ela e garantiram aos seus filhos permissão e trânsito livre no reino protegido de Thingol, na Terra-média.',
                imagem : "earwen.jpeg",
                lugares : [""],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            finrod : {
                nome : "Finrod Felagund",
                raca : "Elfo Noldo",
                quote : "Um juramento também hei de fazer, e devo estar livre para cumpri-lo e adentrar a escuridão. Nem nada de meu reino há de durar para que um filho possa herdá-lo.",
                descricao : "",
                imagem : "finrod.jpg",
                lugares : ["tolsirion", "nargothrond", "baradnimras", "ossiriand", "eglarest"],
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
                lugares : ["gondolin", "nevrast", "vinyamar", "nantathrin", "fozdosirion"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            maeglin : {
                nome : "Maeglin",
                raca : "Elfo Noldo/Sinda",
                quote : "Muito tendes com isso, pois, se me matardes, rápida ou lentamente, perdereis grandes novas acerca da cidade de Gondolin, que vosso mestre regozijar-se-ia de ouvir.",
                descricao : "",
                imagem : "maeglin.jpg",
                lugares : ["nanelmoth", "gondolin", "nogrod", "belegost", "echoriath", "anfauglith"],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
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
                lugares : ["dorlómin", "nargothrond", "amonrûdh", "tumhalad"]
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
            },
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
                imagem : "cirdan.jpg",
                lugares : ["vinyamar", "brithombar", "eglarest"],
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
                lugares : ["menegroth", "nanelmoth"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            luthien : {
                nome : "Lúthien Tinúviel",
                raca : "Elfa Sinda",
                quote : "Avante! A hora já chegou, de Angband o senhor tombou! Desperta! Estamos sós, lamento, ante o pavoroso assento.",
                descricao : "",
                imagem : "luthien.jpeg",
                lugares : ["neldoreth", "doriath", "menegroth", "nargothrond", "tolsirion", "anfauglith", "tolgalen", "ossiriand"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            eol : {
                nome : "Eöl",
                raca : "Elfo Sinda",
                quote : "És da casa de Eöl, Maeglin, meu filho, e não da dos Golodhrim. Toda esta terra é a terra dos Teleri, e não tratarei, nem deixarei que meu filho trate, com os assassinos de nossa gente, os invasores e usurpadores de nossos lares. Nisto vais me obedecer, ou hei de te pôr em grilhões.",
                descricao : "",
                imagem : "eol.jpg",
                lugares : ["menegroth", "region", "nanelmoth", "eredlindon", "nogrod", "belegost", "himlad", "brithiach", "gondolin"],
                credito : "talyris",
                creditoLink : "https://www.tumblr.com/talyris"
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
                lugares : ["vinyamar", "nevrast"],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            orome : {
                nome : "Oromë",
                raca : "Vala",
                quote : "E Oromë, domador de feras, cavalgava também, de quando em vez, na escuridão das florestas não iluminadas;",
                descricao : "",
                imagem : "orome.jpeg",
                lugares : [""],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            manwe : {
                nome : "Manwë",
                raca : "Vala",
                quote : "Este reino não hás de tomar para ti injustamente, pois muitos outros labutaram aqui não menos do que tu.",
                descricao : "",
                imagem : "manwe.webp",
                lugares : [""],
                credito : "alba_r_art",
                creditoLink : "https://www.instagram.com/alba_r_art"
            },
            aule : {
                nome : "Aulë",
                raca : "Vala",
                quote : "Que Eru abençoe minha obra e a corrija!",
                descricao : "",
                imagem : "aule.jpg",
                lugares : [""],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            uinen : {
                nome : "Uinen",
                raca : "Maia",
                quote : "",
                descricao : 'Conhecida como a "senhora dos mares", Uinen é a esposa de Ossë e um espírito ligado às águas. Dotada de uma natureza ao mesmo tempo afetuosa e implacável, ela revelou o poder destrutivo de seu luto durante o Fratricídio em Alqualondë, quando suas lágrimas pelos marinheiros mortos fizeram o mar se erguer em fúria para afundar os navios dos Noldor.',
                imagem : "uinen.jpg",
                lugares : [""],
                credito : "elendilions",
                creditoLink : "https://ko-fi.com/elendilions/gallery"
            },
            glaurung : {
                nome : "Glaurung, Pai de Dragões",
                raca : "Dragão",
                quote : "Filho adotivo ingrato, proscrito, matador de teu amigo, ladrão de amor, usurpador de Nargothrond, capitão imprudente e desertor de tua família.",
                descricao : "",
                imagem : "glaurung.jpeg",
                lugares : ["nargothrond", "tumhalad"],
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