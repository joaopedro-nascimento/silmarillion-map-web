# Beleriand Interactive Map

Um mapa interativo e linha do tempo da Primeira Era de Arda (O Silmarillion, de J.R.R. Tolkien), desenvolvido como projeto de estudos de Engenharia de Computação.

![Preview do Mapa](imagens/beleriand.jpg)

## Destaques
* Mapa de Beleriand desenhado à mão e digitalizado especificamente para o projeto.
* Cada lugar é posicionado por coordenadas percentuais sobre o mapa e identificado por uma inscrição própria (ou por texto, quando não há imagem).
* Ao clicar em um lugar, personagem ou evento, abre-se um painel em estilo pergaminho com imagem, tipo, citação, descrição e crédito do artista.
* Lugares listam os personagens ligados a eles, personagens listam seus lugares, e eventos listam ambos. Basta clicar para navegar entre as entradas.
* Régua rolável (arraste, roda do mouse ou setas) do ano 1 ao 590 da Primeira Era, com marcadores de eventos e um cartão-resumo com link "Mais…" para o painel completo.
* Ao selecionar um evento, os lugares relacionados brilham no mapa.
* HTML, CSS e JavaScript puros, sem frameworks ou etapa de build.

## Como executar

Não há instalação. Basta abrir o index.html no navegador, ou servir a pasta localmente:

bash
python -m http.server 8000

e acessar http://localhost:8000.

## Como adicionar conteúdo
 
Os dados ficam em objetos JavaScript, então não é preciso mexer na lógica.
 
* **Lugar:** adicione uma entrada em `lugares` (`script.js`) com `nome`, `tipo`, `descricao`, posição `x`/`y` (em %), `icone`, `largura` e a lista de `personagens`. A ilustração do painel vai em `imagens/lugares/<id>.jpg`.
* **Personagem:** adicione uma entrada em `personagens` (`script.js`) com `nome`, `raca`, `quote`, `imagem` e `lugares`.
* **Evento:** adicione uma entrada em `eventos` (`timeline.js`) com `nome`, `ano`, `resumo`, `lugares` e `personagens`. Se `ano` ultrapassar `ANO_MAX`, ajuste a constante.


## Roadmap
 
- [x] Painel lateral com informações detalhadas de cada local e personagem
- [x] Linha do tempo interativa com eventos por ano
- [ ] Preencher as descrições completas de personagens e eventos
- [ ] Cadastrar os lugares e personagens citados nos eventos que ainda não existem (ex.: Angband, Dorthonion, Maedhros)
- [ ] Filtro de eventos por intervalo de anos
- [ ] Modo "Livre de Spoilers" por capítulo do livro
- [ ] Zoom e arrastar no mapa (possível migração para Leaflet.js com `L.CRS.Simple`)
- [ ] Ajustes de responsividade para telas pequenas

## Créditos
 
* Mapa e inscrições: autoria própria.
* Retratos de personagens: [elendilions](https://x.com/elendilions), conforme indicado em cada entrada.
* Textos e citações: baseados em *O Silmarillion*, de J.R.R. Tolkien (tradução em português).
* Este é um projeto de fã, sem fins lucrativos e sem vínculo com os detentores dos direitos da obra.

---
*Desenvolvido por João Pedro do Nascimento*