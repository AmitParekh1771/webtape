
const menuBtn = document.getElementById('nav-menu-btn');
const navOptionsMobile = document.getElementById('nav-options-mobile');

menuBtn.addEventListener('click', (ev) => {
    const currHeight = navOptionsMobile.getBoundingClientRect().height;
    
    if(currHeight) navOptionsMobile.style.height = '0px';
    else navOptionsMobile.style.height = '150px';
});

navOptionsMobile.addEventListener('click', (ev) => {
    navOptionsMobile.style.height = '0px';
});

const mantra = document.getElementById('mantra');
const mantraArr = ['SCALABLE', 'FASTEST', 'OPTIMIZED'];
const DURATION = 6000;
const INTERVAL = 50;
const SIZE = mantraArr.length;
let i = 0, j = -1, k = 0, m = 0, n = 0;

const mantraTimer = setInterval(() => {
    if(!i) {
        j++;
        m = mantraArr[j % SIZE].length;
        n = mantraArr[(j+1) % SIZE].length;
    }

    if(i == DURATION - n*INTERVAL) k=0;

    if(i >= DURATION - n*INTERVAL) mantra.innerText = mantraArr[(j+1) % SIZE].slice(0, ++k);
    else if(i >= DURATION - (m+n)*INTERVAL) mantra.innerText = mantraArr[j % SIZE].slice(0, m - ++k);


    i = (i + INTERVAL) % DURATION;
}, INTERVAL);