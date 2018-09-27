/*
var	tiene_mascota=true;

console.log(!false);
console.log(true&& false);
console.log(false || true);
console.log(5%4);

var edad=19;
if (edad>=18) {
	console.log("Eres mayor de Edad")
} else{
	console.log("No eres mayor de Edad")
}	


for (var i=0;i<5;i++) {
	console.log(i)
}


var dias=["lunes", "martes","miercoles","jueves","viernes","sabado","domingo"]
for (var i=0;i<6;i++) {
	console.log(dias[i])
}

function	suma(n1,n2){
	return="res"
}

function calcular_iva(precio_producto){
	var iva=0.19;
	var resultado=precio_producto*iva;
	return resultado;
}

console.log(calcular_iva(360000))

*/

function calcular_iva(){
	var precio=document.getElementById('precio').value;
	var resultado=precio*0.19;
	var span_resultado=document.getElementById('resultado');
	span_resultado.textContent=resultado;

}





