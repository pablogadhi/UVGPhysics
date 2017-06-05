/*  Autor: Pablo Gadhi Rodriguez Marcucci
    Fecha: 01/06/2017
    Descripción: Control de las animaciones de ondas estacionarias.
 */


/* Animaciones de la simulación se ejecutan al cargar la página*/
$(document).ready(function() {
    $("#waveOpen").css("opacity", "0")
    $("#masaM").velocity({translateX: "150px", translateY: "-50px"}, {duration: 4000, loop: true});
    $("#forceVector").velocity({translateX: "150px", translateY: "-50px"}, {duration: 4000, loop: true});
    $("#cuerdaM").velocity({transformOriginX:"50%", transformOriginY:"1%", rotateZ: "-24.5deg"}, {duration: 4000, loop: true});
    $("#waveClose").velocity({opacity: 0}, {duration: 4000, loop: true});
    $("#waveOpen").velocity({opacity: 0.9}, {duration: 4000, loop: true});
});


var contador = 0; //Contador para verificación de clicks del botón siguiente


/* Función que se ejecuta al presionar el botón siguiente y va mostrando la linea de las respuestas, dependiendo del valor del contador.*/
function mostrarPasos(){
    contador = contador + 1;
    switch(contador){
        case 1:
            $("#p1").velocity({opacity: 1}, {duration: 2000});
            break;
        case 2:
            $("#p2").velocity({opacity: 1}, {duration: 2000});
            break;
        case 3:
            $("#p3").velocity({opacity: 1}, {duration: 2000});
            break;
        case 4:
            $("#p4").velocity({opacity: 1}, {duration: 2000});
            break;
        case 5:
            $("#p5").velocity({opacity: 1}, {duration: 2000});
            break;
        case 6:
            $("#p6").velocity({opacity: 1}, {duration: 2000});
            break;
        case 7:
            $("#p7").velocity({opacity: 1}, {duration: 2000});
            break;
        case 8:
            $("#p8").velocity({opacity: 1}, {duration: 2000});
            break;
        case 9:
            $("#p9").velocity({opacity: 1}, {duration: 2000});
            break;
        case 10:
            $("#p10").velocity({opacity: 1}, {duration: 2000});
            break;
        case 11:
            $("#p11").velocity({opacity: 1}, {duration: 2000});
            break;
    }
    
    
}