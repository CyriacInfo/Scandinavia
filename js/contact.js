//Je vais chercher mon formulaire
const submitForm = document.getElementById("formSubmit");
// je vais chercher mon input newsletter
const newsLetterBtn = document.getElementById("newsLetter");
// Les messages que je retourne en fonction de la checkbox si cochée ou non
const checkedBox ="Merci nous vous contacterons des que possible                  (Vous receverez bientôt plein de news !)";
const unCheckedBox = "Merci nous vous contacterons des que possible!";

//quand le formulaire est envoyé, envoi une alerte en fonction de la checked box
submitForm.addEventListener("submit", function (event) {
    //empeche le rafraichissement de la page 
  event.preventDefault();
  console.log(newsLetterBtn);
  if (newsLetterBtn.checked === true) {
    window.alert(checkedBox);
  } else {
    window.alert(unCheckedBox);
  }
});
var menuBtn = document.querySelector('#menuBtn');
var nav = document.querySelector('#navigatorMobile');

// show or hide
  menuBtn.addEventListener('click',function(){
    nav.classList.toggle('openNav');
  menuBtn.classList.toggle('closeNav');
});
