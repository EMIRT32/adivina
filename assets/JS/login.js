
console.log (" - taller logica II - Login ");

const botonIn = document.getElementById('botonIn');
const formularioLogin = document.getElementById('formularioLogin');
const alerta = document.getElementById('alerta');
const alertaMensaje = document.getElementById('alertaMensaje');


let listaUsuarios = [];
let existe;
let indice;


formularioLogin.addEventListener('submit', (e)=>{ 

    e.preventDefault();
    const usuLogeado = document.getElementById('registroUsuarioIn');
    const pasLogeado = document.getElementById('registroContrasenaIn');

    console.log ("usuasrio logeado " + usuLogeado.value)
    console.log ("clave  logeado " + pasLogeado.value)
 
    if(localStorage.getItem('usuarios') == null){
       
        alerta.classList.remove('ocultar') 
        alertaMensaje.innerText = " No hay Usuarios Registrados Local Storage";

    }else{
        // descargarmos la lista de usuarios del local storage
        usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"))
        //console.log (usuariosRegistrados)
        //verificamos si el usuario existe
        existe = false;
        indice = 0;
        for(let i = 0; i<usuariosRegistrados.length; i += 1 ){
            if (usuariosRegistrados[i].nick === usuLogeado.value) {
                existe = true;
                indice=i;
            }
        }

        

        if (existe) {
            console.log (usuariosRegistrados[indice].nick + "  esta en la posicion " + indice + " clave " + usuariosRegistrados[indice].pass )
            if (usuariosRegistrados[indice].pass === pasLogeado.value){
            console.log ("welcome  " + usuariosRegistrados[indice].nick )
               localStorage.setItem('nameLogeado',usuariosRegistrados[indice].name);
               localStorage.setItem('apellidoLogeado',usuariosRegistrados[indice].last);
               localStorage.setItem('nickLoegado',usuariosRegistrados[indice].nick);
               localStorage.setItem('puntosLogueado',usuariosRegistrados[indice].puntos);
               localStorage.setItem('posicionVector',indice);

               alerta.classList.add('ocultar')
               usuLogeado.value=""
               pasLogeado.value=""

               window.location="desconocido.html";

             }else {
                alerta.classList.remove('ocultar') 
                alertaMensaje.innerText = "Contraseña errada para " + usuLogeado.value;
            }
    
        }else {
            alerta.classList.remove('ocultar') 
            alertaMensaje.innerText = " El Usuario no esta registrado ";
        }





    }

});