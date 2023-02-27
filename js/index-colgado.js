
//Creo las variables necesarias
let Guiones_Adivinar=[];
let Letras_Ingresadas="";
let Nombre_Jugador="";
let Palabra_Adivinar="";
let LetasErroneas=0;
let mostrar_letras = document.querySelector(".mostrar_letras");
let Sonido = true;
let listo = false;

//Cambio el titulo al cambiar de ventana
// let auxTitulo = document.title;
// window.addEventListener('blur', () => {
	// auxTitulo = document.title;
	// document.title = "¡No te vayas! Juega conmigo 🥺";
// })

// window.addEventListener('focus', () =>{
	// document.title = auxTitulo;
// })


//Accion al seleccionar el modo de juego
function Opcion_Modo_Juego(){
	var select = document.querySelector(".form-datos__Modo_Juego");
    var option = select.options[select.selectedIndex];
    // document.getElementById('value').value = option.value;
    // document.getElementById('text').value = option.text;

    if(option.text === "Seleccione una opción:") {
    	document.querySelector(".boton-form-datos__boton_jugar").style.display = "none";
    } else document.querySelector(".boton-form-datos__boton_jugar").style.display = "block";

    if(option.text === "Ingresar una Palabra") {
    	document.querySelector(".form-datos__palabra").style.display = "block";
    	document.querySelector(".form-datos__palabra").value = "";
    } else document.querySelector(".form-datos__palabra").style.display = "none";

    if(option.text != "Seleccione una opción:" && option.text != "Ingresar una Palabra") document.querySelector(".form-datos__palabra").value = obtenerPalabra(option);
}

// Me retorna un numero al azar
function Azar( max ){
	return Math.floor(Math.random() * max);
}

// Obtengo la palabra a adivinar dependiendo de la seleccion
function obtenerPalabra( opcion ){
	let palabras = ["Dibujos","Corto","Largo","Calentar","Marcador","Boton","Colchon","Accion","Camara","Luz","Beber","Tomar","Sorbete","Bombilla","Motor","Zapallo","Coreano","Foco","Adaptador","Tapa","Sucio","Limpio","Piso","Almohadon","Maquina","Cartas","Poett","Coser","Paraguas","Internet","Cable","Gatorade","Toalla","Perro","Gato","Loco","Peluche","Naranja","Detergente","Desodorante","Botella","Madera","Mochila","Ventilador","Caja","Impresora","Gorras","Agua","Vaso","Stiker","Cargador","Botella","Peine","Mouse","Bolsa","Puerta","Enchufe","Astronauta","Andar","Caza","Despegar","Atreverse","Conde","Acostarse","Investigador","Pote","Secretaria","Cantantes","Ventoso","Recreo","Pulso","Grifo","Gotas","Espiar","Nieta","Estanciero","Modista","Eclipse","Barranco","Continuar","Pintor","Mecha","Dinamita","Abrir","Ciclomotor","Pupila","Cactus","Serruchar","Salir","Pasto","Electricidad","Debajo","Rumores","Ecuador","Alimento","Riel","Divorciado","Tejer","Acto","Abrigo","Adivino","Epidemia","Bigote","Juntar","Conducto","Talar","Cuba","Braza","Envoltura","Pegar","Maleta","Siete","Pantalla","Levadura","Torre","Demonio","Desafiar","Pagar","Espiga","Terreno","Prisma","Lavanda","Esgrima","Colmillo","Forma","Arma","Reflector","Circo","Centro","Relleno","Periodistas","Flan","Victima","Ficha","Sumergir","Decorar","Leche","Diccionario","Antiguo","Antiguo","Segundos","Losa","Escritorio","Rusia","Invierno","Foto","Mirar","Habano","Maduro","Establo","Respirar","Tortilla","Enfurecer","Brea","Alpinista","Payaso","Amputar","Fichero","Corral","Lianas","Bebible","Pie","Estatua","Horas","Rosa","Remar","Polvo","Piernas","Cohete","Membrana","Motel","Pata","Preparar","Atraco","Perfume","Chocolate","Truco","Respirar","Copiar","Salvaje","Deportar","Apretado","Semillas","Siameses","Desafiar","Mercenario","Escarbadientes","Imitar","Jarabe","Manteca","Hermano","Zorro","Hilvanar","Esteroides","Servir","Gato","Borrar","Cartero","Peluca","Tapizar","Labio","Tenor","Banda","Maza","Ejercicio","Lealtad","Problemas","Alcohol","Rastrillar","Crema","Caspa","Descubrir","Padre","Aburrimiento","Fila","Mercurio","Asegurar","Chupar","Candado","Control","Escritores","Niño","Alternar","Ver","Acuerdo","Desaparecer","Prolongador","Actor","Liberar","Reportero","Magnitud","Cuaderno","Cerradura","Gala","Linda","Atrapar","Goma","Barriga","Filtro","Imagen","Armas","Urgencia","Derecha","Moverse","Actriz","Chismoso","Desnudo","Erosionar","Mes","Abuela","Lejos","Evadir","Muchacho","Untar","Barba","Tarjetas","Atraer","Fugarse","Hilos","Destapar","Recortar","Yo","Sal","Mezquita","Turno","Resbalar","Baldosa","Miedo","Sortija","Gris","Almanaque","Margarina","Robot","Cebra","Vicio","Delantal","Advertencia","Ninja","Campana","Brea","Regalar","Bola","Realidad","Pavo","Raya","Reglas","Fracturar","Llaves","Fumar","Partir","Clima","Trasplantar","Poner","Filmar","Escarapela","Grecia","Truco","Ladrillo","Escribir","Bochorno","Huevo","Jugar","Signo","Pensamiento","Evadir","Apostador","Saltar","Embajador","Modelo","Olimpiadas","Colmena","Arco","Hawaiano","Panorama","Barricada","Fritas","Entero","Saliva","Amordazar","Tragar","Herrero","Sabor","Recibir","Inflamar","Cerrar","Jet","Millones","Media","Vuelta","Cueva","Nota","Acostarse","Tinta","Brindar","Congelador","Negativo","Lavarropas","Huella","Boquilla","Asesinato","Podio","Grifo","TV","Apellido","Transpirar","Buey","Machacar","Astro","Mexicano","Escapar","Plaqueta","Australopithecus","Unicornio","Nalga","Discoteca","Avestruz","Topadora","Trofeo","Grito","Arpa","Membrana","Enero","Palmera","Lavarropa","Contemplar","Peaje","Remos","Biombo","Completar","Trasbordar","Obscuridad","Bidet","Vacaciones","Bate","Vocales","Pilas","Pastilla","Manchar","Aves","Robar","Turbante","Parrilla","Amuleto","Caldera","Hermanastra","Faringe","Etapas","Voleibol","Zanahoria","Loto","Zorro","Contento","Colores","Avenida","Cordero","Gaseosa","Carretera","Cucurucho","Diagrama","Carne","Estrella","Subir","Tomo","Manejar","Circuito","Trofeo","Desviar","Fusta","Colmena","Muchas","Taberna","Contar","Turbante","Soltero","Cuchilla","Aerosol","Hueso","Descongelar","Billar","Cucaracha","Ventilar","Vecindario","Jubilado","Cartucho","Atletismo","Rayo","Goma","Prisionero","Bailarina","Quedarse","Foto","Rellenar","Ahogar","Acusado","Boxeador","Memoria","Uvas","Sello","Delta","Sonrojarse","Bolsillo","Morder","Cintura","Donald","Empresa","Espalda","Cobarde","Lunar","Joven","Manicomio","Herradura","Mitad","Palmada","Estribos","Rodilla","Centellear","Ocupar","Minuto","Mancha","Empalmar","Embajador","Francia","Rubrica","Vaca","Claro","Nadar","Ley","Candado","Segundos","Carambola","Cerdo","Fabrica","Mapamundi","Duro","Aplanadora","Asalto","Reflector","Nacimiento","Signos","Pesadilla","Bomberos","Tierra","Tijera","Fuente","Billetes","Cierre","Laguna","Volar","Ingreso","Velorio","Fruncir","Oscurecer","Caballero","Aburrimiento","Hormiga","Tatuaje","Abejas","Rayado","Bote","Principal","Hombreras","Cocinero","Fuerza","Amuleto","Medicamento","Trineo","Panda","Hermosa","Silla","Remolque","Curva","Ovillo","Siembra","Doctora","Empujar","Cantante","Rechazar","Grapadora","Bofetada","Salida","Copiloto","Momia","Epitafio","Internet","Personalidad","Santo","Rotor","Pegamento","Bien","Agitar","Pulpo","Macarrones","Preciosa","Tomo","Aspen","Gafas","Naranja","Marea","Mayordomo","Herir","Sorteo","Apretar","Casco","Mujer","Tocadiscos","Cita","Color","Marcadores","Pellizcar","Desgracia","Diente","Postizos","Cuchillo","Evaporar","Refugio","Carpintero","Combate","Corcho","Rebotar","Asesinar","Vida","Empaquetar","Resortes","Delta","Aburrir","Embarazo","Quiero","Fotos","Caries","Edificio","Conectar","Preparar","Jinete","Intendente","Cara","Inflamar","Muro","Espaguetis","Redondo","Cuadrado","Bota","Pescadera","Sombrilla","Pedazo","Rascacielos","Restar","Sumar","Imperdible","Nublado","Dial","Engranaje","Cacerola","Lastre","Marchitar","Nieta","Refugio","Poema","Aspirina","Cargar","Japonesa","Pintura","Granja","Hemisferios","Calabozo","Creciente","Fruncir","Desventaja","Gasolina","Morse","Visera","Terraza","Inspeccionar","Esposas","Disco","Descifrar","Muertos","Ventilar","Forro","Lava","Conde","Reglas","Hilo","Borracho","Espectro","Granizo","Pescar","Aburrir","Clavo","Zapatillas","Batalla","Relampaguear","Moqueta","Esposo","Carabelas","Famoso","Final","Imprimir","Chicos","Trigo","Jueves","Extraterrestre","Casado","Civil","Ciudad","Pellizcar","Juego","Fruncir","Levantarse","Tatuaje","Cachorro","Campamento","Escritura","Ingles","Caballo","Hospital","Enfermedad","Diferenciar","Computadora","Computadora","Dentadura","Cigarrillos","Movimiento","Falsificar","Comerciante","Fotocopiadora","Diligencia","Documentos","Futbolista","Duplicado","Gimnasia","Recubrimiento","Almanaque","Celebridad","Dromedario","Siameses","Desenvolver","Irracional","Wifi","Desodorante","Competencia","Orientarse","Instrumentos","Escaparse","Amordazar","Amordazar","Desgarrar","Finanzas","Coincidencia","Delincuente","Guirnalda","Transportador"];
	let auxPalabras = [];

	if( opcion.text === "Palabra Corta"){
		for (var i = 0; i < palabras.length; i++) if(palabras[i].length < 5) auxPalabras.push(palabras[i]);
		return auxPalabras[Azar(auxPalabras.length)];
	}

	if( opcion.text === "Palabra Mediana"){
		for (var i = 0; i < palabras.length; i++) if(palabras[i].length >=5 && palabras[i].length < 8) auxPalabras.push(palabras[i]);
		return auxPalabras[Azar(auxPalabras.length)];
	}

	if( opcion.text === "Palabra Larga"){
		for (var i = 0; i < palabras.length; i++) if(palabras[i].length >= 8) auxPalabras.push(palabras[i]);
		return auxPalabras[Azar(auxPalabras.length)];
	}

	if( opcion.text === "Palabra al Azar"){
		return palabras[Azar(palabras.length)];
	}

	return console.error("Error, no tiene que llegar al final");
}

//Valido si al ingresar una palabra la palabra tiene los requerimientos necesarios
function validar(elemento){
	let texto = elemento.value
	let validar = new RegExp("[^A-Za-z]+")
	if(validar.test(texto)){
		texto = texto.substr(0,texto.length-1)
		document.querySelector(".mostrar_errores").innerHTML = "Ingrese letras solamente";
	} else document.querySelector(".mostrar_errores").innerHTML = "";
	elemento.value = texto
}

//Accion del boton listo despues de seleccionar una opcion
function botonListo(){
	Nombre_Jugador = document.querySelector(".form-datos__jugador").value.toUpperCase();
	Palabra_Adivinar = document.querySelector(".form-datos__palabra").value.toUpperCase().trim();

	if(Nombre_Jugador === "") document.querySelector(".mostrar_errores").innerHTML = "Ingrese un nombre";
	else if(Palabra_Adivinar === "") document.querySelector(".mostrar_errores").innerHTML = "Ingrese una palabra";
	else{
		if(!isNaN(Palabra_Adivinar)){
			document.querySelector(".mostrar_errores").innerHTML = "No ingresar números en la palabra";
			return;
		}

		mostrar_letras.innerHTML="";
		for (var i = 0; i < Palabra_Adivinar.length; i++) Guiones_Adivinar[i] = "-";
		for (var i = 0; i < Palabra_Adivinar.length; i++) mostrar_letras.innerHTML+="- ";

		OcultarInicio();
		document.querySelector(".imagen").src="icon/Ahor_"+LetasErroneas+".png";
	}

}


//Oculto los elementos que no necesito al jugar
function OcultarInicio(){
	listo = true;

	document.querySelector(".titulo").innerHTML = "Presione una letra";
	
	document.querySelector(".form-datos__Modo_Juego").style.display = "none";
	document.querySelector(".form-datos__jugador").style.display = "none";
	document.querySelector(".form-datos__palabra").style.display = "none";
	document.querySelector(".boton-form-datos__boton_jugar").style.display = "none";
	document.querySelector(".mostrar_errores").innerHTML = "";
}

//Oculto los elementos que no necesito al finalizar la partida
function OcultarFinal(){
	listo = false;
	document.querySelector(".mostrar_errores").style.display = "none";
	document.querySelector(".reiniciar").style.display = "block";
}


//Reproducir sonido
//Creo la etiqueta por fuera para que cuando se reproduzca no se interpongan
let audioEtiqueta = document.createElement("audio");
function reproducirSonido(ruta){
	audioEtiqueta.setAttribute("src", "sound/"+ruta+".wav");
    if(Sonido) audioEtiqueta.play();
    // console.log(`Reproduciendo: ${audioEtiqueta.src}`);
}



window.onload = function() { document.onkeypress = verLetras; }
// Valido la letra ingresada
function verLetras(elemento) {
 	if(!listo) return;
	let letra = String.fromCharCode(elemento.which).toUpperCase().trim();
	// alert(letra);
	let validar = new RegExp("[^A-Za-z]+");
	if(validar.test(letra)){
		// texto = texto.substr(0,texto.length-1)
		letra.replace(/[^A-Za-z\#\&]+/g, "");
		elemento.value = letra;
		document.querySelector(".mostrar_errores").innerHTML = "Ingrese letras solamente";
		return;
	} else document.querySelector(".mostrar_errores").innerHTML = "";

	// let letra = document.querySelector(".form-jugar__letra").value.toUpperCase().trim();

	if(!letra.length){
		document.querySelector(".mostrar_errores").innerHTML = "Ingrese una palabra";
		
		// document.querySelector(".imagen").style.dropShadow = "0 0 10px rgb(0,255,0)";
		// document.querySelector(".imagen").style.dropShadow = "0 0 20px rgb(0,255,0)";
		// document.querySelector(".imagen").style.dropShadow = "0 0 50px rgb(0,255,0)";
		
		return;
	}


	if(!isNaN(letra)){
		document.querySelector(".mostrar_errores").innerHTML = "No ingrese números";
		// document.querySelector(".form-jugar__letra").value = "";
		return;
	}

	for (var i = 0; i < Letras_Ingresadas.length; i++){
		if(letra===Letras_Ingresadas[i]) {
			document.querySelector(".mostrar_errores").innerHTML = "Ya ingresaste la letra: "+letra;
			// document.querySelector(".form-jugar__letra").value = "";
			return;
		}
	}
	
	Letras_Ingresadas += letra;

	let hayLetras = false;
	for (var i = 0; i < Palabra_Adivinar.length; i++){
		if(letra === Palabra_Adivinar[i]){
			Guiones_Adivinar[i] = letra;
			hayLetras = true;
		}
	}

	if(hayLetras==false) {
		LetasErroneas+=1;
		reproducirSonido("Error");
		document.querySelector(".imagen").src="icon/Ahor_"+LetasErroneas+".png";
		document.querySelector(".mostrar_errores").innerHTML = "La letra: "+letra+" no esta en la palabra";
	} else{
		reproducirSonido("Correcto");
		document.querySelector(".mostrar_errores").innerHTML = "";
	} 

	mostrar_letras.innerHTML="";
	let ganaste = true;
	for (var i = 0; i < Palabra_Adivinar.length; i++) {
		mostrar_letras.innerHTML+=(Guiones_Adivinar[i]+" ");
		if(Palabra_Adivinar[i] != Guiones_Adivinar[i]) ganaste = false;
	}

	if(LetasErroneas==6){
			reproducirSonido("Perdedor");
			OcultarFinal();
			document.querySelector(".mostrar_letras").innerHTML = Nombre_Jugador+" Perdiste! 🥺";
			document.querySelector(".mostrar_letras").style.color = "red";
			document.querySelector(".mostrar_letras_ingresadas").innerHTML = "La palabra era: "+Palabra_Adivinar;
			document.querySelector(".mostrar_letras_ingresadas").style.color = "red";
			document.querySelector(".titulo").innerHTML = "Perdiste 🥺";
	}else{
		if(ganaste) {
			reproducirSonido("Ganador");
			OcultarFinal();
			document.querySelector(".mostrar_letras").innerHTML = Nombre_Jugador+" ganaste, Felicidades! 😁";
			document.querySelector(".mostrar_letras_ingresadas").innerHTML = "La palabra era: "+Palabra_Adivinar;
			document.querySelector(".titulo").innerHTML = "Ganaste 😁";
		} else document.querySelector(".mostrar_letras_ingresadas").innerHTML = "Letras Ingresadas: "+Letras_Ingresadas;
	}
	// document.querySelector(".form-jugar__letra").value = "";
}

//Reinicio el juego al finalizar
function reiniciarJuego(){
	location.reload();
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
