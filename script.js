//Nombre Mystere ersion 2 avec duree----------------------------------------


//function 4
function player () {

  this.name="";
  this.score=10000;
  this.time=10000;
  }
  
//tableau stockant le nom des 10 meilleures score
let bestPlayer = [];

//initialisation du tableau
for (let i=0;i<10;i++)     
  bestPlayer[i] = new player();

//desactivation de l'input
// let valueText = document.querySelector("#numberInput");
// valueText.disabled = false;

//variable utilisé
let nbTries = 0;
let numberUser = -1;
let numberGenerate;
let duration;
let divInputDebut = document.querySelector("#commenceJeu");
let inputListeningNumber = document.getElementById("numberInput");
let inputListeningName;
let resultatText   = document.getElementById("resultPlayer");//reinitialiser le champ de message
let nbTentativeText = document.getElementById("rankingAndTimePlayer");
let changeDivColor = document.querySelector("#changeColor");
let duree;
let divGagne = document.getElementById("divNomGagnant");

//création du compte à rebour au début du Jeu
let debutJeu; 

//écoute de l'input number


divGagne.style.display = "none";
divInputDebut.style.display = "none";


//function 3
const nombreMytere3 = () => {
  nbTries++;
  console.log("numbergenerate:"+numberGenerate);

  numberUser = parseInt(inputListeningNumber.value);
  inputListeningNumber.value = "";

  if(numberUser == numberGenerate){

    let finJeu = new Date();
    duree = Math.round((finJeu.getTime() - debutJeu.getTime())/1000);

    divGagne.style.display = "";
    divInputDebut.style.display = "none";

    console.log(nbTries+" --- "+numberUser+"---Gagné");
    resultatText.innerText = "Bravo !!! vous l'avez trouvé";
    nbTentativeText.innerText = "vous avez réussi en "+nbTries+" tentative(s) !\nEn "+duree+" seconde(s)";
    changeDivColor.style.borderColor = "green";

    getNamePlayerAndDisplayInTable();

    resultatText.innerText = "Rejouer !";
    nbTentativeText.innerText = "";

  }

  else if(numberUser < numberGenerate){
    console.log(nbTries+" --- "+numberUser+"---nombre mystère plus grand");
    resultatText.innerText = "nombre mystère plus grand";
    changeDivColor.style.borderColor = "red";
  }

  else{
    console.log(nbTries+" --- "+numberUser+"---nombre mystère plus petit");
    resultatText.innerText = "nombre mystère plus petit";
    changeDivColor.style.borderColor = "red";
  } 
}


//function 2
const jouer = () => {
  nbTries = 0;
  duree = 0;
  changeDivColor.style.borderColor = "blue";

  resultatText.innerText = "Resultat";
  nbTentativeText.innerText = "";

  divGagne.style.display = "none";
  divInputDebut.style.display = "";
  
  randomNumber();

  //on crée une nouvelle date de debut
  debutJeu = new Date();

  inputListeningNumber.onchange = nombreMytere3;
}

//function 1
const randomNumber = () =>{
  let max = 10;
  numberGenerate = Math.ceil(Math.random() * max);
}


//function 5
const getNamePlayerAndDisplayInTable = () =>{

  //prendre le nom du joueur
  let nameInput = document.getElementById("gagnantInput");
  nameInput.onchange = function (){ 

    bestPlayer[9].nom = this.value;
    bestPlayer[9].score = nbTries;
    bestPlayer[9].temps = duree;

    this.value = "";
    divGagne.style.display = "none";
    
    bestPlayer.sort(function(a, b){
      if(a.score == b.score)
        return a.temps - b.temps;

      return a.score - b.score;
    });

    //affichage du tableau des 10 meilleurs scores
    for(let i=0; i<bestPlayer.length; i++){
      if(bestPlayer[i].nom !=undefined){
        document.getElementById(i).innerHTML = `
        <td>${i+1}</td>
        <td>${bestPlayer[i].nom}</td> 
        <td>${bestPlayer[i].score}</td>
        <td>${bestPlayer[i].temps}</td>
        `;
      }

    }
  }
}
//fin du Jeu-----------------------------------------------------