const infoPanel = document.getElementById('info-panel');
const planetTitleDisplay = document.getElementById('planet-name');
const detailsPanel = document.getElementById('planetDetails');
const planetContentContainer = detailsPanel.querySelector('.planet-content');
const quizSection = document.querySelector('.app');
const solarElements = document.querySelectorAll('.sun, .planet');
const closeMenu = document.querySelector('.close-menu');

closeMenu.addEventListener('click', () => {
    detailsPanel.style.display = 'none';
    quizSection.style.display = 'flex';
    closeMenu.style.display = 'none';
});

const toggleInfoPanel = (show, text = '') => {
    planetTitleDisplay.textContent = text;
    infoPanel.style.opacity = show ? '1' : '0';
    infoPanel.style.pointerEvents = show ? 'auto' : 'none';
};

function updatePlanetDetails(planet) {
    quizSection.style.display = 'none';
    detailsPanel.style.display = 'flex';
    closeMenu.style.display = 'flex';
    planetContentContainer.innerHTML = '';

    if (!planet) {
        planetContentContainer.innerHTML = `
            <h3>O Sol: Centro de Tudo</h3>
            <p>O Sol, estrela central do sistema solar, está a cerca de 150 milhões de quilômetros da Terra e é essencial para a vida, fornecendo luz e calor. Com um diâmetro de 1,4 milhão de quilômetros, pode conter 1,3 milhão de Terras. Composto por 74% de hidrogênio e 24% de hélio, sua energia vem da fusão nuclear no núcleo. Sua gravidade mantém planetas e outros corpos em órbita, enquanto influencia o clima e os ciclos biológicos terrestres.</p>
            <img src="assets/images/realisticsun.jpg" alt="Sol" class="planet-image" style="max-width: 300px; border-radius: 50%;">
            <p style="font-size: 0.9em; margin: 25px;"></p>`;
        return;
    }

    const planetImage = document.createElement('img');
    planetImage.src = planet.image;
    planetImage.alt = `Imagem de ${planet.name}`;
    planetImage.classList.add('planet-image');

    const textInfoDiv = document.createElement('div');
    textInfoDiv.classList.add('planet-text-info');

    const nameElement = document.createElement('h3');
    nameElement.textContent = planet.name;

    const statsList = document.createElement('div');
    statsList.classList.add('planet-stats-list');

    const createStatItem = (label, value) => {
        const item = document.createElement('div');
        item.classList.add('planet-stat-item');
        item.innerHTML = `<span>${label}:</span><span>${value}</span>`;
        return item;
    };

    statsList.appendChild(createStatItem('Diâmetro', planet.diameter));
    statsList.appendChild(createStatItem('Temperatura Média', planet.temperature));
    statsList.appendChild(createStatItem('Distância da Estrela', planet.distance));

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = planet.description;

    textInfoDiv.appendChild(nameElement);
    textInfoDiv.appendChild(statsList);
    textInfoDiv.appendChild(descriptionElement);

    planetContentContainer.appendChild(planetImage);
    planetContentContainer.appendChild(textInfoDiv);
}

solarElements.forEach(element => {
    element.addEventListener('mouseenter', () => toggleInfoPanel(true, element.alt));
    element.addEventListener('mouseleave', () => toggleInfoPanel(false));
    element.addEventListener('click', () => {
        document.querySelector('.menu').scrollIntoView({ behavior: 'smooth' });
        const planetId = element.classList.contains('sun') ? 'sun' : element.classList[1];
        const selectedPlanet = (planetId === 'sun') ? null : planetsData.find(p => p.id === planetId);
        updatePlanetDetails(selectedPlanet);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    detailsPanel.style.display = 'none';
    quizSection.style.display = 'flex';
});