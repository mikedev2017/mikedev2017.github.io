const main = document.querySelector('.main');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

const illustrationContainer = document.querySelector('.illustration-container');

const illustrationPreviousContainer = document.querySelector('.illustration-previous-container');
const illustrationNextContainer = document.querySelector('.illustration-next-container');

const illustrationImages = document.querySelectorAll('.illustration-img');
const illustrationPrevious = document.querySelector('.illustration-previous');
const illustrationNext = document.querySelector('.illustration-next');

const illus01 = document.querySelector('.illus01');
const illus02 = document.querySelector('.illus02');
const illus03 = document.querySelector('.illus03');
const illus04 = document.querySelector('.illus04');
const illusDesc01 = document.querySelector('.illus-desc-01');
const illusDesc02 = document.querySelector('.illus-desc-02');
const illusDesc03 = document.querySelector('.illus-desc-03');
const illusDesc04 = document.querySelector('.illus-desc-04');

const infoCircle = document.querySelector('.fa-info-circle');

var controlPrevious = null;
var controlNext = null;

const timeDelay = 200;

var selectedIllusSlide = illus01;
var selectedIllusText = illusDesc01;
var illustrationSlidesNumber = 0;

let illustrationSlides = [illus01, illus02, illus03, illus04];
let illustrationDescriptions = [illusDesc01, illusDesc02, illusDesc03, illusDesc04];

var chosenText = illusDesc01;

var previousSlide = illus04;
var nextSlide = illus02;
var nextSlideNumber = 1;
var previousSlideNumber = 3;

const illustrationCloseButton = document.querySelector('.illustration-close-button');

for (let i = 0; i < illustrationImages.length; i++) {
  illustrationImages[i].addEventListener('click', function(){
    illustrationContainer.classList.add('zoom-img');
    toggle.classList.add('zoom-img');
    illustrationCloseButton.classList.add('active');
    main.classList.add('zoom-img');
    illustrationPreviousContainer.classList.add('zoom-img');
    illustrationNextContainer.classList.add('zoom-img');
    selectedIllusText.classList.add('zoom-img');
    infoCircle.classList.add('active');
  });
}

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

illustrationPrevious.addEventListener('click', function(){progressIllustrationSlides(false);});
illustrationNext.addEventListener('click', function(){progressIllustrationSlides(true);});

function progressIllustrationSlides(moveForward){

  if(moveForward){
    illustrationSlidesNumber--;//5
    nextSlideNumber = illustrationSlidesNumber + 1;//6
    previousSlideNumber = illustrationSlidesNumber - 1;//4
    // remove active class from current slide

    selectedIllusSlide.classList.remove('active');
    selectedIllusText.classList.remove('active');

    if(previousSlideNumber < 0){
      previousSlideNumber = illustrationSlides.length + previousSlideNumber;
    }
    if(illustrationSlidesNumber < 0){
      illustrationSlidesNumber = illustrationSlides.length + illustrationSlidesNumber;
    }
    if(nextSlideNumber < 0){
      nextSlideNumber = illustrationSlides.length + nextSlideNumber;
    }
    if(nextSlideNumber > illustrationSlides.length - 1){
      nextSlideNumber = 0;
    }

    selectedIllusSlide = illustrationSlides[illustrationSlidesNumber];
    selectedIllusText = illustrationDescriptions[illustrationSlidesNumber];
    chosenText = selectedIllusText;
    previousSlide = illustrationSlides[previousSlideNumber];
    nextSlide = illustrationSlides[nextSlideNumber];
  }

  if(!moveForward){
    illustrationSlidesNumber++;//3 //1 //2
    nextSlideNumber = illustrationSlidesNumber + 1;
    previousSlideNumber = illustrationSlidesNumber - 1;
    // remove active class from current slide
    selectedIllusSlide.classList.remove('active');
    selectedIllusText.classList.remove('active');

    if(previousSlideNumber > illustrationSlides.length - 1){
      previousSlideNumber = 0;
    }
    if(previousSlideNumber < 0){
      previousSlideNumber = illustrationSlides.length - 1;
    }
    if(nextSlideNumber > illustrationSlides.length - 1){
      nextSlideNumber = nextSlideNumber - (illustrationSlides.length);
    }
    if(illustrationSlidesNumber > illustrationSlides.length - 1){
      illustrationSlidesNumber = 0;
    }

    selectedIllusSlide = illustrationSlides[illustrationSlidesNumber];
    selectedIllusText = illustrationDescriptions[illustrationSlidesNumber];
    chosenText = selectedIllusText;
    previousSlide = illustrationSlides[previousSlideNumber];
    nextSlide = illustrationSlides[nextSlideNumber];
  }

  selectedIllusText.classList.add('active');
  setTimeout(function(){
    addActiveClass(selectedIllusSlide)
  }, timeDelay);
}


function addActiveClass(chosenSlide){
// add active class the to the current selected slide
chosenSlide.classList.add('active');
}

illustrationCloseButton.addEventListener('click', function(){
    illustrationContainer.classList.remove('zoom-img');
    toggle.classList.remove('zoom-img');
    main.classList.remove('zoom-img');
    illustrationCloseButton.classList.remove('active');
    illustrationPreviousContainer.classList.remove('zoom-img');
    illustrationNextContainer.classList.remove('zoom-img');
    selectedIllusText.classList.remove('zoom-img');
    infoCircle.classList.remove('active');
});

if(infoCircle){
  infoCircle.addEventListener('click', function(){
    chosenText.classList.toggle('zoom-img');
  });
}
