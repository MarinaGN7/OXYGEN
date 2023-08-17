$(function(){

   $('.slider-slider').slick({
      dots:true,
      arrows:true,
      responsive:[
         {
            breakpoint: 767.98,
            settings: {
               dots:false,
            }
         }
      ]
   });

});


  

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');

});


