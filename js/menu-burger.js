var menuBtn = document.querySelector('#menuBtn');
var nav = document.querySelector('#navigatorMobile');

// show or hide
  menuBtn.addEventListener('click',function(){
    nav.classList.toggle('openNav');
  menuBtn.classList.toggle('closeNav');
});

