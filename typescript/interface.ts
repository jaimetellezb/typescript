(() => {
    // Estas interfaces de typescript, al realizar la compilación a JS
    // no se van a ver reflejadas
    interface Xmen{
        nombre: string,
        edad: number,
        poder?: string
    }
    
    // los tipos también pueden ser de interface
    // entonces xmen le decimos que es de tipo Xmen( la interface que creamos)
    const enviarMision = (xmen: Xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }

    const regresarAlCuartel = (xmen: any) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }
    
    // la constante que vamos a enviar a los métodos le asignamos que sea de tipo Xmen
    const wolverine : Xmen = {
        nombre: 'Logan',
        edad: 60
    }

    enviarMision(wolverine);
    regresarAlCuartel(wolverine);

})();
