const planetsData = [
    {
        "id": "sun",
        "name": "Sol",
        "image": "assets/images/planet_mercury.png", 
        "diameter": "4.879 km",
        "temperature": "167°C",
        "distance": "0.39 UA",
        "description": "O menor planeta do nosso sistema solar e o mais próximo do Sol. Sua superfície é marcada por crateras e sua órbita em torno do Sol leva apenas 88 dias terrestres."
      },
    {
      "id": "mercury",
      "name": "Mercúrio",
      "image": "assets/images/realisticmercury.png", 
      "diameter": "4.879 km",
      "temperature": "167°C",
      "distance": "0.39 UA",
      "description": "Mercúrio é o planeta mais próximo do Sol e o menor do sistema solar, com um diâmetro de apenas 4.879 km. Sua superfície rochosa é marcada por crateras, semelhante à da Lua, devido à falta de uma atmosfera significativa para protegê-lo de impactos. As temperaturas em Mercúrio variam drasticamente, podendo atingir 427°C durante o dia e cair para -173°C à noite, devido à sua proximidade com o Sol e à ausência de uma atmosfera que retenha calor."
    },
    {
      "id": "venus",
      "name": "Vênus",
      "image": "assets/images/realisticvenus.jpeg", 
      "diameter": "12.104 km",
      "temperature": "464°C",
      "distance": "0.72 UA",
      "description": "Vênus, o segundo planeta a partir do Sol, é frequentemente chamado de 'planeta irmão' da Terra por causa de seu tamanho semelhante (diâmetro de 12.104 km). No entanto, sua atmosfera densa, composta principalmente de dióxido de carbono, cria um efeito estufa extremo, resultando em temperaturas médias de 464°C, tornando-o o planeta mais quente do sistema solar. Sua superfície é coberta por vulcões, montanhas e planícies de lava."
    },
    {
      "id": "earth",
      "name": "Terra",
      "image": "assets/images/realisticearth.png",
      "diameter": "12.756 km",
      "temperature": "15°C",
      "distance": "1 UA",
      "description": "A Terra é o nosso planeta natal, um corpo rochoso e terrestre com uma superfície sólida e ativa, repleta de montanhas, vales, cânions e planícies. É conhecida como um 'planeta oceânico', já que cerca de 70% de sua superfície é coberta por água. Sua atmosfera, composta principalmente de nitrogênio e oxigênio, é essencial para a vida, além de nos proteger de meteoritos."
    },
    {
      "id": "mars",
      "name": "Marte",
      "image": "assets/images/realisticmars.jpg",
      "diameter": "6.792 km",
      "temperature": "-65°C",
      "distance": "1.52 UA",
      "description": "Marte, conhecido como o 'Planeta Vermelho' devido ao óxido de ferro (ferrugem) em sua superfície, é o quarto planeta a partir do Sol. Com um diâmetro de 6.792 km, é o sétimo maior planeta. Sua atmosfera fina, composta principalmente de dióxido de carbono, resulta em temperaturas médias de -65°C. Marte é um foco de exploração espacial devido a evidências de água líquida no passado, sugerindo potencial para habitabilidade."
    },
    {
      "id": "jupiter",
      "name": "Júpiter",
      "image": "assets/images/realisticjupiter.jpeg",
      "diameter": "142.984 km",
      "temperature": "-110°C",
      "distance": "5.2 UA",
      "description": "Júpiter é o maior planeta do sistema solar, com um diâmetro impressionante de 142.984 km. Como um gigante gasoso, é composto principalmente de hidrogênio e hélio, semelhante ao Sol. Sua característica mais famosa é a Grande Mancha Vermelha, uma tempestade maior que a Terra que persiste há séculos. Júpiter tem uma temperatura média de -110°C na parte superior de suas nuvens e possui dezenas de luas e um sistema de anéis fracos."
    },
    {
      "id": "saturn",
      "name": "Saturno",
      "image": "assets/images/realisticsaturn.jpg",
      "diameter": "120.536 km",
      "temperature": "-140°C",
      "distance": "9.58 UA",
      "description": "Saturno, o segundo maior planeta, com um diâmetro de 120.536 km, é um gigante gasoso conhecido por seus anéis espectaculares, feitos de partículas de gelo e rocha. Sua atmosfera é composta principalmente de hidrogênio e hélio, com uma temperatura média de -140°C. Saturno é o planeta menos denso do sistema solar, com uma densidade menor que a da água. Ele também possui um grande número de luas, incluindo Titã, maior que Mercúrio."
    },
    {
      "id": "uranus",
      "name": "Urano",
      "image": "assets/images/realisticuranus.jpg",
      "diameter": "51.118 km",
      "temperature": "-205°C",
      "distance": "19.22 UA",
      "description": "Urano, o sétimo planeta a partir do Sol, é um gigante de gelo com um diâmetro de 51.118 km, sendo o terceiro maior planeta. Sua atmosfera contém hidrogênio, hélio e metano, que absorve luz vermelha e dá ao planeta sua cor azul-esverdeada. Urano é único por sua rotação inclinada, com um eixo quase paralelo ao plano orbital. Sua temperatura média é de -195°C, refletindo sua distância do Sol."
    },
    {
      "id": "neptune",
      "name": "Netuno",
      "image": "assets/images/realisticneptune.jpeg",
      "diameter": "49.528 km",
      "temperature": "-214°C",
      "distance": "30.05 UA",
      "description": "Netuno, o oitavo e mais distante planeta do Sol, tem um diâmetro de 49.528 km, sendo o quarto maior planeta. Como um gigante de gelo, sua atmosfera é semelhante à de Urano, com hidrogênio, hélio e metano, resultando em uma cor azul profunda. Netuno é conhecido por seus ventos extremamente fortes, os mais rápidos do sistema solar, e uma temperatura média de -200°C. Sua distância média do Sol é de 4.515 milhões de quilômetros."
    }

  ];