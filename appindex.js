let ancho = 0;
let imagen = document.querySelector(".fondo");
window.addEventListener("resize", inicio);

inicio()

function inicio() {
    ancho = window.outerWidth;

    if (ancho >=  850){
        imagen.style.width= "850px";
        imagen.src="img/fondo.jpg";
        document.getElementById("fondoIndex").style.display="block";
        document.getElementById("coordenadas").coords="15,270,245,420";
        document.getElementById("linkImagen").href="https://www.freepik.es/vector-gratis/oficina-detectives-tablero-escritorio-evidencias_36533172.htm#query=spy&position=4&from_view=author&uuid=9fdcb9c6-cbf6-4814-96df-b61c063c5246";   
    }
    else if (ancho >= 450 && ancho < 850) {
        imagen.style.width= "450px";
        imagen.src="img/fondo.jpg";
        document.getElementById("fondoIndex").style.display="block";
        document.getElementById("coordenadas").coords="10,145,127,223";
        document.getElementById("linkImagen").href="https://www.freepik.es/vector-gratis/oficina-detectives-tablero-escritorio-evidencias_36533172.htm#query=spy&position=4&from_view=author&uuid=9fdcb9c6-cbf6-4814-96df-b61c063c5246";   
    }
    else {
        imagen.style.width= "300px";
        imagen.src="img/fondo2.jpg";
        document.getElementById("fondoIndex").style.display="block";
        document.getElementById("coordenadas").coords="120,80,195,145";
        document.getElementById("linkImagen").href="https://www.freepik.es/vector-gratis/habitacion-interior-oficina-vectorial-dibujos-animados-escritorio_48512163.htm#fromView=search&page=5&position=19&uuid=625b4fb0-6108-4765-b43b-bf907a0de7b4";   
    }

}


function cerrar() {
    const elemento = document.querySelector("#fondoPostit");
    elemento.style.display = "none";
}
