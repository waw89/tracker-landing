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



const headers = document.querySelectorAll('.buy-header'); 

window.addEventListener('scroll', checkBoxes);


checkBoxes(); 

function checkBoxes (){
    const triggerBottom = window.innerHeight/5 * 4;

    headers.forEach(header => {

        const headerTop = header.getBoundingClientRect().top; 
        
        
        if(headerTop < triggerBottom){
            header.classList.add('show')
        } else{
            header.classList.remove('show')
        }
    })
}


const steps = document.querySelectorAll('.step');

window.addEventListener('scroll', checkStepBoxes);

checkStepBoxes();

function checkStepBoxes(){
    const stepTriggerBottom = window.innerHeight / 5 * 4;

    steps.forEach(step => {

        const stepTop = step.getBoundingClientRect().top;

        if(stepTop < stepTriggerBottom){
            step.classList.add('show')
        } else{
            step.classList.remove('show')
        }
    })

}