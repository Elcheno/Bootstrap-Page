// Cambia el modo 'light' y el modo 'dark'
const colorSwitch = document.querySelector('#switch input[type="checkbox"]'); // Declaro una variable para que recoga el valro del switch
function cambiaTema(ev){
    if(ev.target.checked){ // Comprueba si el switch esta activado
        document.documentElement.setAttribute('tema', 'dark'); // Cambia el tema a oscuro cambiando el atributo dentro de las variables de css a 'dark'
    } else {
        document.documentElement.setAttribute('tema', 'light'); // Cambia el tema a light cambiando el atributo dentro de las variables de css a 'light'
    }
}
colorSwitch.addEventListener('change', cambiaTema); // Evento que llama a la funcion cambiaTema en caso de detectar un cambio en el switch.
