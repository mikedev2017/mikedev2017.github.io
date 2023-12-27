const main = document.querySelector('.main');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.onclick = function(){
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
//
var modal = document.getElementById("animationModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var video = document.getElementsByClassName("myVideo");
var modalVideo = document.getElementById("video01");
var captionText = document.getElementById("caption");
for (let i = 0; i < video.length; i++) {
  video[i].addEventListener('click', function(){
  modal.style.display = "block";
  var url = video[i].attributes[2].value;
  console.log(url);
  modalVideo.src = url;
  captionText.innerHTML = this.title;
  })
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), stop the video playing
// close the modal
span.onclick = function() {
  modalVideo.src = "";
  modal.style.display = "none";
}