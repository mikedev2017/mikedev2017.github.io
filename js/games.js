const main = document.querySelector('.main');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

const gameContainer = document.querySelector('.game-container');
const gamePreviousContainer = document.querySelector('.game-previous-container');
const gameNextContainer = document.querySelector('.game-next-container');
const gameImages = document.querySelectorAll('.game-img');
const gamePrevious = document.querySelector('.game-previous');
const gameNext = document.querySelector('.game-next');

const game01 = document.querySelector('.game01-container');
const game02 = document.querySelector('.game02-container');
const game03 = document.querySelector('.game03-container');
const gameImage01 = document.querySelector('.game01');
const gameImage02 = document.querySelector('.game02');
const gameImage03 = document.querySelector('.game03');
const gameVideo01 = document.querySelector('.game-video-01');
const gameVideo02 = document.querySelector('.game-video-02');
const gameVideo03 = document.querySelector('.game-video-03');
const gameDescription01 = document.querySelector('.game-description-01');
const gameDescription02 = document.querySelector('.game-description-02');
const gameDescription03 = document.querySelector('.game-description-03');

var controlPrevious = null;
var controlNext = null;

const infoCircle = document.querySelector('.img-zoom-info');
const infoCircles = document.querySelectorAll('.game-info-icon');

const timeDelay = 200;

var selectedGameSlide = game01;
var selectedGameText = gameDescription01;
var selectedGameImage = gameImage01;
var selectedGameVideo = gameVideo01;
var gameSlidesNumber = 0;

let gameSlides = [game01, game02, game03];
let gameCovers = [gameImage01, gameImage02, gameImage03];
let gameDescriptions = [gameDescription01, gameDescription02, gameDescription03];
let gameVideos = [gameVideo01, gameVideo02, gameVideo03];

var chosenText = gameDescription01;

var previousSlide = game03;
var nextSlide = game02;
var nextSlideNumber = 1;
var previousSlideNumber = 2;

const gameCloseButton = document.querySelector('.game-close-button');

for (let g = 0; g < gameImages.length; g++) {
  gameImages[g].addEventListener('click', function(){
    gameContainer.classList.add('view-game');
    toggle.classList.add('zoom-img');
    main.classList.add('view-game');
    gameCloseButton.classList.add('active');
    gamePreviousContainer.classList.add('view-game');
    gameNextContainer.classList.add('view-game');
    selectedGameSlide.classList.add('view-game');
    //selectedGameVideo.classList.remove('active');
    //selectedGameImage.classList.add('view-game');
    selectedGameText.classList.add('view-game');
    body.classList.add('view-game');
    infoCircle.classList.add('active');
  });
}

for (let i = 0; i < infoCircles.length; i++) {
  infoCircles[i].addEventListener('click', function(){
    infoCircles[i].nextElementSibling.click();
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

gamePrevious.addEventListener('click', function(){progressGameSlides(false);});
gameNext.addEventListener('click', function(){progressGameSlides(true);});

function progressGameSlides(moveForward){
  var videoSrc = selectedGameVideo.getAttribute('src');
  selectedGameVideo.setAttribute('src', '');
  selectedGameVideo.setAttribute('src', videoSrc);
  if(moveForward){
    gameSlidesNumber--;
    nextSlideNumber = gameSlidesNumber + 1;
    previousSlideNumber = gameSlidesNumber - 1;

    //remove active class from current slide and slide children
    selectedGameSlide.classList.remove('active');
    selectedGameText.classList.remove('active');
    selectedGameImage.classList.remove('active');
    selectedGameVideo.classList.remove('active');

    if(previousSlideNumber < 0){
      previousSlideNumber = gameSlides.length + previousSlideNumber;
    }
    if(gameSlidesNumber < 0){
      gameSlidesNumber = gameSlides.length + gameSlidesNumber;
    }
    if(nextSlideNumber < 0){
      nextSlideNumber = gameSlides.length + nextSlideNumber;
    }
    if(nextSlideNumber > gameSlides.length - 1){
      nextSlideNumber = 0;
    }

    selectedGameSlide = gameSlides[gameSlidesNumber];
    selectedGameText = gameDescriptions[gameSlidesNumber];
    chosenText = selectedGameText;
    selectedGameVideo = gameVideos[gameSlidesNumber];
    selectedGameImage = gameCovers[gameSlidesNumber];
    previousSlide = gameSlides[previousSlideNumber];
    nextSlide = gameSlides[nextSlideNumber];
  }
  if(!moveForward){
    gameSlidesNumber++;//3 //1 //2 //3
    nextSlideNumber = gameSlidesNumber + 1; //4
    previousSlideNumber = gameSlidesNumber - 1; //2
    // remove active class from current slide and slide children
    selectedGameSlide.classList.remove('active');
    selectedGameText.classList.remove('active');
    selectedGameImage.classList.remove('active');
    selectedGameVideo.classList.remove('active');

    if(previousSlideNumber > gameSlides.length - 1){
      previousSlideNumber = 0;
    }
    if(previousSlideNumber < 0){
      previousSlideNumber = gameSlides.length - 1;
    }
    if(nextSlideNumber > gameSlides.length - 1){
      nextSlideNumber = nextSlideNumber - (gameSlides.length);
    }
    if(gameSlidesNumber > gameSlides.length - 1){
      gameSlidesNumber = 0;
    }

    selectedGameSlide = gameSlides[gameSlidesNumber];
    selectedGameText = gameDescriptions[gameSlidesNumber];
    selectedGameImage = gameCovers[gameSlidesNumber];
    chosenText = selectedGameText;
    selectedGameVideo = gameVideos[gameSlidesNumber];
    previousSlide = gameSlides[previousSlideNumber];
    nextSlide = gameSlides[nextSlideNumber];
  }
  selectedGameText.classList.add('active');
  selectedGameVideo.classList.add('active');
  selectedGameImage.classList.add('active');
  setTimeout(function(){
    addActiveClass(selectedGameSlide)
  }, timeDelay);
}


function addActiveClass(chosenSlide){
// add active class the to the current selected slide
chosenSlide.classList.add('active');
}

gameCloseButton.addEventListener('click', function(){
    gameContainer.classList.remove('view-game');
    toggle.classList.remove('zoom-img');
    main.classList.remove('view-game');
    gameCloseButton.classList.remove('active');
    gamePreviousContainer.classList.remove('view-game');
    gameNextContainer.classList.remove('view-game');
    selectedGameSlide.classList.remove('view-game');
    selectedGameVideo.classList.add('active');
    selectedGameImage.classList.remove('view-game');
    selectedGameText.classList.remove('view-game');
    body.classList.remove('view-game');
    infoCircle.classList.remove('active');
});


infoCircle.addEventListener('click', function(){
  chosenText.classList.toggle('view-game');
});
