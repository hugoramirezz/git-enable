<?php

$age= null;
$name = "hugo";//variable de string 
$lastname ="ramirez";//para apellidos
$age=27;//para tipo de datos numericos
$size =1.72;// tipo de datos numericos con desimales
//variables voleanos
$boolean =true;
$boolean =false;
//tipos de arrays 
$array= [];
$array2 =array();
$arrayvalues=[10.'string',true,['otros valores']];
//constantes
const constante_1="valor constante";
const costant_2=23;
//objetos 
$object =new stdClass(); 
//clases
$ class Auto 
{
    var $color;
    string $marca;
    array $array;
    bool $propiedadboolean=false;
    $propiedadsintipodedato=[];
    int $number0fDoors=0;
    public function _construcction(int $doors)
    {
      //$this.numberOfDoors=$doors;
      $this->_numberOfdoors=$doors;

    } 
    public function getDetails(string $time )
    {
        //para imprimir en comsola o codigo es como el sout de netbens 
        echo"hola putas";
        echo "time $time";
        // o asero si es lo mismo 
        echo "time " .$time;


    }
    } 
    
}
$autoInstance= new auto(4);
$autoIntance2= auto(4);
public fuction _constructor(
    public int $numberOfDoors
)
{

}
//ciclos
for($i=0;$i<0;$i++)
{
echo $i."\n"
}

?>