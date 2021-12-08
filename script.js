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
//on crée une nouvelle date de debut, 

let debutJeu = new Date();

const nombreMytere3 = () =>{

  let valueText = document.getElementById("textInput");
  valueText.disabled = false;

  //nombre mystère
  let max = 10;
  let numberGenerated = Math.ceil(Math.random() * max);

  let userNumber;
  let nombreTentative = 0;

  //reinitialiser le champ de message
  document.getElementById("resultPlayer").innerText = "Resultat";
  document.getElementById("rankingAndTimePlayer").innerText = "";

 /* while(userNumber != numberGenerated){
       userNumber = parseInt(prompt("le nombre mystère est entre 1 et 10, Devinez-le ?"));
    */

  valueText.addEventListener('change', (event) =>{
    userNumber = parseInt(event.target.value);   
    valueText.value = "";
    nombreTentative++; 

    if(userNumber < numberGenerated){
      document.getElementById("resultPlayer").innerText = "C'est plus grand !";
      document.querySelector("#changeColor").style.borderColor = "red";
    }

    else if(userNumber > numberGenerated){
     document.getElementById("resultPlayer").innerText = "C'est plus petit !";
     document.querySelector("#changeColor").style.borderColor = "red";
    }
  /*}*/
  
  if(userNumber == numberGenerated){

    //desactivation du input via son id
    valueText.disabled = true;


    document.getElementById("resultPlayer").innerText = "vous avez réussi en "+nombreTentative+" tentative(s) !";
    document.querySelector("#changeColor").style.borderColor = "green";

    if(nombreTentative < bestPlayer[9].score){

      document.getElementById("divNomGagnant").style.display= "";
      //affichage du nombre de tentatives et ajout du nom dans le tableau des meilleurs et le temps écoulé
      
      //si debutJeu != 0, alors debutJeu == new Date() ; NB: le ".getTime" donne des millisecondes
      let finJeu = new Date();
    
      var duree = Math.round((finJeu.getTime() - debutJeu.getTime())/1000);
      document.getElementById("rankingAndTimePlayer").innerText = "Vous avez fait "+duree+" seconde(s)";
      
      //prendre le nom du joueur
      let nameInput = document.getElementById("gagnantInput");
      nameInput.addEventListener('change', (event) =>{ 
        //console.log(event.target.value);
      bestPlayer[9].nom = event.target.value;
      event.target.value = "";
      document.getElementById("gagnantInput")
      bestPlayer[9].score = nombreTentative;
      bestPlayer[9].temps = duree;


      document.getElementById("divNomGagnant").style.display= "none";
      
      bestPlayer.sort(function(a, b){
        if(a.score == b.score)
          return a.temps - b.temps;

        return a.score - b.score;
      });

        //affichage du tableau des 10 meilleurs scores
    //console.log(bestPlayer);

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
      });

    }  
  
  }}); 
}
//fin du Jeu-----------------------------------------------------