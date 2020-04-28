//para desaparecer los errores que se muestran en saludar y wolverine
// se puede crear una función auto invocada
// el error se presenta porque los nombres general conflicto con los de la clase app.js
// al realizar el cambio ejecutar de tsc app.ts
// NOTA: En Angular esto no es necesario usarlo
(function () {
  //cadenas
  let mensaje: string = "Hola"; // es igual a
  let mensaje1 = "Hola";
  //numéricos
  let numero: number = 123; //es igual a
  let numero1 = 123;
  //booleano
  let booleano: boolean = true; // es igual a
  let booleano1 = true;
  //Fechas
  let hoy: Date = new Date(); // es igual a
  let hoy1 = new Date();
  //any
  let cualquiercosa;
  cualquiercosa = mensaje;
  cualquiercosa = numero;
  cualquiercosa = booleano;
  cualquiercosa = hoy;
  // también se pueden especificar 2 o más tipos de datos aunque
  // no es lo más recomendable pero se puede
  let masdedostipos: string | number | Date;
  masdedostipos = 123;
  masdedostipos = "123";
  masdedostipos = new Date();

  //objetos
  let spiderman = {
    nombre: "Peter",
    edad: 30,
  };

  spiderman = {
    nombre: "Chavo",
    edad: 29,
  };
})();
