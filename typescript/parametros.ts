(function () {
  // se puede agregar un valor por defecto después del tipo de dato por ejemplo: 
  // objeto: string = 'algo'
  // para tener valores opcionales se debe agregar ? antes de los dos puntos ?: 
  // los valores por defecto deben ir siempre al final 
  // 1 obligatios, 2 opcionales 3 por defecto
  function activar(quien: string, momento?: string, objeto: string = 'batiseñal') {
    
    if (momento) {
      console.log(`${quien} activó la ${objeto} en la ${momento}`);
    } else {
      console.log(`${quien} activó la ${objeto}.`);
    }
  }

  activar('Gordon', 'tarde');

})();
