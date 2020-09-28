//const seleccionar = document.getElementById("seleccion").value
//const seleccionarb = document.getElementById("seleccionarb").value

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
		
		
		
	} else {
		console.log("Nop, te equivocaste!");
		swal("Nop!", "Te equivocaste!!!", "error");
		respuesta2.className = 'disabled custom-select border border-danger';
		document.getElementById("seleccion").disabled = true;
	}

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
		
		
	} else {
		console.log("Nop, te equivocaste!");
		swal("Nop!", "Te equivocaste!!!", "error");
		respuesta2.className = 'disabled custom-select border border-danger';
		document.getElementById("seleccion2").disabled = true;
	}

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
		
		
	} else {
		console.log("Nop, te equivocaste!");
		swal("Nop!", "Te equivocaste!!!", "error");
		respuesta2.className = 'disabled custom-select border border-danger';
		document.getElementById("seleccion3").disabled = true;
	}

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
		
		
	} else {
		console.log("Nop, te equivocaste!");
		swal("Nop!", "Te equivocaste!!!", "error");
		respuesta2.className = 'disabled custom-select border border-danger';
		document.getElementById("seleccion4").disabled = true;
	}

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
		
	if (respuesta == "miguel") {
		console.log("Respuesta correcta!!");
		swal("Correcto!", "Respuesta correcta!!", "success");
		respuesta2.className = 'custom-select border border-success';
		foto.className = 'card-img-top fotoCorrecta '
		document.getElementById("seleccion5").disabled = true;
		
		
	} else {
		console.log("Nop, te equivocaste!");
		swal("Nop!", "Te equivocaste era Javier!!!", "error");
		respuesta2.className = 'disabled custom-select border border-danger';
		foto.className = 'card-img-top fotoCorrecta'
		document.getElementById("seleccion5").disabled = true;
	}

}