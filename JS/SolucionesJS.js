/*solucion1*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function interes(){

    var valor = document.Pr1.cantidad.value;
    var resultado = parseInt(valor);
    var interes = resultado*0.02;
    var total = resultado + interes;

    document.Pr1.sueldoti.value="$"+total;
}

function borrar(){

    document.Pr1.cantidad.value="";
    document.Pr1.sueldoti.value="";
}