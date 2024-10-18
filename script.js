// script.js

const trackerImage = document.getElementById('tracker-image');
const extraRow = document.getElementById('extra-row');

trackerImage.onmouseover = function() {
    extraRow.style.backgroundColor = '#1E1E1E';
};

trackerImage.onmouseout = function() {
    extraRow.style.backgroundColor = ''; 
};

trackerImage.onclick = function() {

    setTimeout(() => {
        trackerImage.style.display = 'none'; 
        trackerImage.src = 'ayuda-camino.png'; 
        trackerImage.style.display = 'block'; 
        trackerImage.classList.remove('moving-image'); 
    }, 10);
};
