var myModal = $('#exampleModalCenter');

myModal.on('show.bs.modal', function(e){
  var slideShow = $('.carousel');
  var thumbnail = $(e.relatedTarget);

  var slideNumber = thumbnail.data('number');
  console.log("thumbnail element is " + thumbnail);
  console.log("currSlide is " + slideNumber);

  slideShow.carousel(parseInt(slideNumber));
});

var myModal1 = $('#animationModal1');
var myModal2 = $('#animationModal2');
var myModal3 = $('#animationModal3');
var myModal4 = $('#animationModal4');
var myModal5 = $('#animationModal5');
var myModal6 = $('#animationModal6');

myModal1.on('hide.bs.modal', function(){
  $('#animationPlayer01')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
})

myModal2.on('hide.bs.modal', function(){
  $('#animationPlayer02')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
})

myModal3.on('hide.bs.modal', function(){
  $('#animationPlayer03')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
})

var myModal4 = $('#animationModal4');
var video4 = $('#animationPlayer04');

myModal4.on('hide.bs.modal', function(){
  var videoSrc = video4.attr('src');
  video4.attr('src','');
  video4.attr('src',videoSrc);
})

myModal5.on('hide.bs.modal', function(){
  $('#animationPlayer05')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
})

myModal6.on('hide.bs.modal', function(){
  $('#animationPlayer06')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
})

//animate scroll for navigation
var link = $('a.nav-link');

link.on('click', function(e){
	var selectedLink = e.target;
	//var chosenElement = selectedLink.attr('id');
	var dataHref = selectedLink.dataset.href;
	if(dataHref) {
	$('.navbar-toggler').click();
	console.log($('#'+dataHref));
	var thisElement = document.getElementById(dataHref);
	e.preventDefault();
	thisElement.scrollIntoView({behavior: "smooth", block: "start"});
	}

});