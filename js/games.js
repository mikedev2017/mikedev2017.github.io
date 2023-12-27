const main = document.querySelector('.main');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const game02 = document.getElementById('game-description-01');
const game03 = document.getElementById('game-description-02');
const game01 = document.getElementById('game-description-03');

let gameDescriptions = [game01, game02, game03];

toggle.onclick = function(){
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

//
var modal = document.getElementById("gameModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var game = document.getElementsByClassName("myGame");
var modalGame = document.getElementById("video01");
var captionText = document.getElementById("caption");
for (let i = 0; i < game.length; i++) {
  game[i].addEventListener('click', function(){
  modal.style.display = "block";
  var url = game[i].attributes[2].value;
  console.log(url);
  modalGame.src = url;
  captionText.innerHTML = gameDescriptions[i].innerHTML;
  console.log(captionText.innerHTML);
  })
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), stop the video playing
// close the modal
span.onclick = function() {
  modalGame.src = "";
  modal.style.display = "none";
}