// funciones de programacion web
function nombrefuncion(){
    console.log('eejcutando funcion "nombre funcion"');
    }
    nombrefuncion();
    function nombreconparametros(nombre,apellido,edad){
     let text= "nombre:"+nombre+"apellido"+apellido+"edad"+edad;
     console.log(text);
    }
    nombrefuncion();
    //llamada ala funcion con sus para metros
    nombreconparametros('mauricio','Flores',26)
    //termina la funcion
    /**
     * retorna el cuadrado del numero dado
     * @param Number number 
     * @returns 
     */
    function square(number){
     return number *number;
    }
    /**
     * retorna el cubo del numero dado
     * 
     * @param Number number 
     * @returns 
     */
    function cube(number){
     return number * number* number;
    }
    let array=2;
    let squareValue= square(array)
   console.log(square(8));
   console.log(cube(8));
   //ciancias computacionales
   //investigar porque salen muchos nummmeros.
   let result= 0.1+0.2;
   console.log(result);

   //ciclos
function tablademultiplicarfor(tabla,limite){
   //ciclo for 
   for( let index=0; index<limite; index++){
    let number =10*index;
    console.log(number);
   }
}

   //ciclo while
    function tablamultiplicarwhile(tabla,limite){
   let indexWhile=0;
   while(indexWhile<limite){
    let number= indexWhile *10;
    console.log(number);
    indexWhile++;

   }
}

   //ciclo do while
   function tablamultiplicardowhile(tabla,limite){
   let indexDoWhile=0;
   do{
    let number=indexDoWhile*10;
    console.log(number);
    indexDoWhile++;
   }while(indexDoWhile<10);
}

   tablademultiplicarfor(8,100);
   tablademultiplicarfor(8,10);
   tablademultiplicarfor(7,5);



