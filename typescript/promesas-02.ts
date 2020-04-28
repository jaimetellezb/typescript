(() => {
    
    // función para retirar dinero
    const retirarDinero = ( montoRetirar: number) : Promise<number> => {
        // para validar cuanto dinero hay en una cuenta actualmente
        // tarda un poco de tiempo, entonces debe hacerse de forma asíncrona
        // y en esto las promesas ayudan
        let dineroActual = 1000;

        return new Promise( (resolve, reject) => {
            // valida que si el dinero a retirar es mayor al que tiene disponible
            // muestre un mensjae de "error" con reject
            if (montoRetirar > dineroActual) {
                reject('No hay suficiente dinero');
            } else {
                // si se puede realizar la transacción entonces 
                // se quita el valor a retirar al actual
                // y se envía en resolv el dinero actual (no es necesario siempre devolver algo)
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });

    }

    retirarDinero( 500 )
        .then(montoActual => console.log(`Me queda ${montoActual}`))
        .catch( console.warn );
        //.catch(err => console.warn(err)) es igual a .catch( console.warn )



})();
