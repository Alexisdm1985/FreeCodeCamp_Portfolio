const allSections = document.querySelectorAll('.main-content');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');

function buttonTransitions(){
    
    sectBtn.forEach( (item) => {        
        item.addEventListener('click', function(){
            // removing active-btn class from the current button
            let activeBtn = document.querySelector('.active-btn');
            activeBtn.className = activeBtn.className.replace('active-btn', '');
   
            // adding class to selected button
            this.className += ' active-btn'
       });
    });
};


buttonTransitions();