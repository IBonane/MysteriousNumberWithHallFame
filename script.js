//Jeu : Nombre Mystère -----------------------------------------------

const hiddenNumberGame = () =>{

  let min = 1;
  let max = 10;
  let numberGenerated = Math.floor(min + Math.random() * (max - min));

  let userNumber = 0;
  let score = 0;

  while(userNumber != numberGenerated){
    userNumber = window.prompt("le nombre mystère est entre 1 et 10, Devinez-le ?");
    let userNumberToInt = parseInt(userNumber);
    
    score++;

    if(userNumberToInt === numberGenerated){
      alert("vous avez réussi en "+score+" tentative(s) !");
    }

    else if(userNumberToInt < numberGenerated)
      alert("C'est plus grand !");

    else
      alert("C'est plus petit !");
  }

}
//fin du Jeu-----------------------------------------------------

//Hall of Fame version 1 sans duree----------------------------------------

  //tableau stockant le nom des 10 meilleures score
  let nameAndBestScore = [
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""} 
  ];

const hallFameGame = () =>{

  //tableau de meilleures scores
  let bestScore = [1,2,3,4,5,6,7,8,9,10];

  //nombre mystère
  let min = 1;
  let max = 10;
  let numberGenerated = Math.floor(min + Math.random() * (max - min));

  let userNumber = 0;
  let score = 0;

  while(userNumber != numberGenerated){
    userNumber = window.prompt("le nombre mystère est entre 1 et 10, Devinez-le ?");
    let userNumberToInt = parseInt(userNumber);
    
    score++;

    if(userNumberToInt === numberGenerated)
      alert("vous avez réussi en "+score+" tentative(s) !");

    else if(userNumberToInt < numberGenerated)
      alert("C'est plus grand !");

    else
      alert("C'est plus petit !");
  }

  for(let bscore of bestScore){

    if(score === bscore){

      //affichage du bouton #affchier les 10 meilleurs joueurs
      document.getElementById("button-cliked").style.display = ""; 

      //affichage du score et ajout du nom et du score dans le tableau des meilleurs
      alert("vous êtes "+score+" ème au classeemnt !");
      let name = window.prompt("Entrer votre nom");

      nameAndBestScore[score-1].nom = name;
      nameAndBestScore[score-1].score = score;
      //trie du tableau nameAndBestScore et le return
      //return nameAndBestScore.sort((a, b) => a.value - b.value);
    }
  } 
}

//affectation de la réfenrence du tableau nameAndBestScore à bestPlayerArray
let bestPlayerArray = nameAndBestScore.sort((a, b) => a.value - b.value);

 //affichage du tableau des 10 meilleurs scores
const bestPlayer = () =>{

  //concaténation de tous les noms et score du tableau dans une string
  let allresults = "";

  for(let player of bestPlayerArray){

    allresults += `
      <tr>
        <td>${player.nom}</td>
        <td>${player.score}</td>
      </tr>
    `;
  }
  document.querySelector("#listTable").innerHTML =allresults;

  document.getElementById("button-cliked").addEventListener("click", function() {
    document.getElementById("active-table").style.display = ""; 
  });
}
//fin du Jeu-----------------------------------------------------

//----------------------------------------------------------------------------------------------


//Hall of Fame version 2 avec duree----------------------------------------

  //tableau stockant le nom des 10 meilleures score
  let nameAndBestScoreV2 = [
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""},
    {nom : "", score : ""} 
  ];

//création du compte à rebour au début du Jeu

//si la fonction tempsEcoule est activé (click du button "Go" dans index.html), 
//on crée une nouvelle date de debut, 
//sinon il n'il n'a pas de compte à rebour dans le jeu
let debutJeu = 0;
const tempsEcoule = () =>{

  debutJeu = new Date();
}

const improvedHallFameGame = () =>{

  let finJeu = new Date();

  //tableau de meilleures scores
  let bestScore = [1,2,3,4,5,6,7,8,9,10];

  //nombre mystère
  let min = 1;
  let max = 10;
  let numberGenerated = Math.floor(min + Math.random() * (max - min));

  let userNumber = 0;
  let score = 0;

  while(userNumber != numberGenerated){
    userNumber = window.prompt("le nombre mystère est entre 1 et 10, Devinez-le ?");
    let userNumberToInt = parseInt(userNumber);
    
    score++;

    if(userNumberToInt === numberGenerated){
      alert("vous avez réussi en "+score+" tentative(s) !");
    }

    else if(userNumberToInt < numberGenerated)
      alert("C'est plus grand !");

    else
      alert("C'est plus petit !");
  }

  for(let bscore of bestScore){

    if(score === bscore){

      //affichage du bouton #affchier les 10 meilleurs joueurs
      document.getElementById("button-clikedV2").style.display = ""; 

      //affichage du score et ajout du nom et du score dans le tableau des meilleurs et le temps écoulé
      
      //si debutJeu != 0, alors debutJeu == new Date() ; NB: le ".getTime" donne des millisecondes
      if(debutJeu != 0){
        let duree = Math.round((finJeu.getTime() - debutJeu.getTime())/1000);

       alert("vous êtes "+score+" ème au classement et "+"vous avez fait "+duree+" seconde(s)");
      }

      else
        alert("vous êtes "+score+" ème au classement");


      //prendre le nom du joueur
      let name = window.prompt("Entrer votre nom");

      nameAndBestScoreV2[score-1].nom = name;
      nameAndBestScoreV2[score-1].score = score;
      //trie du tableau nameAndBestScore et le return
      //return nameAndBestScore.sort((a, b) => a.value - b.value);
    }
  } 
}

//affectation de la réfenrence du tableau nameAndBestScore (trié) à bestPlayerArray
let bestPlayerArrayV2 = nameAndBestScoreV2.sort((a, b) => a.value - b.value);

 //affichage du tableau des 10 meilleurs scores
const bestPlayerV2 = () =>{

  //concaténation de tous les noms et score du tableau dans une string
  let allresults = "";

  for(let player of bestPlayerArrayV2){

    allresults += `
      <tr>
        <td>${player.nom}</td>
        <td>${player.score}</td>
      </tr>
    `;
  }
  document.querySelector("#listTableV2").innerHTML =allresults;

  document.getElementById("button-clikedV2").addEventListener("click", function() {
    document.getElementById("active-tableV2").style.display = ""; 
  });
}
//fin du Jeu-----------------------------------------------------
