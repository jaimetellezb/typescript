(()=>{

    // Uso de Let y Const
    let nombre = 'Ricardo Tapia';
    let edad = 23;
  
    const PERSONAJE = {
      nombre,
      edad
    };
  
  
    // Cree una interfaz que sirva para validar el siguiente objeto
    const batman : Batman = {
      nombre: 'Bruno Díaz',
      artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
    }

    interface Batman {
        nombre: string;
        artesMarciales: string[];
    }
  
    // Convertir esta funcion a una funcion de flecha
    // function resultadoDoble( a, b ){
    //   return (a + b) * 2
    // }

    const resultadoDoble = (a: number, b: number) => ( a + b) * 2;
  
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    const getAvenger = ( nombre: string, poder?: string, arma: string = 'arco'): string => { 
      let mensaje;
      if( poder ){
        mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
      }else{
        mensaje = nombre + ' tiene un ' + poder;
      }
      return mensaje;
    };
  
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    
    class Rectangulo {

        constructor(private base: number, private altura: number){};

        calcularArea2 = () => this.base * this.altura;
    }

    const rect : Rectangulo = new Rectangulo(20, 20);
    console.log(rect.calcularArea2());
  
  })();