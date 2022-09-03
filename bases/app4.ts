// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto{
  encender:boolean,
  velocidadMaxima:number,
  acelear():void,
}

const conducirBatimovil = ( auto : Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil2:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guasa{
  reir?: boolean,
  comer?:boolean,
  llorar?:boolean
}

const guason: Guasa = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason :Guasa ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


interface CiudadF {
 (ciudadanos:string[]):number
}

// Cree una interfaz para la siguiente funcion

const ciudadGotica:CiudadF = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface PersonaInterface{
  nombre:string,
  edad:number,
  sexo?:string,
  imprimirBio?():void
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PersonaInterface {
  public nombre:string = '12';
  public edad: number = 17;

}