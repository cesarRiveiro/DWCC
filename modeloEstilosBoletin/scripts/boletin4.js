function exercicio4_1(){
	enunciado.innerHTML='';
	solucion.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(4,1);
	enunciado.textContent = 'Imprimir os valores dun vector de 100 elementos.';
	var coleccion = new Array(100);
	const LIMITE = 100;
		for(let i = 0; i <= LIMITE; i++){
			coleccion[i] =Math.trunc( Math.random()* (500 - 1) + 1);
		}
		solucion.innerHTML= coleccion;
	
}
const COL = 5;
const FIL = 6;
function exercicio4_2(){
	enunciado.innerHTML='';
	solucion.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(4,2);
	
	enunciado.textContent = 'Lee unha matriz de 5x6, e imprime a suma total da matriz.';
	var texto = "<form name='formulario'>" +
			"Introduce numeros para calcular o maior<br>";
			for(let i = 0; i < COL; i++){
				for(let j = 0; j < FIL; j++){
					texto+="<input id='numero"+"_"+ i + "_"+ j +"';'/>";
				}
			}
			texto+="<button type='button' onclick='sumaMatriz();'>Sumar</button></form>";
			datos.innerHTML=texto;
}

function sumaMatriz(){
	var matriz = new Array(5);
	var columnas = 6;
	for (let i = 0; i < matriz.length; i++) {
		matriz[i] = new Array(columnas);
		
	}
	var suma = 0;
	for(let i = 0; i < COL ;i++){
		for(let j = 0; j < FIL; j++){
			let elemento = document.getElementById("numero"+"_"+ i + "_"+ j +"");
			elemento = elemento.value;
			elemento = parseInt(elemento);
			matriz[i][j] = elemento;
			suma += matriz[i][j];
		}
	}
	resultado.innerHTML= 'A suma de todas as posicións do array é ' + suma + "<br>" + dibuxarMatrizDuasDimensions(matriz);
}

function dibuxarMatrizDuasDimensions(matriz){
var texto= '';
for (let i = 0; i < matriz.length; i++) {
		for (let j = 0; j < matriz[i].length; j++) {
		texto += matriz[i][j] + " ";			
		}
		texto+= "<br>";
	}
	return texto;
}

function dibuxarVector(vector){
	texto ='';
	for (let i = 0; i < vector.length; i++) {
		texto += vector[i] + ", ";
	}
	// texto = texto.substring(-3);
	return texto;
}


function exercicio4_3(){
	enunciado.innerHTML='';
solucion.innerHTML='';
datos.innerHTML = '';
cambiarColorExercicio(4,3);
const LIMIT = 10;
enunciado.textContent = 'Lee un vector numérico de dimensión 10 e determina cantos elementos son positivos, negativos e ceros, imprimindo por pantalla cada un deles, para finalmente imprimir os contadores por pantalla.';	
var texto = "<form name='formulario'>" +
		"Introduce numeros para calcular o maior<br>";
		for(let i = 0; i < LIMIT; i++){
			texto+="<input id='numero"+"_"+ i + "';'/><br>";
			}
			texto+="<button type='button' onclick='resolv4_3();'>Sumar</button></form>";
			datos.innerHTML=texto;

}

function resolv4_3(){
	var ejer_3 = new Array(10);
	var positivos = new Array();
	var negativos = new Array();
	var cero = new Array();
	var texto = '';
	for(let i = 0; i < ejer_3.length ;i++){
			let elemento = document.getElementById("numero"+"_"+ i + "");
			elemento = elemento.value;
			elemento = parseInt(elemento);
			ejer_3[i] = elemento;
		}
	console.log(dibuxarVector(ejer_3));
		for(let i = 0; i < ejer_3.length; i++){
			texto += ejer_3[i] + ',';
			if(ejer_3[i] > 0){
				positivos.push(ejer_3[i]);
			}else if(ejer_3[i] < 0){
				negativos.push(ejer_3[i]);
			}else{
				cero.push(ejer_3[i]);
			}
		}
		datos.innerHTML=
		"Os numeros positivos son: " + dibuxarVector(positivos) + " un total de " + positivos.length + "<br>" + 
		"Os numeros negativos son: " + dibuxarVector(negativos) + " un total de " + negativos.length + "<br>" + 	
		"E hay un total de : " + ceros.length + " ceros.";
	}

function exercicio4_4(){
	enunciado.innerHTML='';
	datos.innerHTML = '';
	resultado.innerHTML='';
	cambiarColorExercicio(4,4);
	enunciado.textContent = 'Ordena ascendentemente unha serie de números dados.';
	datos.innerHTML =
		'<form name="formulario">' +
			'Cuantos números quieres introducir?: <input id="numero" type="text"/>'+
			'<button type="button" onClick="resolvEx_4_4(numero.value);">Premer</button>' +
		'</form>';	
}


function resolvEx_4_4(numero){
	var ex4 = new Array();
	var ex4 = [];
	var contador = 0;
	if(isNaN(numero) || numero =='' ){

			resultado.innerHTML= imprimirMatriz(ex4);	
	}else{
		ex4[contador] = numero;
		console.log(ex4[contador]);
		contador++;
		ex4.sort();
		console.log(ex4);
		exercicio4_4();
	}
	
}

function exercicio4_5(){
	enunciado.innerHTML='';
	solucion.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(4,5);
	enunciado.textContent = 'Dados 10 números, introducilos nun vector e amosar a media e a suma.';
	var texto ='';
	var ex5 = new Array(10);
	var total = 0;
	var media = 0;
	for (let i = 0; i < ex5.length; i++) {
		ex5[i] = Math.trunc( Math.random()* (20 - 1) + 1);
		total += ex5[i];
		texto += ex5[i] + ' ,';
	}
	media = total / ex5.length;
	resultado.innerHTML= 'Array -> ' + texto + ' suma total -> ' + total + ' media -> ' + media;

	// texto += "<form name='formulario'>";
	// 	for(let i = 0; i < ex5.length; i++){
	// 		console.log(i);
	// 		texto+="<input id='numero"+"_"+ i +"' value = 0 ex5[i]=numero"+"_"+ i +".value onchange='ex5[i]';'/>";
	// 		console.log('valor array posicion -> ' + ex5[i]);
	// 	}
	// 	texto+="<button type='button' onclick='exer5(ex5.vector);'>Sumar</button></form>";
	// 	datos.innerHTML= texto;
	
}



function exercicio4_6(){
	enunciado.innerHTML='';
	solucion.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(4,5);
	enunciado.textContent = 'Encher unha matriz 3x3 e amosar a diagonal principal.';
	var texto ='';
	datos.innerHTML=
		"form name='formulario'>"+ rellenarMatriz(3,3);
		"<buttom type='buttom' onclick='exer6();'>Calcular</buttom></form>";

}

function rellenarMatriz(filas,columnas){
if(isNaN(filas) || isNaN(columnas)){
	solucion.innerHTML='Introduce números';
}else{
	var filas = parseInt(filas);
	var columnas = parseInt(columnas);
	var matriz = new Array(filas);
	for (let i =0;i < filas.length; i++){

	}
	for (let i = 0; i < filas.length; i++) {
		for (let j = 0; j < j.length; j++) {
			texto += "<input id='numero"+"_"+ i + "_"+ j +"' matriz[i][j]=numero"+"_"+ i + "_"+ j +".value  onchange='matriz[i][j] ;'/>";
			
		}
		
	}
}
}

