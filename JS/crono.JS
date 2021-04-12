

let temporizador = document.getElementById('temporizador')
let iniciar = document.getElementById('iniciar')
let resetear = document.getElementById('resetear')
let almacenarTiempo = document.getElementById('almaceneartiempos')

let tiempo = 0;
let  intervalo = 0;
let verificar = 0;

init();
function init(){
    iniciar,addEventListener('click', iniciarContador);
    iniciar,addEventListener('click', resetearContador);
    iniciar,addEventListener('click', grabarContador);
}

function iniciarcontador(){
    if(verificar == false){
        var intervalo = setInterval(function(){tiempo += 0.01;
        temporizador.innerHTML =tiempo.toFixed(3); 
    }, 10)
    verificar = true;
            
        
    }else{
        verificar = false;
        clearInterval(intervalo)
    }
}
function resetearContador(){
    verificar = false;
    tiempo = 0;
    temporizador.innerHTML = tiempo + '.00'
    clearInterval(intervalo)
    while(almacenarTiempo.firstChild){
        almacenarTiempo.removeChild(almacenarTiempo.firstChild)
    }
}

function grabarContador(){
    if(temporizador.textContent === '0.00'){
        console.log('click para iniciar cronometro')
    }else{
        let p = document.createElement('ul')
        p.innerHTML = `
        
        <li>Tiempo: ${tiempo.toFixed(2)}</li>
        
        `;
        almacenarTiempo.appendChild(p);
    }
}