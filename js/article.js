// Importation de mon objet pour avoir acces à toutes les données de son contenu.
import country from "./country.js";

//----------------------------------------Génération article----------------------------------------

const artDiv = document.getElementById("artBody");

function createPanel(title, img, para) {
  // Création d'une div qui sera le panneau principal et ajout d'une classe "cardGen" pour aller chercher cette element plus tard
  const card = document.createElement("div");
  artDiv.appendChild(card);
  card.classList.add("cardGen");

  // Création d'une div qui sera la partie gauche
  const cardLeft = document.createElement("div");
  card.appendChild(cardLeft);

  // Création  d'une div qui sera la partie centrale
  const cardCenter = document.createElement("div");
  card.appendChild(cardCenter);

  // Création d'une div qui sera la partie de droite
  const cardRight = document.createElement("div");
  card.appendChild(cardRight);

  //Création d'un h2 qui sera enfant de de la partie central et lui ajoute un titre (nom de l'article)
  const artTitle = document.createElement("h2");
  cardCenter.appendChild(artTitle);
  artTitle.innerHTML = title;

  //Création d'un paragraphe qui sera enfant de de la partie central et lui ajoute un contenu (contenu de l'article)
  const artPara = document.createElement("p");
  cardCenter.appendChild(artPara);
  artPara.innerHTML = para;

  //Création d'une image qui sera enfant de de la partie gauche et lui une source
  const cardImg = document.createElement("img");
  cardLeft.appendChild(cardImg);
  cardImg.src = img;

  //Création d'un boutton qui sera enfant de de la partie droite et lui ajoute du text pour identifier son action
  const cardButton = document.createElement("button");
  cardButton.innerHTML = "voir plus";
  cardRight.appendChild(cardButton);
}

//--------------------------------------Boucle la génération des articles---------------------------------------------------

//Premiere boucle pour parcourir mon tableau
for (let i = 0; i < country.length; i++) {
  //Deuxieme boucle pour parcourir le tableau de la clé article qui contient les noms,
  //paragraphes et les images des mes futurs articles

  for (let j = 0; j < country[i].article.length; j++) {
    createPanel(
      country[i].article[j].title,
      country[i].article[j].picture,
      country[i].article[j].paragraph
    );
    //Ma fonction prends 3 parametres dans le sens titre - image - paragraphe donc
    //je vais chercher les éléments de mon tableau qui correspondent

    //Je  vais choper toutes mes panneaux ayant la classe "cardGen"
    const cardGenerator = document.getElementsByClassName("cardGen");

    //
    for (let t = 0; t < cardGenerator.length; t++) {
      if (t % 2 === 0) {
        cardGenerator[t].classList.add("artImpair");
      } else {
        cardGenerator[t].classList.add("artPair");
      }

      if (t < 3) {
        cardGenerator[t].classList.add("finlandeStyle");
      } else if (t > 2 && t < 6) {
        cardGenerator[t].classList.add("suedeStyle");
      } else if (t > 5 && t < 9) {
        cardGenerator[t].classList.add("norvegeStyle");
      } else {
        cardGenerator[t].classList.add("islandeStyle");
      }

      cardGenerator[t].id = "artId" + t;
    }
  }
}