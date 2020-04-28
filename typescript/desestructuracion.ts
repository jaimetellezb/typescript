(() => {
  //DESESTRUCTURACIÓN DE OBJETOS
  const avenger = {
    nombre: 'Steve',
    clave: 'Capitán América',
    poder: 'Droga',
  };

  // Obtener el valor de la siguiente forma
  console.log(avenger.nombre);
  console.log(avenger.clave);
  console.log(avenger.poder);

  // Per existe una mejor alternativa para realizar ésto.
  // se puede realizar la extración de cada una de las propiedades del objeto
  // y asignarlas a variables (Desestructuración de Objetos)
  const { nombre, clave, poder } = avenger;

  console.log(nombre);
  console.log(clave);
  console.log(poder);

  // Hay otra forma de desestructuración por medio de una función.
  // se crea la función y se envía el argumento avenger
  const extraer = (avenger: any) => {
    const { nombre, clave, poder } = avenger;

    console.log(nombre);
    console.log(clave);
    console.log(poder);
  };

  // otra mejor y se ahorra una línea de código
  const extraer2 = ({ nombre, clave }: any) => {
    //const { nombre, clave, poder } = avenger;

    console.log(nombre);
    console.log(clave);
    console.log(poder);
  };

  //extraer(avenger);

  // DESESTRUCTURACIÓN DE ARREGLOS
  const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

  console.log(avengers[0]);
  console.log(avengers[1]);
  console.log(avengers[2]);

  // En este caso el orden de las variables es el mismo orden de los datos del arreglo
  // thor = 'Thor' y así los demás
  const [thor, ironman, spiderman] = avengers;

  console.log(thor);
  console.log(ironman);
  console.log(spiderman);

  // si solo se quiere tener una posición específica tocaría con , separar los demás
  const [, , tres] = avengers;

  // tres = 'Spiderman'
  console.log(tres);

  // las funciones sería exactamente igual pero en la parte donde envían parámetros
  const extraerArr = ([thor, ironman, spiderman]: string[]) => {
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
  };

  extraerArr(avengers);
})();
