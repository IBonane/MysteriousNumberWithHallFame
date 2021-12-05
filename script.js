//Nombre Mystere ersion 2 avec duree----------------------------------------

  
function Joueur () {
  this.nom="";
  this.score=10000;
  this.temps=10000;
  }
  
//tableau stockant le nom des 10 meilleures score
let bestPlayer = [];

//initialisation du tableau
for (var i=0;i<10;i++)     
  bestPlayer[i] = new Joueur();

//création du compte à rebour au début du Jeu

//si la fonction tempsEcoule est activé (click du button "Go" dans index.html), 
//on crée une nouvelle date de debut, 
//sinon il n'il n'a pas de compte à rebour dans le jeu
let debutJeu = 0;

const tempsEcoule = () =>{
  debutJeu = new Date();
}

const nombreMytere2 = () =>{

  let finJeu = new Date();

  //nombre mystère
  let max = 10;
  let numberGenerated = Math.ceil(Math.random() * max);

  let userNumber = -1;
  let nombreTentative = 0;

  //reinitialiser le champ de message
  document.getElementById("resultPlayer").innerText = "Resultat";
  document.getElementById("rankingAndTimePlayer").innerText = "";

  while(userNumber != numberGenerated){
       userNumber = parseInt(prompt("le nombre mystère est entre 1 et 10, Devinez-le ?"));
    
    nombreTentative++;

    if(userNumber < numberGenerated){
      document.getElementById("resultPlayer").innerText = "C'est plus grand !";
      document.querySelector(".styleP").style.borderColor = "red";
    }

    else if(userNumber > numberGenerated){
     document.getElementById("resultPlayer").innerText = "C'est plus petit !";
     document.querySelector(".styleP").style.borderColor = "red";
    }
  }

  document.getElementById("resultPlayer").innerText = "vous avez réussi en "+nombreTentative+" tentative(s) !";
  document.querySelector(".styleP").style.borderColor = "green";

  if(nombreTentative < bestPlayer[9].score){

    //affichage du nombre de tentatives et ajout du nom dans le tableau des meilleurs et le temps écoulé
    
    //si debutJeu != 0, alors debutJeu == new Date() ; NB: le ".getTime" donne des millisecondes
    if(debutJeu != 0){
      var duree = Math.round((finJeu.getTime() - debutJeu.getTime())/1000);

      document.getElementById("rankingAndTimePlayer").innerText = "Vous avez fait "+duree+" seconde(s)";
    }

    //prendre le nom du joueur
    bestPlayer[9].nom = prompt("Bravo !!! vous faites parties des 10 meilleurs scores\nEntrez votre nom:");
    bestPlayer[9].score = nombreTentative;
    bestPlayer[9].temps = duree;
    
    bestPlayer.sort((a, b) => a.score - b.score);
  } 

 //affichage du tableau des 10 meilleurs scores
  console.log(bestPlayer);

  for(let i=0; i<bestPlayer.length; i++){

    if(bestPlayer[i].nom !=""){
      document.getElementById(i).innerHTML = `
      <td>${i+1}</td>
      <td>${bestPlayer[i].nom}</td> 
      <td>${bestPlayer[i].score}</td>
      <td>${bestPlayer[i].temps}</td>
      `;
    }


  }
}
//fin du Jeu-----------------------------------------------------