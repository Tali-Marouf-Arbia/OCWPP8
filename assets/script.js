const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// on déclare la variable numero qui sera utilisee pour suivre l index actuel du tableau slides
let numero = 0;

const flecheLeft = document.querySelector(".arrow_left"); // on selectionne la fleche gauche avc doc.querySelct
flecheLeft.addEventListener("click", function () { changeSlide(-1); // on ajoute un ecouteur d evenmts au click on appl la fonction changeSlide avc l argument -1
	console.log(flecheLeft); // on imprime ds la console c'est ok !
});

const flecheRight = document.querySelector(".arrow_right");
flecheRight.addEventListener("click", function () { changeSlide(1); // faut il privilegier l utilisation de () => ?
	console.log(flecheRight); // ok ds la console !
});

console.log(slides.length); // on imprime la longueur du tableau dans la console 4 ok !

// on prend l element #points ds le dom et on le stock ds la variable pointsContainer
const pointsContainer = document.getElementById("points");  

// on cree la booucle pour créer les points en fonction de la longueur du tableau slides
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div"); // on cree une <div> et on la stock ds la variable dot
    dot.classList.add("dot"); 

    // on ajoute dot comme enfant a pointsContainer
    pointsContainer.appendChild(dot);
}

// on recup tous les elements .dot et on les stock ds un tableau dotsArray
const dotsArray = document.querySelectorAll(".dot"); 

// on defini la fonction updateDots
function updateDots() {
    dotsArray.forEach((dot, index) => { //pour chaque point ds dotsArray
        if (index === numero) { // si l index = num de la diapo actuelle
            dot.classList.add("dot_selected");//ajoutez la classe dot_selected à lelemt dot
        } else {
            // Sinon, enlevez la classe dot_selected à dot
            dot.classList.remove("dot_selected");
        }
    });
}

function changeSlide(sens) {
    // On met à jour le numéro de la diapositive en fonction de la direction (sens)
    numero = numero + sens;

    // Si on dépasse la dernière diapositive, on revient à la première
    if (numero > slides.length - 1)
        numero = 0;

    // Si on dépasse la première diapositive, on va à la dernière
    if (numero < 0)
        numero = slides.length - 1;

    // On met à jour l'image et le texte en fonction de la diapositive actuelle
    document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[numero]['image'];
    document.getElementById("text").innerHTML = slides[numero]['tagLine'];

	updateDots();

    // On imprime la valeur de sens dans la console
    console.log(sens);
}


