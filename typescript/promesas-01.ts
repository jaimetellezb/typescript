(() => {
  
    console.log('Inicio');
    
    /** para la versión ES5 sale error porque para esa versión JavaScript no tiene
     *  librerías que que soporten promesas, pero Angular ya viene con librerías para
     *  trabajar con promesas, entonces para este caso podemos cambiar el tsconfig.json
     *  la opción de target a ES6
     * */ 
    
    /*
        Ahora ya no sale error, pero se debe enviar unos parámetros
        Dentro de la promesa se debe enviar una función con 2 argumentos
        que son dos funciones (resolv, reject)
        resolv = cuando todo está correctamente
        reject = cuando ocurre algún error
    */
    const prom1 = new Promise( (resolv, reject) => {
        setTimeout(() =>{
           reject('Se terminó el timeout');
        }, 1000);
    });
    
    // prom1.then lo que quiero ejecutar cuando se realiza todo exitosamente
    // prom1.catch  cuando ocurre un error
    // prom1.Symbol identificador
    prom1.then(mensaje => console.log( mensaje ))
        .catch(err => console.warn( err));

    console.log('Fin');



})();
