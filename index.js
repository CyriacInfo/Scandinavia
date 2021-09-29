const country = {
  danemark: {
    name: "Danemark",
    travels: "",
    activity: "",
    lodging: "",
    article: ["0", "1", "2"],
    picture: "",
  },

  suede: {
    name: "Suède",
    travels: "",
    activity: "",
    lodging: "",
    article: ["0", "1", "2"],
    picture: "",
  },

  norvege: {
    name: "Norvège",
    travels: "",
    activity: "",
    lodging: "",
    article: ["0", "1", "2"],
    picture: "",
  },
};

const divDisplay = document.getElementById(divBody);

let tabIndex = 0;


function carousel() {

  let slides = document.getElementsByClassName("slider"); // récuprère touts les élements ayant la classe "slider" et les stock dans un tableau

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Fait disparaitre notre image grace au diplay none
  }
  tabIndex++; // incrementation de l'index

  if (tabIndex > slides.length) {
    tabIndex = 1;
  }
  
  slides[tabIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); 
  // 2000 = 2 sec;
};



carousel();