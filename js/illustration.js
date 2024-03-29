const main = document.querySelector('.main');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.onclick = function(){
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

var modal = document.getElementById("sketchModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener('click', function(){
  modal.style.display = "block";
  // swap out the smaller thumbnail image for the larger full-res image
  var styles = window.getComputedStyle(this);
  var url = styles.backgroundImage.slice(5, -6);
  console.log(url);
  modalImg.src = url+"-full.png";
  captionText.innerHTML = this.title;
  });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// and clear the image and captipn text to prevent flashes
span.onclick = function() {
  modalImg.src = '';
  captionText.innerHTML = '';
  modal.style.display = "none";
}
