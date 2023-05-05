// Funcion que realiza la comparacion de cachimbas
// La hice funcion para poder llamarla con el boton y no con un evento
// Los archivos de la información de las cachimbas se encuentran en 'comparasions'
function comparatorFuction(){
    var var1 = document.getElementById('select1').value; // Declaro la primera variable recogiendo su valor.
    var var2 = document.getElementById('select2').value; // Declaro la segunda variable recogiendo su valor.
    var textArea = document.getElementById('text-comparator'); // Declaro una tercera variable que sera el lugar donde insertar el texto.
    textArea.innerHTML = ""; // Reinicio la tercera variable como vacía por si tuviese algo escrito.

    if(var1 === '1' && var2 === '2'){ // Comparo el valor de las dos primeras variables
        include('./comparisons/datosCachimba1.html', '#text-comparator'); // Inserta el archivo html dentro de la tercera variable
        include('./comparisons/datosCachimba2.html', '#text-comparator'); // Inserta el archivo html dentro de la tercera variable
    }else if(var1 === '2' && var2 === '1'){ // Hago la misma comparación pero al contrario.
        include('./comparisons/datosCachimba2.html', '#text-comparator');
        include('./comparisons/datosCachimba1.html', '#text-comparator');
    }else{ // En caso de que ambas variables sean iguales
        textArea.innerHTML = "No puede comparar algo consigo mismo...";
    }
}