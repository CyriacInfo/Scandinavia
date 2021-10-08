//--------------------------------------------CAROUSEL------------------------------------------------------------


let tabIndex = 0;
function carousel() {
  
  //Je vais chercher mes élements ayant la classe slider, c'est a dire mes images (stocker dans un tableau)
  let slides = document.getElementsByClassName("slider");

  //je crée une boucle pour faire disparaitre mes images
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Fait disparaitre l'image relié à l'index[i] notre image grace au diplay none
  }
  tabIndex++; // incrementation de l'index

  if (tabIndex > slides.length) {
    tabIndex = 1;
  }

  //fait apparaitre mon image derrière celle affiché
  slides[tabIndex - 1].style.display = "block";
  setTimeout(carousel, 2000);// réaplique la fonction 2 seconde après être invoqué
  // 2000 = 2 sec;
}

var menuBtn = document.querySelector('#menuBtn');
var nav = document.querySelector('#navigatorMobile');

// show or hide
  menuBtn.addEventListener('click',function(){
    nav.classList.toggle('openNav');
  menuBtn.classList.toggle('closeNav');
});

//Invocation de la fonction pour qu'elle se lance des que la page est chargée
carousel();
