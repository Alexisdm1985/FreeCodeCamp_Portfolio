const allSections = document.querySelector('.main-content');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const theme = document.querySelector('.theme-btn');

// Page transitions
function pageTransitions(){
    // Button click event
    activeBtn();

    // Sections Active
    activeSection();
    
    // Theme Mode
    theme.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    });
};

function activeSection() {
    allSections.addEventListener('click', (e) => {

        // get the id button that match with the section
        let targetID = e.target.dataset.id;

        if(targetID){
            // remove all active section
            // sections.forEach(item => item.classList.remove('active'));
            let activeSection = document.querySelector('.active').classList.remove('active');
            
            // get the section with id
            let section = document.querySelector(`#${targetID}`);
            section.classList.add('active');
        }
    });
};

function activeBtn(){

    sectBtn.forEach( (item) => {        
    
        item.addEventListener('click', function(){
            // removing active-btn class from the current button
            let activeBtn = document.querySelector('.active-btn');
            activeBtn.classList.remove('active-btn')
            activeBtn.classList.remove('active')
   
            // adding class to selected button
            this.className += ' active-btn active'
       });
    });
};


pageTransitions();