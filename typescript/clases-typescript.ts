(() => {

    // Inicializar variables de una clase
    // 1
    // class Avenger {
    //     // se deben inicializar los atributos
    //     // 1. se puede inicializar una a una de las variables
    //     nombre: string = "Sin nombre";
    //     equipo: string = "Equipo Ganador";
    //     nombreReal: string = "Ironman";

    //     puedePelear: boolean = true;
    //     peleasGanadas: number = 10;
    
    // }

    // Inicializar variables de una clase
    // 2
    // class Avenger {
    //     nombre: string;
    //     equipo: string;
    //     nombreReal: string;

    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     // se puede crear un constructor para inicializar las variables
    //     constructor(nombre: string, equipo: string, nombreReal: string, 
    //         puedePelear: boolean, peleasGanadas: number) {
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //         this.nombreReal = nombreReal;
    //         this.puedePelear = puedePelear;
    //         this.peleasGanadas = peleasGanadas;
    //     }
    
    // }
        
    // Inicializar variables de una clase
    // 3
    class Avenger {
        // se puede crear un constructor para inicializar las variables
        // pero en este caso se pueden inicializar todas en el constructor
        // sin necesidad de declararlas primero
        // se pueden usar los tipos de acceso: public - private - protected
        // para este caso todas van a ser accedidas desde cualquier parte de la aplicación (public)
        constructor(public nombre: string, public equipo: string, public nombreReal?: string, 
            public puedePelear?: boolean, public peleasGanadas?: number) {
        }
    }
    
    // funciona solo con el nombre y equipo ya que las demás las pusimos opcionales 
    // con ?:
    const antman = new Avenger('Antman', 'Capi');
    //o const antman : Avenger = new Avenger();

    console.log(antman);

})();
