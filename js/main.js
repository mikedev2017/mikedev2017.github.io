const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.onclick = function(){
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
