function analizar_text(){

let cuadro_texto = document.getElementById('introducir_texto').value;




//Al encontrar oracion, palabra, letra numero el contador aumentara,
//  el 0 es su valor inicial para asi aumentarlo despuesto 
let contar_oracion =  0;
let contar_palabras =  0
let contar_letras =  0;
let contar_numeros =  0;
let contar_tildes =  0;


//este let es importate por que ayuda a detectar el  inicio y el fin de las palabras dentro del texto */
let detectar_palabra = false



// Se crea un blucle (for) que nos ayudara a analizar los datos */
for (let i = 0; i <cuadro_texto.length; i++){


//Se creara la variable analizar_todo ( at ) para guardar todo el texto que pondremo
    let at = cuadro_texto.charAt(i);



//Contar las oraciones
if (at == '.' || at === '!' || at === '?'){
    contar_oracion++;
}
//Contar letras y caracteres especiales(ñ Ñ ) y tildes
if ((at >= 'a' && at <= 'z') || (at >= 'A' && at <= 'Z') || at === 'ñ' || at === 'Ñ' || at === 'í' || at === 'ó' || at === 'á' || at === 'é' || at === 'ú' || at === 'Í' || at === 'Ó' || at === 'Á' || at === 'É' || at === 'Ú') {
    contar_letras++;
    if (!detectar_palabra) {
        contar_palabras++;
        detectar_palabra = true;
    }
    
    // Contar letras con tilde
    if ('áéíóúÁÉÍÓÚ'.includes(at)) {
        contar_tildes++;
    }
}


//Contar numeros
else if (at >= '0' && at <= '9') {
    contar_numeros++;
    if (!detectar_palabra) {
        contar_palabras++;

        detectar_palabra = true;
    }
}
//
else if (at === ' ' || at === ',' || at === ';' || at === ':' || at === '\n' || at === '\t') {
    detectar_palabra = false;
}

//otros caracteres que no se encuentren en estas listas no se contaran
else {
    detectar_palabra = false;
}


}

//Visualizacion de las sumas de todo
document.getElementById('contar_oracion').innerText = contar_oracion;
document.getElementById('contar_palabras').innerText = contar_palabras;
document.getElementById('contar_letras').innerText = contar_letras;
document.getElementById('contar_numeros').innerText = contar_numeros;
document.getElementById('contar_tildes').innerText = contar_tildes;

}
