$(function(){

   $('.slider-slider').slick({
      dots:true,
      arrows:true,
      responsive:[
         {
            breakpoint: 555,
            settings: {
               arrows:false,
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

const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#video-story-overlay');
const videoFile = document.querySelector('#video-story');

videoBtn.addEventListener('click', function() {
   function toggleOverlay(event) {
      if (event.type === 'mouseLeave') {
         videoOverlay.classList.add('hidden');
      } else {
         videoOverlay.classList.remove('hidden');
      }
   }
   
   if (videoFile.paused) {
      videoFile.play();
      videoBtnIcon.src = 'image/pause.svg';
      
      videoOverlay.onmouseleave = toggleOverlay;
      videoOverlay.onmouseenter = toggleOverlay;

   } else {
      videoFile.pause();
      videoBtnIcon.src = 'image/play.svg';
      videoOverlay.onmouseleave = null;
      videoOverlay.onmouseenter = null;
   }
});
