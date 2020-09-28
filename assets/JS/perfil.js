
console.log (" - taller logica II - Perfil ");


const formularioTarea = document.getElementById('formularioTarea');

const welcome = document.getElementById('welcome');
const name =  localStorage.getItem('nameLogeado');
const last =  localStorage.getItem('apellidoLogeado');
const score =  localStorage.getItem('puntosLogueado');
const index =  localStorage.getItem('posicionVector');


const lista = document.getElementById("lista");




let existe;
let indice;

welcome.innerText= "Bienvenido " + name + " pts  " + score;

formularioTarea.addEventListener('submit', (e)=>{ 

    e.preventDefault();

    let textoIn = document.getElementById("textoIn");
    let etiqueta = document.createElement("li");
    
    etiqueta.textContent = textoIn.value;
    lista.appendChild(etiqueta);
    textoIn.value = "";



})


btnRta1.addEventListener('click', ()=>{ 

    usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"))

    let puntos = parseInt(usuariosRegistrados[index].puntos)
    console.log ("puntos traidos " + puntos)
    puntos ++;
    

    usuariosRegistrados[index].puntos = puntos
    const usuariosString = JSON.stringify(usuariosRegistrados)
    localStorage.setItem('usuarios', usuariosString)

    welcome.innerText= "Bienvenido " + name + " con  " + puntos;

})


