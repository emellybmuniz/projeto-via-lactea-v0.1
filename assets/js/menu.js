const infoPanel = document.getElementById('info-panel');
const solarElements = document.querySelectorAll('.sun, .planet');
const planetTitle = document.getElementById('planet-name');


const togglePanel = (show) => {
  infoPanel.style.opacity = show ? '1' : '0';
};

solarElements.forEach(body => {
  body.addEventListener('mouseenter', () => {
      const altText = body.alt;
      planetTitle.textContent = altText;
      togglePanel(true)
});
  body.addEventListener('mouseleave', () => togglePanel(false));
});

solarElements.forEach(body => {
    body.addEventListener('click', () => {
        const sectionToScroll = document.querySelector('.menu')
        sectionToScroll.scrollIntoView({ behavior: 'smooth' });
    });
})