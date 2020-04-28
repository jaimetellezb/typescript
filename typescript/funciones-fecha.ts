(() => {
  // a continuación, 2 formas de crear una función, pero son exactamente lo mismo
  //función asignada a una variable
  let mifuncion = function (a: string) {
    return a;
  };

  // función tradicional
  function funcion2(a: string) {
    return a;
  }

  //también se puede declara como una constante
  const mifuncion3 = function (a: string) {
    return a.toUpperCase();
  };

  // mifuncion3, como una función de flecha
  const miFuncionF = ( a:string) => {
    return a.toUpperCase();
  }

  // las funciones de fecha tienen una característica 
  // que si tienen solo una línea de código y eso es lo que va retornar puede quedar así 
  const miFuncionF2 = ( a:string) => a.toUpperCase();

  // otro ejemplo
  const sumaN = function (a: number, b:number) {
    return a + b;
  };

  const sumaNF = (a: number, b: number) => a + b;

  // + ejemplo
  const hulk = {
    nombre : 'Hulk',
    smash() {
      // el setTimeout() es una función que permite ejecutar una función
      // en determinado tiempo 
      // si agregamos el console.log dentro de la función sale error porque no 
      // puede acceder a this.nombre
      // setTimeout( function() {
      //   console.log(`${this.nombre} smash!!!`);
      // }, 1000);

      //pero si se agrega una función de fecla desaparece el error
      // Otra característica de las funciones de fecla es que no modifican a lo que apunta this
      // 
      setTimeout( () => {
        console.log(`${this.nombre} smash!!!`);
      }, 1000);
      
    }
  }
  
  hulk.smash();
  
  
  
})();
