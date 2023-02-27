let estado = "Comenzo";
let patron = [];
let nivel = 0;
let Patron_Jugador = 0;
let Sonido = true;

let titulo = document.querySelector('.titulo'); 
let verde = document.getElementById('verde'); 
let rojo = document.getElementById('rojo'); 
let amarillo = document.getElementById('amarillo'); 
let azul = document.getElementById('azul'); 

let botones = [verde, rojo, amarillo, azul];

// document.addEventListener("keypress",ComenzarJuego);
verde.addEventListener("click", PrecionoBoton);
rojo.addEventListener("click", PrecionoBoton);
amarillo.addEventListener("click", PrecionoBoton);
azul.addEventListener("click", PrecionoBoton);



function ComenzarJuego(){
	if(estado === "Comenzo" || estado === "Perdio"){
		SiguienteNivel();
		patron = [];
		nivel = 0;
		// Patron_Jugador = 0;
		estado = "Comenzo";
		document.querySelector(".jugar").style.display = "none";
		titulo.innerText = "Símon dice a Jugar";
	}
}


// Me retorna un numero al azar
function Azar( max ){
	return Math.floor(Math.random() * max);
}

function SiguienteNivel(){

	estado = "Esperando-Patron";

	setTimeout( () => {
		nivel = nivel + 1;
		titulo.innerText = "Nivel " + nivel;
		let siguienteColor = Azar(4);
		let siguienteBoton = botones[siguienteColor];

		//Guardo un nuevo nivel
		patron.push(siguienteBoton);


		//Bloqueo los botones para que no interrumpa la secuencia
		// verde.disabled = false;
		// rojo.disabled = false;
		// amarillo.disabled = false;
		// azul.disabled = false;

		// Recorro el vector de botones ya presionados
		for (let i = 0; i < patron.length; i++) {
			setTimeout( () => {
				iluminar( patron[i] );
			},i*800);
		}

		/////Habilito los botones para que pueda jugar
		// verde.disabled = true;
		// rojo.disabled = true;
		// amarillo.disabled = true;
		// azul.disabled = true;


		// iluminar(siguienteBoton);

		Patron_Jugador = 0;
		estado = "Esperando-Jugador";

	}, 1000)
}


let audioEtiqueta = document.createElement("audio");
function reproducirSonido(ruta){
	audioEtiqueta.setAttribute("src", "sound/"+ruta+".wav");
    if(Sonido) audioEtiqueta.play();
    // console.log(`Reproduciendo: ${audioEtiqueta.src}`);
}

function iluminar(button){
	reproducirSonido(button.id);

	// console.log("Boton a iluminar: " + button.id);
	button.classList.add("active");
	setTimeout( () => {
		button.classList.remove("active");
	}, 300)

}


function PrecionoBoton(event){
	if(estado === "Esperando-Jugador"){
		let boton = event.target;
		if(boton === patron[Patron_Jugador]){
			Patron_Jugador = Patron_Jugador + 1;
			iluminar(boton);
			
			if(Patron_Jugador === patron.length){
				SiguienteNivel();
			}
		}else{
			estado = "Perdio";
			titulo.innerText = "Perdiste 🥺";
			document.querySelector(".jugar").style.display = "block";

			reproducirSonido("Perdedor");
		}
	}
}

function OnOffSonido(){
	if( Sonido ){
		Sonido = false;
		document.querySelector(".imagen_sonido").src = "icon/Desactivar.png";
	}else{
		Sonido = true;
		document.querySelector(".imagen_sonido").src = "icon/Activar.png";
	}
}