var piezas = document.getElementsByClassName('movil');

var tamWidth = [134, 192, 134, 163, 134, 163, 134, 192, 134];
var tamHeight = [163, 134, 163, 192, 134, 163, 134, 163];
for(var i =0; i < piezas.length; i++){
    piezas[i].setAttribute("width", tamWidth[i]);
    piezas[i].setAttribute("height", tamHeight[i]);
    piezas[i].setAttribute("x", Math.floor((Math.random()*10)+1));
    piezas[i].setAttribute("y", Math.floor((Math.random()*409)+1));
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)")
}

var elementoSeleccionado = 0;
var currentX =0;
var currentY =0;
var currentPosX =0;
var currentPosY =0;

Function seleccionarElemento(evt){
    elementoSeleccionado = reordenar(evt);
    currentX = evt.clientX;
    currentY = evt.clientY;
    currentPosX = parseFloat(elementoSeleccionado.getAttribute("x"));
    currentPosY = parseFloat(elementoSeleccionado.getAttribute("y"));

    elementoSeleccionado.setAttribute("onmousemove", "moverElemento(evt)");

}
Function moverElemento(evt){
    
}

