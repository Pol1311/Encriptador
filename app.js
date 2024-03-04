function encriptar() {
        
    let texto = document.getElementById("textoCapturado").value
    const cadena = [];
        
    for (let i = 0; i < texto.length; i++) {
        cadena.push(texto.charAt(i));
    }

   for(let i = 0; i < cadena.length; i++){
            
        if (cadena[i] == "a") {
           cadena[i] = "ai";
        }
        else if (cadena[i] == "e") {
            cadena[i] = "enter";
        }
        else if (cadena[i] == "i") {
            cadena[i] = "imes";
        }
        else if (cadena[i] == "o") {
                cadena[i] = "ober";
        }
        else if (cadena[i] == "u") {
           cadena[i] = "ufat";
        }

        filtro(cadena);
    } 
}
    

function desencriptar() {
    
    let texto = document.getElementById("textoCapturado").value;

    const cadena = [];
    
    for (let i = 0; i < texto.length; i++) {
        cadena.push(texto.charAt(i));
    }
    
    for(let i = 0; i < cadena.length; i++){
        
        if (cadena[i] == "a" && cadena[i+1] == "i") {
            cadena[i] = "a";
            cadena.splice(i+1, 1);
        }
    
        if (cadena[i] == "e" && cadena[i+1] == "n" && cadena[i+2] == "t" && cadena[i+3] == "e" && cadena[i+4] == "r") {
            cadena[i] = "e" 
            cadena.splice(i+1, 4);
        }
    
        if (cadena[i] == "i" && cadena[i+1] == "m" && cadena[i+2] == "e" && cadena[i+3] == "s") {
            cadena[i] = "i";
            cadena.splice(i+1, 3);
        }
    
        if (cadena[i] == "o" && cadena[i+1] == "b" && cadena[i+2] == "e" && cadena[i+3] == "r") {
            cadena[i] = "o";
            cadena.splice(i+1, 3);
        }
    
        if (cadena[i] == "u" && cadena[i+1] == "f" && cadena[i+2] == "a" && cadena[i+3] == "t") {
            cadena[i] = "u";
            cadena.splice(i+1, 3);
        }

        filtro(cadena);

    }       

}

function ventana(elemento) {
    document.getElementById("textoCapturado").value = elemento.join("");
    document.getElementById("mostrarResultado").innerHTML= elemento.join("");
    document.getElementById("mensaje").style.visibility="visible";
    document.getElementById("psyduck").style.display="none";
    document.getElementById("chopper").style.visibility="visible";
    document.getElementById("botonCopiar").style.visibility="visible";
    document.getElementById("boton1").onclick = function ()  { deshabilitar() };
    document.getElementById("boton2").onclick = function ()  { deshabilitar() };
}

function cerrar() {
    const elemento = document.querySelector("#mensaje");
    elemento.style.visibility = "hidden";
    document.getElementById('textoCapturado').value = ''; 
    document.getElementById("chopper").style.visibility="hidden";
    document.getElementById("botonCopiar").style.visibility="hidden";
    document.getElementById("boton1").onclick = function ()  { encriptar() };
    document.getElementById("boton2").onclick = function ()  { desencriptar() };

}

function copiar() {
  var copyText = document.getElementById("textoCapturado");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  document.getElementById("info").classList.remove("notificacion");
  void document.getElementById("info").offsetWidth;
  document.getElementById("info").className="notificacion";
}

function filtro( cadena ) {

    let texto = document.getElementById("textoCapturado").value;
  //  let coincidencia = texto.search(/[^a-z|^0-9| ]/g);   
    let coincidencia = texto.search(/[^a-z| ]/g);
    let espacios = texto.search(/[a-z]/g);  
    
   // let mayuscula=false;

 /* 
    for (let i = 0; i < texto.length; i++ ) {
        if (texto.charAt(i) == texto.charAt(i).toUpperCase()){
            mayuscula = true;
        }

        if (coincidencia != -1 ) {
            caracteres = true;
            console.log(coincidencia);
        }
        console.log(caracteres);
    } 
*/

    if  (coincidencia != -1 ) {
        document.getElementById("mensaje").style.visibility="visible";
        document.getElementById("psyduck").style.display="inline";
        document.getElementById("chopper").style.visibility="hidden";
        document.getElementById("botonCopiar").style.visibility="hidden";
        document.getElementById("mostrarResultado").innerHTML= "No se permiten mayúsculas ni caracteres especiales.";
        //mayuscula=false;
    }
    else {
        if (espacios != -1) {
            ventana(cadena);
        }
    }


}

function deshabilitar () {

}