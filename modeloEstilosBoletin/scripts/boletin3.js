function exercicio3_1(){
	enunciado.innerHTML='';
	solucion.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(3,1);
	enunciado.textContent = 'Suma dos primeiros 50 números naturais';
	var numero = 0;
	var i = 0;
	const J = 50;
	for (i;i < J; i++){
		numero += i;
	}
	solucion.innerHTML= numero;
}

function exercicio3_2(){
	enunciado.innerHTML='';
	resultado.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(3,2);
	enunciado.textContent = 'Imprimir un contador do 0 ao 100';
	var i = 0;
	var j = 100;
	var contador = "";
	for (i; i <= j; i++ ){
		contador+= i + "<br>";
		
	}
	solucion.innerHTML = contador;
}

function exercicio3_3(){
	enunciado.innerHTML='';
	resultado.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(3,3);
	enunciado.textContent = 'Suma dos numeros pares existentes entre o 0 e o 100';
	var numero = 0;
	var i = 0;
	var j = 100;
	for (i;i <= j; i++){
		if(i%2==0){
		numero += i;
		}
	}
	solucion.innerHTML= numero;
}

function exercicio3_4(){
	enunciado.innerHTML='';
	resultado.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(3,4);
	enunciado.textContent = 'Imprimir os números primos existentes entre o 0 e o 100';
	var numero = 0;
	var i = 3;
	var j = 100;
	var contador = "";
	for (i;i <= j; i++){
		
		var result = ePrimo(i);
		if(result == true)
		contador+= i + "<br>";
		}
		solucion.innerHTML = contador;
	}


function ePrimo(numero){
	for(var i = 2; i < numero; i++){
		if(numero % i == 0){
			return false; break;
		}
	}
	return true;
}

function exercicio3_5(){
	enunciado.innerHTML='';
	resultado.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(3,5);
	enunciado.textContent = 'Cálculo do factorial dun número calquera';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Introduce un numero para calcular o seu factorial <input id='numero' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='calcularFactorial(numero.value);'/>" +
		"</form>"
}

function calcularFactorial(numero){
	if(isNaN(numero) || numero < 1){
		resultado.innerHTML= 'Introduce los datos correctos';
	}else{
		var numero = parseInt(numero);
		console.log(numero);
		for(i = numero-1 ; i > 1; i--){
			console.log(i);
			factorial = numero *i;
			numero = factorial;
		}
		solucion.innerHTML = factorial;
	}
}

function exercicio3_6(){
	enunciado.innerHTML='';
	solucion.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(3,6);
	enunciado.textContent = 'Imprime a serie 1, 1, 2, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5...';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Introduce o número no que queres que termine a serie <input id='numero' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='imprimirSerie(numero.value);'/>" +
		"</form>"
}

function imprimirSerie(numero){
	if(isNaN(numero) || numero < 1){
		solucion.innerHTML= "Introduce os datos correctos";
	}else{
		var serie = '';
		for(i = 1; i <= numero; i++){
			for(j =1; j <= i;j++){
				serie += j + " ,";
				
			}
		}
		solucion.innerHTML= serie;
		
		
	}
	
}

function exercicio3_7(){
	enunciado.innerHTML='';
	resultado.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(3,7);
	enunciado.textContent = 'Imprime a serie 0, 1, -1, 2, -2, 3, -3, 4, -4...';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Introduce o número no que queres que termine a serie <input id='numero' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='imprimirSerie2(numero.value);'/>" +
		"</form>"
}

function imprimirSerie2(numero){
	if(isNaN(numero) || numero < 1){
		solucion.innerHTML= "Introduce os datos correctos";
	}else{
		var serie = '0';
			for(j =1; j <= numero;j++){
				serie +=", " + j + ", " +"-" + j;
				
			
		}
		serie += '...';
		solucion.innerHTML= serie;
		
		
	}
	
}


function exercicio3_8(){
	enunciado.innerHTML='';
	resultado.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(3,8);
	enunciado.textContent = 'Imprime a serie de Fibonacci; é dicir, a serie que, empezando polo 1, presenta como seguinte elemento a suma dos dous anteriores: 1, 1, 2, 3, 5, 8, 13...';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Introduce o número no que queres que termine a serie <input id='numero' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='serieFibonacci(numero.value);'/>" +
		"</form>"
}

function serieFibonacci(numero){
	if(isNaN(numero) || numero <1){
		solucion.innerHTML = 'Introduce os datos correctos';
	}else{
		var numero = parseInt(numero);
		var fibonacci = 1;
		var fibonacci1 =1;
		var serie = '1,1,';
		for(i = 1; i <= numero-2; i++){
			if(numero == 1){
				serie = 1;
			}else{
				
				fibonacci2 =fibonacci + fibonacci1;
				serie +=fibonacci2 +",";
				fibonacci = fibonacci1;
				fibonacci1 = fibonacci2
				
			}
		}
		serie = serie.substring(0,serie.length-1) + '...';
		solucion.innerHTML = serie;
		
		
		
	}
}


function exercicio3_9(){
	enunciado.innerHTML='';
	resultado.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(3,9);
	enunciado.textContent = 'Dado un número N, amosar por pantalla todas as combinacións de dous números naturais que sumados dean N.';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Introduce o número para amosar as sumas<input id='numero' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='sumasNumero(numero.value);'/>" +
		"</form>"
}

function sumasNumero(numero){
		if(isNaN(numero) || numero <1){
		solucion.innerHTML = 'Introduce os datos correctos';
	}else{
		var serie = '';
		var numero = parseInt(numero);
		for(var i = 0; i <= numero/2; i ++){
			for(var j = 0; j < numero; j++){
			if(i+j == numero){
				serie += i + "+" + j + ",";
			}
		    }
		}
		serie = serie.substring(0,serie.length-1);
		solucion.innerHTML = serie;
		
	}
	
	
}

function exercicio3_10(){
	enunciado.innerHTML='';
	solucion.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(3,10);
	enunciado.textContent = 'Dados N números, indica cal é o maior.';
	var condicion = true;
	var texto = '';
	datos.innerHTML=
		texto+="<form name='formulario'>" +
			"Introduce numeros para calcular o maior";
			while(condicion){
			texto+="<input id='numero' value='0'/>"+
					"<button type='button' onclick='calcularMaior(numero.value);'>Calcular</button>";
				
				
			}
			
		texto+="</form>";

}

function calcularMaior(numero){
	if(isNaN(numero)){
		condicion=false;
		resultado.innerHTML=aux;
		}else{
		var aux = 0;
		if(numero > aux){
			aux = numero;
		}
		
}
}

function resolver(numero){
	numero = parseInt(numero);
	var aux = 0;
	for(i = 0; i < numero; i++){
		var elemento = document.getElementById('n_'+i);
		elemento = elemento.value;
		if(elemento > aux){
			
		 aux = elemento;
		}
	}
	solucion2.innerHTML= aux;
	
}


function exercicio3_11(){
	enunciado.innerHTML='';
	solucion.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(3,11);
	enunciado.textContent = 'Dado un número, sacar por pantalla a suma dos díxitos que o forman.';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Introduce ao número do que se quere calcular a suma dos seus díxitos<input id='numero' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='calcularSumaDixitos(numero.value);'/>" +
		"</form>"
}

function calcularSumaDixitos(numero){
	if(isNaN(numero) || numero <1){
		solucion.innerHTML = 'Introduce os datos correctos';
	}else{
		numero = parseInt(numero);
		var calculo = 0;
		console.log(numero.toString().length);
		for(var i = 0;i <= numero.toString().length; i++){
			console.log('por aqui');
			num = numero.prototype.slice(i);
			calculo += num;
		}
		
		solucion.innerHTML= calculo;
	}
}

function exercicio3_13(){
	enunciado.innerHTML='';
	resultado.innerHTML='';
	datos.innerHTML = '';
	cambiarColorExercicio(3,13);
	enunciado.textContent = 'Escribir un programa que calcule o máximo común divisor de dous números naturais positivos segundo o algoritmo de Euclides, que consiste en ir restando o número menor ao maior ata obter dous números iguais, momento no que temos o máximo común divisor..';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Introduce o primeiro número<input id='numero1' value='0'/>" +
			"Introduce o primeiro número<input id='numero2' value='0'/>" + 
			"<input type='button' name='boton' value='Calcular' onclick='maximoComunDivisor(numero1.value,numero2.value);'/>" +
		"</form>"
}

/*
https://www.superprof.es/apuntes/escolar/matematicas/aritmetica/divisibilidad/algoritmo-de-euclides.html

*/

function maximoComunDivisor(n1,n2){
	if(isNaN(n1) || isNaN(n2) || n1 == n2){
		solucion.innerHTML= 'Introduce os datos correctos';
	}else{
	n1 = parseInt(n1);	
	n2 = parseInt(n2);
	var condicion = true;
	var r = 1;
	var n = 0;
	if(n1 > n2){
		if(n1 % n2 == 0){
			resultado.innerHTML= n2;
		}else{
		
		while(condicion){
			console.log(n);
			console.log(r);
			if(n % r == 0){
			console.log('despues de comprobar');
			var result = n / r;
			
			resultado.innerHTML= result;
			condicion = false;
		}
		var r = n1 % n2;
		n2 = n2 - (r*n);
		console.log('n2-> ' +n2);
		console.log('r-> ' +r);
		n = n2;
		console.log('n->' + n);
		n1 = r;
		console.log('n1->' + n1);
		
		
		
		}
	}	
		}
			
		
	else{
		if(n2 % n1 == 0){
			resultado.innerHTML= n1;
		}else{
		
		while(condicion){
		var resto = n2 % n1;
		var n = n2 - resto;
		if(resto % n == 0){
			resultado.innerHTML= resto / n;
			condicion = false;
		}
		}	
	}	
	}
	}
}





