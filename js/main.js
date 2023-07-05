$(document).ready(function(){
   $('.slider').slick({
      arrows:true,
      dots:true,
      adaptiveHeight:true,
      speed:500,
      easing:'ease',
   });
    

});
const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#video-story-overlay');
const videoFile = document.querySelector('#video-story');

videoBtn.addEventListener('click', function() {
    function toggleOverlay(event) {
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
        }

    }

    if (videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src = 'image/pause-white.svg';

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter= toggleOverlay;

    } else {
        videoFile.pause();
        videoBtnIcon.src = 'image/play.svg';
        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;
    }
});