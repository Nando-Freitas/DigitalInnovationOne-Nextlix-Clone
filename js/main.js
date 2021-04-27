//Dados sobre os filmes
var filmes = {
    lista : [["dory","Procurando Dory","img/dory-bg.jpg", "Amigável, porém esquecida, Dory começa uma busca por seus pais há muito perdidos, e todo mundo aprende alguma coisa sobre o real significado da família ao longo da jornada."],
    ["aladin","Aladin","img/aladin-bg.jpg","Conta a história de um menino cujo seu melhor amigo é o génio da lâmpada. Juntos irão viver grandes aventuras – salvando, muitas vezes, a doce filha do sultão, Jasmine."],
    ["ralph","Detona Ralph","img/ralph-bg.jpg","Ralph está cansado de ser desprezado no seu próprio jogo de fliperama. Para ganhar a atenção do herói Felix e todos os outros personagens, o vilão tem um plano e sai em busca de uma medalha, com a intenção de provar o seu valor."],
    ["frozen","Frozen","img/frozen-bg.jpg","A caçula Anna adora sua irmã Elsa, mas um acidente envolvendo os poderes especiais da mais velha, durante a infância, fez com que os pais as mantivessem afastadas. Após a morte deles, as duas cresceram isoladas no castelo da família, até o dia em que Elsa deveria assumir o reinado de Arendell."],
    ["cars","Carros","img/cars-bg.jpg","Ao viajar para a Califórnia, o famoso carro de corridas Relâmpago McQueen se perde e vai parar em Radiator Springs, uma cidadezinha na Rota 66. Ele conhece novos amigos e aprende lições que mudam sua forma de encarar a vida."],
    ["lion-king","O rei leão","img/lion-king-bg.jpg","Simba é um jovem leão cujo destino é se tornar o rei da selva. Entretanto, uma armadilha elaborada por seu tio Scar faz com que Mufasa, o atual rei, morra ao tentar salvar o filhote. Consumido pela culpa, Simba deixa o reino rumo a um local distante, onde encontra amigos que o ensinam a mais uma vez ter prazer pela vida."],
    ["toy-story","Toy Story","img/toy-story-bg.jpg","Quando um reluzente 'ranger' do espaço chamado Buzz Lightyear invade o mundo de um cowboy de corda chamado Woody, desencadeia uma hilariante briga entre brinquedos. Agora o favoritismo de Woody no coração do seu jovem dono está em perigo... assim como as vidas de Buzz e Woody."],
    ["hercules","Hércules","img/hercules-bg.jpg","Hércules, filho dos deuses gregos Zeus e Hera, perde a imortalidade ainda quando criança. Agora já adulto, precisa provar ser um verdadeiro herói para poder recuperá-la, para isso enfrentará inúmeros perigos incluíndo o malvado e poderoso deus Hades."],
    ["mulan","Mulan","img/mulan-bg.jpg","Na antiga China, durante a guerra, todos os homens são convocados para lutar. Mas, um pobre velho, que pela idade não poderia mais lutar, descobre que sua filha Mulan toma o seu lugar, vestindo-se como homem e permanecendo em segredo. Se isso for descoberto, o castigo será severo. Agora, durante a guerra, Mulan ganha a proteção de um pequeno dragão, cuja missão é cuidar para que ela volte a salvo"]],
    listaHanna : [["flintstones","Os Flintstones","img/flintstones-bg.jpg","Os Flintstones parecem uma família típica de classe média da década de 60, mas suas aventuras são ambientadas na Idade da Pedra. Eles utilizam eletrodomésticos que são uma mistura de tecnologia com artefatos de pedra lascada e dinossauros."],
    ["jetsons","Os Jetsons","img/jetsons-bg.jpg","Essa série introduziu no imaginário da maioria das pessoas o que seria o futuro da Humanidade: carros voadores, cidades suspensas, trabalho automatizado, toda sorte de aparelhos eletrodomésticos e de entretenimento, robôs como criados, etc."],
    ["scooby","Scooby-Doo","img/scooby-bg.jpg","O Show do Scooby-Doo (The Scooby-Doo Show, originalmente) é uma série de televisão composta por episódios originalmente de três diferentes séries empacotadas. Os episódios foram ao ar de setembro de 1976 a dezembro de 1978 na ABC, como um segmento de The Scooby-Doo/Dynomutt Hour em sua primeira temporada, Scooby's All Star Laff-a-Lympics em sua segunda temporada e Scooby's All-Stars em sua terceira temporada."],
    ["jonny","Jonny Cast","img/jonny-bg.jpg","As aventuras de um garoto, de 10 anos, que junto com o seu pai cientista e um grupo de amigos, viajam em missões secretas à serviço do governo americano, resolvendo diversos mistérios."],
    ["colmeia","Zé Colmeia","img/colmeia-bg.jpg","Zé Colmeia e Catatau vivem no Parque Jellystone, que é uma imitação 'caricaturizada' do famoso Parque Nacional de Yellowstone, nos Estados Unidos, sempre em busca de cestas de piquenique que rouba de turistas incautos. Seu companheiro, de raciocínio um pouco lerdo, era o também urso Catatau."],
    ["shazzan","Shazzan","img/Shazzan.jpg","Shazzan (do original Shazzan) é um personagem de desenhos animados criado por Alex Toth, produzido pela Hanna-Barbera. Foi exibido em 1967 pelo canal de televisão estadunidense CBS, entre 9 de setembro de 1967 a 6 de setembro de 1969, num total de 36 episódios, de aproximadamente 10 minutos cada."],
    ["loopy","Loopy De Loop","img/loopy-bg.jpg","Loopy De Loop is a theatrical cartoon short series produced and directed by William Hanna and Joseph Barbera after leaving MGM and opening their new studio, Hanna-Barbera Productions. 48 cartoons were produced between 1959 and 1965, and released to theaters by Columbia Pictures. In 1969, Loopy's film shorts were gathered together into a syndicated television series, simply titled Loopy de Loop."],
    ["potamus","Peter Potamus","img/potamus-bg.jpg","A dupla viaja pelo mundo e pelo tempo a bordo de um balão mágico no qual existe uma máquina do tempo em forma de relógio e cada vez que Peter gira os ponteiros ele e Tico-Mico vão para outras épocas. Para escapar das encrencas, Peter abre a sua bocarra e provoca um ciclone que varre os inimigos."],
    ["manda","Manda Chuva","img/manda-bg.jpg","O personagem central, Manda-Chuva é o líder de uma gangue de Nova York de gatos de rua: Bacana, Espeto, Batatinha, Gênioe Chu-Chu. Manda-Chuva e sua gangue foram inspirados por personagens da comédia popular You'll Never Get Rich (mais tarde chamada de The Phil Silvers Show)."]],
    listaNick : [["ginger","Ginger","img/ginger-bg.jpg","O desenho animado acompanha a vida da pré-adolescente Ginger Foutley com seus amigos, enquanto tentam se encaixar na vida social na escola e evitar situações embaraçosas."],
    ["neutron","Jimmy Neutron","img/neutron-bg.jpg","Jimmy Neutron is the smartest kid in town. As a genius, Jimmy thinks most things can be solved with the invention of a new gizmo. But Jimmy usually takes the easy way out, and his backfiring gadgets result in comedic adventures."],
    ["rugrats","Rugrats","img/rugrats-bg.jpg","Os bebês da série, Tommy Pickles, Chuckie Finster e os gêmeos Phil e Lil DeVille são capazes de se comunicar entre si em uma linguagem que os adultos não compreendem. "],
    ["rocket","Rocket Power","img/rocket-bg.jpg","Cable channel Nickelodeon's animated children's television series 'Rocket Power' is propelled to the silver screen for the first time with this full-length feature film that follows the exploits of Otto Rocket, Reggie, Twister and Sam. Armed with a spirit for adventure, they embark on a Hawaiian extreme sporting escapade. But amid the killer surfing and skating, the gang also finds a spooky spirit in the jungle!"],
    ["pirados","Os Castores Pirados","img/pirados-bg.jpg","The Angry Beavers is an American animated television series created by Mitch Schauer for the Nickelodeon channel. The series revolves around Daggett and Norbert Beaver, two young beaver brothers who have left their home to become bachelors in the forest near the fictional Wayouttatown, Oregon. "],
    ["rocko","A vida moderna de Rocko","img/rocko-bg.jpg","Rocko, um wallaby australiano tímido, encontra uma forma divertida de enfrentar os dilemas de sua vida ao conhecer Heffer e Spunky, Ed e Filburt, dois animais que não demoram a ser tornar seus melhores amigos."],
    ["bob","Bob Esponja","img/bob-bg.jpg","Onde está Gary? Segundo Bob Esponja, Gary foi 'caracolstrado' pelo temível Rei Poseidon e levado para a cidade perdida de Atlantic City. Junto a Patrick Estrela, ele sai em uma missão de resgate ao querido amigo, e nesta jornada os dois vão conhecer novos personagens e viver inimagináveis aventuras."],
    ["doug","Doug","img/doug-bg.jpg","Conheça as provações e os apuros de Doug, um menino de onze anos e meio que, quando não está brincando com seus amigos, gosta de escrever em seu diário e fantasiar que é um super-herói."],
    ["catdog","CatDog","img/catdog-bg.jpg","CatDog foi uma série animada americana do canal Nickelodeon, criada por Peter Hannan. Conta a história de dois irmãos siameses: um Gato inteligente e ranzinza e um Cão idiota e alegre, ambos constituíndo um corpo em cujo cada ponta possui uma cabeça e um par de patas. Os dois formam a criatura chamada CatDog. A série durou entre 1998 e 2001 e foi reprisada pela Nickelodeon Brasil de 2002 a 2010."]],
    listaCartoon : [["steven","Steven Universo","img/steven-bg.jpg","Acredite em Steven! Steven Universo é um herói metade humano metade Gem que está aprendendo a salvar o mundo com os poderes mágicos que vêm do seu umbigo. Steven pode até não ser tão poderoso quanto as Crystal Gems. Ou tão esperto. Mas isso não o impede de se unir a Garnet, Ametista e Pérola em suas aventuras mágicas – nas quais Steven sempre encontra uma forma surpreendente de salvar o dia."],
    ["knd","A turma do bairoo","img/knd-bg.jpg","The villains of the Kids Next Door, lead by Father, join forces to resurrect the Ultimate Evil, Grandfather, a tyrant who once ruled the world many years ago when most of the villains were themselves kids."],
    ["dexter","O laboratório de Dexter","img/dexter-bg.jpg","Trata-se de um desenho cujo foco é um menino gênio chamado Dexter, que possui um imenso laboratório secreto conectado a seu quarto.  O garoto está constantemente em conflito com sua endiabrada irmã mais velha, Dee Dee.  Dexter possui um arqui-inimigo que se intitula Mandark, outra criança super-dotada, e que tem uma gargalhada muito peculiar."],
    ["bravo","Johnny Bravo","img/bravo-bg.jpg","Com o cabelo grande e roupas pretas apertadas, Johnny Bravo é conhecido por seus golpes de karatê, sua forte atração por mulheres e garotas bonitas. Apesar de sempre ser rejeitado, ele nunca desiste de encontrar uma namorada."],
    ["poderosas","As Meninas Superpoderosas","img/super-poderosas.jpg","Florzinha, Lindinha e Docinho são as Meninas Superpoderosas, três irmãs criadas em laboratório por um professor e que possuem uma missão: salvar o mundo antes da hora de dormir."],
    ["vacafrango","A vaca e o frango","img/vaca-bg.jpg","O universo de Cow and Chicken é bastante bizarro, uma vaca é irmã de um frango e os dois são filhos de humanos, dos quais apenas a parte inferior é mostrada. Além disso, Bum de Fora, um sujeito nu vermelho que se assemelha ao demônio, completa o cenário da série, que conta com outros personagens igualmente bizarros."],
    ["foster","Mansão Foster para amigos imaginários","img/foster-bg.jpg","A Mansão Foster para Amigos Imaginários é uma série animada de televisão que foi ao ar entre agosto de 2004 a maio de 2009 com um total de 79 episódios em seis temporadas. A premissa é baseada em uma pergunta simples: Em um mundo... onde amigos imaginários estão vivendo, seres tangíveis, o que acontece com esses amigos quando as crianças crescem? Eles são abandonados, ou eles vivem?"],
    ["billymandy","Billy & Mandy","img/billy-bg.jpg","A história do desenho se inicia quando Puro Osso, o Ceifador Sinistro, entra na casa de Billy, para ceifar a alma de seu hamster, mas Mandy não deixa que isso aconteça, e desafia Puro Osso a um jogo de limbo. Se Billy e Mandy ganhasse, eles ficariam com o hamster e Puro Osso se tornaria amigo deles para sempre, e, se Puro Osso ganhasse ficaria com a alma do hamster. "],
    ["ben10","Ben 10","img/ben10-bg.jpg","Aos 10 anos de idade, Benjamim (Ben) Tennyson descobre um dispositivo alienígena na floresta chamado o Omnitrix, que lhe permite se transformar em 10 diferentes espécies alienígenas. Ao longo de suas férias de verão, viajando o país num furgão com seu avô Max e de sua prima Gwen, Ben luta contra o crime e alienígenas do mal com seus novos poderes, adquirindo a capacidade de se transformar em mais seis novos alienígenas ao longo do caminho."]]

}

//Oculta descrição dos filmes das produtoras
function ocultar(){
    document.getElementById("filme-descricao").style.display = "none";
    document.getElementById("filme-descricaoHanna").style.display = "none";
    document.getElementById("filme-descricaoNick").style.display = "none";
    document.getElementById("filme-descricaoCartoon").style.display = "none";
}

//Mostra descrição de filmes Disney
function mostrar(elemento){
    document.getElementById("filme-descricao").style.display = "block";
    for(let i = 0; i <= filmes.lista.length;i++){
        if(elemento.id == filmes.lista[i][0]){
            document.getElementById("filme-descricao").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,0.50)100%), url("+filmes.lista[i][2]+")";
            document.getElementById("filme-descricao").innerHTML = "<div class='filmes-info'><h3 class='titulo-descricao'>"+filmes.lista[i][1]+"</h3><p class='filmes-info-desc'>"+filmes.lista[i][3]+"</p><div class='botoes'><button role='button' class='botao'><i class='fas fa-play'></i>ASSITIR AGORA</button><button role='button' class='botao'><i class='fas fa-info-circle'></i>MAIS INFORMAÇÕES</button></div>";
            document.getElementById("filme-descricao").style.backgroundSize = "cover";
        }else{
            continue;
        }
    }
    document.getElementById("filme-descricao").innerHTML = "<button class='fecha-descricao'><i class='fas fa-times'></i></button>";
}

//Mostra descrição de filmes Hanna Barbera
function mostrarHanna(elemento){
    document.getElementById("filme-descricaoHanna").style.display = "block";
    for(let i = 0; i <= filmes.listaHanna.length;i++){
        if(elemento.id == filmes.listaHanna[i][0]){
            document.getElementById("filme-descricaoHanna").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,0.50)100%), url("+filmes.listaHanna[i][2]+")";
            document.getElementById("filme-descricaoHanna").innerHTML = "<div class='filmes-info'><h3 class='titulo-descricao'>"+filmes.listaHanna[i][1]+"</h3><p class='filmes-info-desc'>"+filmes.listaHanna[i][3]+"</p><div class='botoes'><button role='button' class='botao'><i class='fas fa-play'></i>ASSITIR AGORA</button><button role='button' class='botao'><i class='fas fa-info-circle'></i>MAIS INFORMAÇÕES</button></div>";
            document.getElementById("filme-descricaoHanna").style.backgroundSize = "cover";
        }else{
            continue;
        }
    }
    document.getElementById("filme-descricaoHanna").innerHTML = "<button class='fecha-descricao'><i class='fas fa-times'></i></button>";
}

//Mostra descrição de filmes Nickelodeon
function mostrarNick(elemento){
    document.getElementById("filme-descricaoNick").style.display = "block";
    for(let i = 0; i <= filmes.listaNick.length;i++){
        if(elemento.id == filmes.listaNick[i][0]){
            document.getElementById("filme-descricaoNick").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,0.50)100%), url("+filmes.listaNick[i][2]+")";
            document.getElementById("filme-descricaoNick").innerHTML = "<div class='filmes-info'><h3 class='titulo-descricao'>"+filmes.listaNick[i][1]+"</h3><p class='filmes-info-desc'>"+filmes.listaNick[i][3]+"</p><div class='botoes'><button role='button' class='botao'><i class='fas fa-play'></i>ASSITIR AGORA</button><button role='button' class='botao'><i class='fas fa-info-circle'></i>MAIS INFORMAÇÕES</button></div>";
            document.getElementById("filme-descricaoNick").style.backgroundSize = "cover";
        }else{
            continue;
        }
    }
    document.getElementById("filme-descricaoNick").innerHTML = "<button class='fecha-descricao'><i class='fas fa-times'></i></button>";
}

//Mostra descrição de filmes Cartoon Network
function mostrarCartoon(elemento){
    document.getElementById("filme-descricaoCartoon").style.display = "block";
    for(let i = 0; i <= filmes.listaCartoon.length;i++){
        if(elemento.id == filmes.listaCartoon[i][0]){
            document.getElementById("filme-descricaoCartoon").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,0.50)100%), url("+filmes.listaCartoon[i][2]+")";
            document.getElementById("filme-descricaoCartoon").innerHTML = "<div class='filmes-info'><h3 class='titulo-descricao'>"+filmes.listaCartoon[i][1]+"</h3><p class='filmes-info-desc'>"+filmes.listaCartoon[i][3]+"</p><div class='botoes'><button role='button' class='botao'><i class='fas fa-play'></i>ASSITIR AGORA</button><button role='button' class='botao'><i class='fas fa-info-circle'></i>MAIS INFORMAÇÕES</button></div>";
            document.getElementById("filme-descricaoCartoon").style.backgroundSize = "cover";
        }else{
            continue;
        }
    }
    document.getElementById("filme-descricaoCartoon").innerHTML = "<button class='fecha-descricao'><i class='fas fa-times'></i></button>";
}
