const main = document.querySelector('.main');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const motionContainer = document.querySelector('.motion-container');
const motionContainerActive = document.querySelector('.motion-container.active');
const motionPreviousContainer = document.querySelector('.motion-previous-container');
const motionNextContainer = document.querySelector('.motion-next-container');

const motionControls = document.querySelector('.motion-controls');
const motionPrevious = document.querySelector('.motion-previous');
const motionNext = document.querySelector('.motion-next');
const motion01 = document.querySelector('.motion01');
const motion02 = document.querySelector('.motion02');
const motion03 = document.querySelector('.motion03');
const motion04 = document.querySelector('.motion04');
const motion05 = document.querySelector('.motion05');
const motion06 = document.querySelector('.motion06');

const timeDelay = 200;

var selectedMotionSlide = motion01;
var motionVideoSlidesNumber = 0;

let motionVideoSlides = [motion01, motion02, motion03, motion04, motion05, motion06];

var previousSlide = motion06;
var nextSlide = motion02;
var nextSlideNumber = 1;
var previousSlideNumber = 5;

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

motionPrevious.addEventListener('click', function(){progressMotionSlides(false);});
motionNext.addEventListener('click', function(){progressMotionSlides(true);});

function progressMotionSlides(moveForward){
  console.log('Progress Slides function has been called.');
  var videoSrc = selectedMotionSlide.getAttribute('src');
  selectedMotionSlide.setAttribute('src', '');
  selectedMotionSlide.setAttribute('src', videoSrc);

  if(moveForward){
    motionVideoSlidesNumber--;
    nextSlideNumber = motionVideoSlidesNumber + 1;
    previousSlideNumber = motionVideoSlidesNumber - 1;
    // remove active class from current slide
    selectedMotionSlide.classList.remove('active');

    if(previousSlideNumber < 0){
      previousSlideNumber = motionVideoSlides.length + previousSlideNumber;
    }
    if(motionVideoSlidesNumber < 0){
      motionVideoSlidesNumber = motionVideoSlides.length + motionVideoSlidesNumber;
    }
    if(nextSlideNumber < 0){
      nextSlideNumber = motionVideoSlides.length + nextSlideNumber;
    }
    if(nextSlideNumber > motionVideoSlides.length - 1){
      nextSlideNumber = 0;
    }

    selectedMotionSlide = motionVideoSlides[motionVideoSlidesNumber];
    previousSlide = motionVideoSlides[previousSlideNumber];
    nextSlide = motionVideoSlides[nextSlideNumber];
  }
  if(!moveForward){
    motionVideoSlidesNumber++;//3 //1 //2
    nextSlideNumber = motionVideoSlidesNumber + 1;
    previousSlideNumber = motionVideoSlidesNumber - 1;//2 //0 //1
    // remove active class from current slide
    selectedMotionSlide.classList.remove('active');

    if(previousSlideNumber > motionVideoSlides.length - 1){
      previousSlideNumber = 0;
    }
    if(previousSlideNumber < 0){
      previousSlideNumber = motionVideoSlides.length - 1;
    }
    if(nextSlideNumber > motionVideoSlides.length - 1){
      nextSlideNumber = nextSlideNumber - (motionVideoSlides.length);
    }
    if(motionVideoSlidesNumber > motionVideoSlides.length - 1){
      motionVideoSlidesNumber = 0;
    }

    selectedMotionSlide = motionVideoSlides[motionVideoSlidesNumber];
    previousSlide = motionVideoSlides[previousSlideNumber];
    nextSlide = motionVideoSlides[nextSlideNumber];
  }
  setTimeout(function(){
    addActiveClass(selectedMotionSlide)
  }, timeDelay);
}


function addActiveClass(chosenSlide){
// add active class the to the current selected slide
chosenSlide.classList.add('active');
}
