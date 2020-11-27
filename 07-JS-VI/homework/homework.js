// Do not change any of the function names
function invocarCallback(cb) {
    // Invoca al callback `cb`, es una
    //funcion que la pasan como argumento.
    cb();
}

function sumarArray(numeros, cb) {
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    //numeros es un array y un callback que es funcion
    // ir pasando argumerntos dela array a cb
    // le paso al cb el total de la suma
    const suma = numeros.reduce(function(acc, elemento) {
        return acc + elemento;
    }, 0);
    cb(suma);
}

function forEach(array, cb) {
    // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
    //for ( let i = 0, i<array.length;i++){
    //cb(array[i]); //le voy pasando los argumentos
    array.forEach(function(elementos, indice) {
        cb(elementos);
    });
}

function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    // var array = [1,2,3,4,5]
    // function cb (e) {console.log(e)}
    // nuevoarray = []
    // var nuevoArray = [];
    // for(var i = 0; i < array.length; i++) {
    //   nuevoArray.push(cb(array[i]));
    //   nuevoArray[i] = cb(array[i]);
    // }
    var nuevoArray = array.map(function(e) {
        return cb(e);
    });
    return nuevoArray;
}
// No; i< array.length;jo de esta línea
// --------------------------------
module.exports = {
    invocarCallback,
    sumarArray,
    forEach,
    map,
};