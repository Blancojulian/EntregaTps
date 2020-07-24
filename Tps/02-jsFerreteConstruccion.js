/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ancho = parseInt(document.getElementById("txtIdAncho").value)
    let largo = parseInt(document.getElementById("txtIdLargo").value)

    let perimetro = ((largo * 2)+(ancho*2))*3
    let cantidadAlambre = perimetro * 3
    alert("Se necesita comprar "+ cantidadAlambre+" metros de alambre")
}
function Circulo () 
{
    let radio;
    //var pi;
    let circunferencia;
    let cantidadAlambre;

    radio = parseInt(document.getElementById("txtIdRadio").value);
        
    //pi = 3.14;

    circunferencia = 2 * Math.PI * radio; // Con Math traes constantes o funciones matematicas.

    cantidadAlambre = circunferencia * 3;

    cantidadAlambre = cantidadAlambre.toFixed(2);

    alert("La cantidad de alambre que se debe comprar es de: " + cantidadAlambre + " metros.");

	//cantidadDeAlambre = (2 * 3.14 * radioDelTerreno)*3
}
function Materiales () 
{   
    let ancho;
    let largo;
    let area;
    let bolsaCemento;
    let bolsaCal;

    ancho = parseInt(document.getElementById("txtIdAncho").value)
    largo = parseInt(document.getElementById("txtIdLargo").value)
    area = largo * ancho
    bolsaCemento = area * 3
    bolsaCal = area * 2

    alert("Se necesitan "+bolsaCemento+" bolsa de cemento y "+bolsaCal+" de cal")
}