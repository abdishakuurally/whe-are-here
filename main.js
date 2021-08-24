const showMenu= document.querySelector('.hambager');
const hideMenu= document.querySelector('.close');
const menu= document.querySelector('.navigation-bar');

const leftSlide= menu.getBoundingClientRect().left;
showMenu.addEventListener('click', ()=>{
    if(leftSlide<0){
        menu.classList.add('show')
    }
  
});

hideMenu.addEventListener('click', ()=>{
    if(leftSlide<0){
        menu.classList.remove('show');
    }
});


