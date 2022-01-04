//codigo del cuadrado
console.group("Cuadrado");
/*const ladoCuadrado =5;
console.log("los lados del cuadrado miden:" + ladoCuadrado + "cm");
*/

function PerimetroCuadrado (lado) {
    return lado * 4;
}
//console.log("El perimetro mide:" + perimetroCuadrado + "cm");

function AreaCuadrado (lado) {
    return lado * lado;
} 
//console.log("Area cuadrado mide" + areaCuadrado + "cm");
console.groupEnd();

//codigo triangulo
/*console.group("Triangulo");
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;


console.log("lados del triangulo miden:"
+ ladotriangulo1
+"cm,"
+ladotriangulo2
+"cm,"
+basetriangulo
+"cm"
);*/


//const alturatriangulo = 5.5;
//console.log("la Altura del triangulo es de" + alturatriangulo + "cm");


function PerimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function AreaTriangulo (base, Altura) {
return (base * Altura) /2;

}

//console.log("area triangulo es "+ areatriangulo);
//console.groupEnd();

///codigo circulo
//console.group("Circulos");

// Radio
//const radiocirculo = 4;

//console.log("El radio del circulo es" + radiocirculo +"cm");
// diametro
function DiametroCirculo (Radio) {
  return Radio * 2;
} 
//console.log("el diametro del circulo es "+ diametrocirculo +"cm");
//PI

const PI = Math.PI;
//console.log("PI del circulo es"+PI);
//Circunferencia

function PerimetroCiruclo (radio) {
 const diametro = DiametroCirculo(radio);
 return diametro * PI;
    
}

//console.log("El perimetro del circulo es "+perimetroCiruclo +"cm");

//Area

function AreaCirculo (radio){
return (radio * radio) * PI;

}



function CalcularPerimetroCuadrado() {

const input = document.getElementById("InputCuadrado");
const value = input.value;

const perimetro  = PerimetroCuadrado(value);
alert(perimetro);

}


function CalcularAreaCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const Area  = AreaCuadrado(value);
    alert(Area);
    
    }








//console.log("El Area del Circulo es "+AreaCirculo+ " cm");

