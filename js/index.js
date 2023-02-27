
let juegos = document.querySelector(".juegos");
let preguntas = document.querySelector(".preguntas");
let contacto = document.querySelector(".contacto");

function Juegos(){
	juegos.style.display = "block";
	preguntas.style.display = "none";
	contacto.style.display = "none";
}

function Preguntas(){
	juegos.style.display = "none";
	preguntas.style.display = "block";
	contacto.style.display = "none";
}

function Contacto(){
	juegos.style.display = "none";
	preguntas.style.display = "none";
	contacto.style.display = "block";
}