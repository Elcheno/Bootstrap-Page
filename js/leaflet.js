// Este .js genera el mapa

var map = L.map('map').setView([40.336054, -3.811126], 13); // Declaro una variable llamando a la funcion map y pasandole a la funcion setView las coordenadas del lugar a mostrar
var marker = L.marker([40.336054, -3.811126]).addTo(map); // Declaro una segunda variable llamando a la funcione marker y pasandole las coordenadas extactas del marcador

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, // Indicamos el zoom maximo permitido
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);