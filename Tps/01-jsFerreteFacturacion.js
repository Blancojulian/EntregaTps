/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1
    let precio2
    let precio3

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value)
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value)
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value)

    alert("La suma es "+ (precio1+precio2+precio3))
}
function Promedio () 
{
    let precio1
    let precio2
    let precio3
    let promedio

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value)
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value)
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value)
    promedio = parseFloat((precio1+precio2+precio3)/3).toFixed(2)
    alert("El promedio es "+ promedio)
	
}
function PrecioFinal () 
{
	let precio1
    let precio2
    let precio3

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value)
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value)
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value)


    alert("La suma mas IVA es "+ ((precio1+precio2+precio3)*1.21).toFixed(2))
}