const main = document.querySelector('.main');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const animationThumb = document.querySelector('.animation-thumbnail');
const content = document.querySelector('.content');
const animationContainer = document.querySelector('.animation-container');
const animationContainerActive = document.querySelector('.animation-container.active');
const animationPreviousContainer = document.querySelector('.animation-previous-container');
const animationNextContainer = document.querySelector('.animation-next-container');
const animationControls = document.querySelector('.animation-controls');
const animationPrevious = document.querySelector('.animation-previous');
const animationNext = document.querySelector('.animation-next');
const anim01 = document.querySelector('.anim01');
const anim02 = document.querySelector('.anim02');
const anim03 = document.querySelector('.anim03');
const anim04 = document.querySelector('.anim04');
const anim05 = document.querySelector('.anim05');
const anim06 = document.querySelector('.anim06');
const anim07 = document.querySelector('.anim07');
const anim08 = document.querySelector('.anim08');
const anim09 = document.querySelector('.anim09');
const anim10 = document.querySelector('.anim10');

const animBackBtn = document.querySelector('.animation-back-button');
const contactButton = document.querySelector('.contact-button');

const timeDelay = 200;

var selectedAnimSlide = anim01;
var animationVideoSlidesNumber = 0;

let animationVideoSlides = [anim01, anim02, anim03, anim04, anim05, anim06, anim07, anim08, anim09, anim10];

var previousSlide = anim09;
var nextSlide = anim02;
var nextSlideNumber = 1;
var previousSlideNumber = 9;

toggle.onclick = function(){
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

document.addEventListener('keydown', function(event){
  var controlPrevious = document.querySelector('.control-previous.active');
  var controlNext = document.querySelector('.control-next.active');
  if(event.which == 37 && controlPrevious){
    controlPrevious.click();
  }
  if(event.which == 39 && controlNext){
    controlNext.click();
  }
});

animationPrevious.addEventListener('click', function(){progressAnimationSlides(false);});
animationNext.addEventListener('click', function(){progressAnimationSlides(true);});

function progressAnimationSlides(moveForward){
  console.log('Progress Slides function has been called.');
  var videoSrc = selectedAnimSlide.getAttribute('src');
  selectedAnimSlide.setAttribute('src', '');
  selectedAnimSlide.setAttribute('src', videoSrc);
  if(moveForward){
    animationVideoSlidesNumber--;
    nextSlideNumber = animationVideoSlidesNumber + 1;
    previousSlideNumber = animationVideoSlidesNumber - 1;
    // remove active class from current slide
    selectedAnimSlide.classList.remove('active');
    if(previousSlideNumber < 0){
      previousSlideNumber = animationVideoSlides.length + previousSlideNumber;
    }
    if(animationVideoSlidesNumber < 0){
      animationVideoSlidesNumber = animationVideoSlides.length + animationVideoSlidesNumber;
    }
    if(nextSlideNumber < 0){
      nextSlideNumber = animationVideoSlides.length + nextSlideNumber;
    }
    if(nextSlideNumber > animationVideoSlides.length - 1){
      nextSlideNumber = 0;
    }

    selectedAnimSlide = animationVideoSlides[animationVideoSlidesNumber];
    previousSlide = animationVideoSlides[previousSlideNumber];
    nextSlide = animationVideoSlides[nextSlideNumber];
  }
  if(!moveForward){
    animationVideoSlidesNumber++;//3 //1 //2
    nextSlideNumber = animationVideoSlidesNumber + 1;
    previousSlideNumber = animationVideoSlidesNumber - 1;//2 //0 //1

    selectedAnimSlide.classList.remove('active');
    if(previousSlideNumber > animationVideoSlides.length - 1){
      previousSlideNumber = 0;
    }
    if(previousSlideNumber < 0){
      previousSlideNumber = animationVideoSlides.length - 1;
    }
    if(nextSlideNumber > animationVideoSlides.length - 1){
      nextSlideNumber = nextSlideNumber - (animationVideoSlides.length);
    }
    if(animationVideoSlidesNumber > animationVideoSlides.length - 1){
      animationVideoSlidesNumber = 0;
    }

    selectedAnimSlide = animationVideoSlides[animationVideoSlidesNumber];
    previousSlide = animationVideoSlides[previousSlideNumber];
    nextSlide = animationVideoSlides[nextSlideNumber];
  }
  setTimeout(function(){
    addActiveClass(selectedAnimSlide)
  }, timeDelay);
}


function addActiveClass(chosenSlide){
// add active class the to the current selected slide
chosenSlide.classList.add('active');
}
