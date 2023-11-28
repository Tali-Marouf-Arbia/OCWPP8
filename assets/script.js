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

let numero = 0;
let modulo = 0;

const flecheLeft = document.querySelector(".arrow_left"); 
flecheLeft.addEventListener("click", function () { changeSlide(-1); 
});

const flecheRight = document.querySelector(".arrow_right");
flecheRight.addEventListener("click", function () { changeSlide(1); 
});

// console.log(slides.length); 

const pointsContainer = document.getElementById("points");  

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div"); 
    dot.classList.add("dot"); 
    pointsContainer.appendChild(dot);
}

const dotsArray = document.querySelectorAll(".dot"); 

function updateDots() {
    dotsArray.forEach((dot, index) => { 
        if (index === modulo) { 
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

function changeSlide(sens) {
    numero = numero + sens;
	modulo = numero % slides.length;

    document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[modulo]['image'];
    document.getElementById("text").innerHTML = slides[modulo]['tagLine']; 

	updateDots();

    // console.log(sens);
}


