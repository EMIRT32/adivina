//const seleccionar = document.getElementById("seleccion").value
//const seleccionarb = document.getElementById("seleccionarb").value


const welcome = document.getElementById('welcome');
const name =  localStorage.getItem('nameLogeado');
const last =  localStorage.getItem('apellidoLogeado');

const index =  localStorage.getItem('posicionVector');

function inicio(){
}

let score =  localStorage.getItem('puntosLogueado');


usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"))

    let puntos = parseInt(usuariosRegistrados[index].puntos)
	console.log ("puntos traidos " + puntos)
	
	welcome.innerText= "Bienvenido " + name + " pts  " + puntos;

//----------------------------------------------------------------------

function mostrarSelect(){
   
	 


	//se obtiene el valor del id
	const respuesta = document.getElementById('seleccion').value;
	console.log(respuesta);
	const foto = document.getElementById('imagen');

	// se obtiene el texto seleccionado
	const respuesta2 = document.getElementById('seleccion');
	let texto = respuesta2.options[respuesta2.selectedIndex].text;
	console.log(texto);
		
	if (respuesta == "si") {
		console.log("Respuesta correcta!!");
		swal("Correcto!", "Respuesta correcta!!", "success");
		respuesta2.className = 'custom-select border border-success';
		foto.className = 'card-img-top fotoC'
		document.getElementById("seleccion").disabled = true;
		puntos ++;
		
		
	} else {
		console.log("Nop, te equivocaste!");
		swal("Nop!", "Te equivocaste!!!", "error");
		respuesta2.className = 'disabled custom-select border border-danger';
		document.getElementById("seleccion").disabled = true;
	}


	usuariosRegistrados[index].puntos = puntos
    const usuariosString = JSON.stringify(usuariosRegistrados)
    localStorage.setItem('usuarios', usuariosString)

	welcome.innerText= "Bienvenido " + name + " con  " + puntos;

}


function mostrarSelect2(){
	//se obtiene el valor del id
	const respuesta = document.getElementById('seleccion2').value;
	console.log(respuesta);
	const foto = document.getElementById('imagen');

	// se obtiene el texto seleccionado
	const respuesta2 = document.getElementById('seleccion2');
	let texto = respuesta2.options[respuesta2.selectedIndex].text;
	console.log(texto);
		
	if (respuesta == "si") {
		console.log("Respuesta correcta!!");
		swal("Correcto!", "Respuesta correcta!!", "success");
		respuesta2.className = 'custom-select border border-success';
		foto.className = 'card-img-top fotoC2'
		document.getElementById("seleccion2").disabled = true;
		puntos ++;
		
	} else {
		console.log("Nop, te equivocaste!");
		swal("Nop!", "Te equivocaste!!!", "error");
		respuesta2.className = 'disabled custom-select border border-danger';
		document.getElementById("seleccion2").disabled = true;
	}

	usuariosRegistrados[index].puntos = puntos
    const usuariosString = JSON.stringify(usuariosRegistrados)
    localStorage.setItem('usuarios', usuariosString)
	welcome.innerText= "Bienvenido " + name + " con  " + puntos;

}

function mostrarSelect3(){
	//se obtiene el valor del id
	const respuesta = document.getElementById('seleccion3').value;
	console.log(respuesta);
	const foto = document.getElementById('imagen');

	// se obtiene el texto seleccionado
	const respuesta2 = document.getElementById('seleccion3');
	let texto = respuesta2.options[respuesta2.selectedIndex].text;
	console.log(texto);
		
	if (respuesta == "si") {
		console.log("Respuesta correcta!!");
		swal("Correcto!", "Respuesta correcta!!", "success");
		respuesta2.className = 'custom-select border border-success';
		foto.className = 'card-img-top fotoC3'
		document.getElementById("seleccion3").disabled = true;
		puntos ++;
		
	} else {
		console.log("Nop, te equivocaste!");
		swal("Nop!", "Te equivocaste!!!", "error");
		respuesta2.className = 'disabled custom-select border border-danger';
		document.getElementById("seleccion3").disabled = true;
	}

	usuariosRegistrados[index].puntos = puntos
    const usuariosString = JSON.stringify(usuariosRegistrados)
    localStorage.setItem('usuarios', usuariosString)

	welcome.innerText= "Bienvenido " + name + " con  " + puntos;
}

function mostrarSelect4(){
	//se obtiene el valor del id
	const respuesta = document.getElementById('seleccion4').value;
	console.log(respuesta);
	const foto = document.getElementById('imagen');

	// se obtiene el texto seleccionado
	const respuesta2 = document.getElementById('seleccion4');
	let texto = respuesta2.options[respuesta2.selectedIndex].text;
	console.log(texto);
		
	if (respuesta == "si") {
		console.log("Respuesta correcta!!");
		swal("Correcto!", "Respuesta correcta!!", "success");
		respuesta2.className = 'custom-select border border-success';
		foto.className = 'card-img-top fotoC4'
		document.getElementById("seleccion4").disabled = true;
		puntos ++;
		
	} else {
		console.log("Nop, te equivocaste!");
		swal("Nop!", "Te equivocaste!!!", "error");
		respuesta2.className = 'disabled custom-select border border-danger';
		document.getElementById("seleccion4").disabled = true;
	}


	usuariosRegistrados[index].puntos = puntos
    const usuariosString = JSON.stringify(usuariosRegistrados)
    localStorage.setItem('usuarios', usuariosString)


	welcome.innerText= "Bienvenido " + name + " con  " + puntos;

}

function mostrarSelect5(){
	//se obtiene el valor del id
	const respuesta = document.getElementById('seleccion5').value;
	console.log(respuesta);
	const foto = document.getElementById('imagen');

	// se obtiene el texto seleccionado
	const respuesta2 = document.getElementById('seleccion5');
	let texto = respuesta2.options[respuesta2.selectedIndex].text;
	console.log(texto);
		
	if (respuesta == "emirt") {
		console.log("Respuesta correcta!!");
		swal("Correcto!", "Respuesta correcta!!", "success");
		respuesta2.className = 'custom-select border border-success';
		foto.className = 'card-img-top fotoCorrecta '
		document.getElementById("seleccion5").disabled = true;
		puntos ++;
		
	} else {
		console.log("Nop, te equivocaste!");
		swal("Nop!", "Te equivocaste era Javier!!!", "error");
		respuesta2.className = 'disabled custom-select border border-danger';
		foto.className = 'card-img-top fotoCorrecta'
		document.getElementById("seleccion5").disabled = true;
	}

	usuariosRegistrados[index].puntos = puntos
    const usuariosString = JSON.stringify(usuariosRegistrados)
    localStorage.setItem('usuarios', usuariosString)

	welcome.innerText= "Bienvenido " + name + " con  " + puntos;
}

