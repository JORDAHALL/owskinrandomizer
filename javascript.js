// CHECKBOX FUNCTION
const box = document.querySelectorAll('input');
const skin = document.querySelectorAll('.skin');

for(i = 0; i < skin.length; i++) {
    box[i].addEventListener ('click', function (ev) {
        ev.target.parentNode.classList[ ev.target.checked ? 'add' : 'remove'] ('enabled');
      }, false);
}

//RANDOMIZER FUNCTION

const btn = document.getElementById('randomize');

function pickRandomSkin() {
    const enabledSkins = document.querySelectorAll('.enabled')
    return enabledSkins[Math.floor(Math.random() * enabledSkins.length)];
}

//BUTTON FUNCTION

btn.addEventListener('click', () => {   
    const welcome = document.querySelector('.welcome');
    welcome.innerHTML = '';
    const skinDisplay = document.querySelector('.display-randomskin');
    skinDisplay.innerHTML = '';
    const randomSkin = pickRandomSkin();
    const title = randomSkin.querySelector('h4');
    const image = randomSkin.querySelector('img');
    const titleDisplay = document.createElement('div');
    titleDisplay.classList.add('active');
    titleDisplay.innerHTML = title.innerHTML;  
    const imageDisplay = document.createElement('img');
    imageDisplay.classList.add('active');
    imageDisplay.src = image.src;
    skinDisplay.appendChild(imageDisplay);
    skinDisplay.appendChild(titleDisplay);
});

