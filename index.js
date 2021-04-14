let backround = document.getElementById('particles-js');
//la fonction callback ne s'applique que si l'événement à lieu
document.addEventListener("keydown", function(event){
    backround.style.backgroundColor = getRandomColor();//donne une couleur au hasard
    //je récupère dans une variable la clé de l'événement
let key = event.key;
playMusic(key)//joue une note en fonction de la touche appuyée
console.log(event);
});

function playMusic(key){
    switch(key){
        case "d": 
        let audio = new Audio("kick1.wav");
        audio-play();
        break;
        case "e": 
        audio = new Audio("kick.mp3");
        audio-play();
        break;
        case "a": 
        audio = new Audio("kick2.mp3");
        audio-play();
        break;
        case "z": 
        audio = new Audio("Clap1.wav");
        audio-play();
        break;
    }
}
//Chaque fois que j'appuie sur une touche, la fonction getRandomColor renvoie une couleur aléatoire
function getRandomColor(){
let lettres = "0123456789ABCDEF";//représentation héxadécimale couleur = lettres.length
let color = "#";
for(let i = 0; i<6; i++){
    color = color + lettres [Math.floor(Math.random()*lettres.length)];
}
return color;
}