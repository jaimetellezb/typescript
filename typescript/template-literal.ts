(function () {
  function getEdad() {
    return 100 + 100 + 200;
  }

  const nombre = "Jaime Alberto";
  const apellido = "Téllez Bohórquez";
  const edad = 30;

  //Mostrar lo siguiente con estas variables constantes
  // Jaime Alberto Téllez Bohórquez (Edad: 30)
  // Forma no adecuada
  //const salida = nombre + " " + apellido  + " (Edad: " + edad + ")";

  // Template literal back tips
  // con estos se puede usar ${} para colocar variables
  // con \n pone salto de línea
  // también se puede dando enter después de cada variable
  //const salida = `${nombre} \n ${apellido} \n ( ${edad} )`;
  // const salida = `
  // ${nombre}
  // ${apellido}
  // ( ${edad + 100} )`;

  const salida = ` 
    ${nombre} 
    ${apellido} 
    ( ${getEdad()} )`;

  console.log(salida);
})();
