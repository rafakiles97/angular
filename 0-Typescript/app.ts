
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE : {nombre: string, edad: number} = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
interface Batman {
  nombre:string ,
  artesMarciales:string[]
}

let batman:Batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
let resultadoDoble = ( a:number, b:number ) => {
  return (a + b) * 2;
}

let resultadoDoble2 = ( a:number, b:number ) => (a + b) * 2;


// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  let mensaje;

  if( poder ){
     //mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
     mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  }else{
     //mensaje = nombre + " tiene un arma: " + arma;
     mensaje = `${nombre} tiene un arma: ${arma}`;
  }
  //console.log(mensaje);
};


// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
  base:number;
  altura:number;

  constructor(base:number, altura:number){
    this.base = base;
    this.altura = altura;
  }

  calcularArea = ( base:number, altura:number ):number => base * altura
  //calcularArea2 = ():number => this.base * this.altura;
}
