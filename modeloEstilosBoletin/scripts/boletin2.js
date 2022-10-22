/*
function amosarResultado(resultado) {
	const TEXTO_SOLUCION = 'O resultado é: ';
	solucion.innerHTML = TEXTO_SOLUCION + resultado;
}
*/	

/*
function limparPantalla() {
	enunciado.innerHTML = '';
	datos.innerHTML = '';
	solucion.innerHTML = '';
}
*/

function exercicio2_1(){
	cambiarColorExercicio(2,1);
	enunciado.textContent = 'Imprimir o valor absoluto dun numero';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Introduce un numero <input id='numero' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='valorAbsoluto(numero.value);'/>" +
		"</form>"

}

function valorAbsoluto(numero){
	
	if(isNaN(numero)){
		resultado.innerHTML=('Tes que meter un numero');
	}else{
		var numero = parseFloat(numero);
	if (numero < 0){
		numero = numero * (-1);
		resultado.innerHTML=(numero);
	}
	else{
		resultado.innerHTML=numero;
	}
	}
}

function exercicio2_2(){
	cambiarColorExercicio(2,2);
	enunciado.textContent = "Calcular a superficie dunha figura xeométrica. A figura só pode ser TRIÁNGULO, CADRADO, RECTÁNGULO ou CÍRCULO.";
	datos.innerHTML = 
		"<select id='figura' >" +
			"<option value='triangulo'>Triangulo</option>" +
			"<option value='cadrado'>Cadrado</option>" +
			"<option value='rectangulo'>Rectangulo</option>" +
			"<option value='circulo'>Circulo</option>" +
		"</select>" +
		"<input type='button' name='boton' value='calcular' onclick='calcularSuperficie(figura.selectedIndex);'/>" 
//etiquetas boton en vez de inputs		
// añadir os datos con un div o final, con un identificador
		
}
// vale tamen con onchange
//en el input onblur='cambiarComaPunto(this)'
//this para indicar que es el elemento que estas utilizando ahora

/*
	function cambiarComaPorPunto(elemento){
		elemento.value = elemento.value.replace(/,/g ".");
	}

*/
		
function calcularSuperficie(figura){
	console.log(figura);
	enunciado.innerHTML = '';
	datos.innerHTML = '';
			switch (figura){
				case 0 :
					enunciado.textContent = 'Introduce base é altura do triangulo';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce a base <input id='base' value='0'/>" +
							"Introduce a altura <input id='altura' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularTriangulo(base.value,altura.value)'/>" +
						"</form>"
						break;
				
				case 1 :
					enunciado.textContent = 'Introduce a base do cuadrado';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce a base <input id='baseCadrado' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularCadrado(baseCadrado.value)'/>" +
						"</form>"
						break;
				case 2: 
					enunciado.textContent = 'Introduce base é altura do rectangulo';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce a base <input id='base' value='0'/>" +
							"Introduce a altura <input id='altura' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularRectangulo(base.value,altura.value)'/>" +
						"</form>"
						break;
				case 3 :
					enunciado.textContent = 'Introduce o radio do circulo';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce o radio <input id='radio' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularCirculo(radio.value)'/>" +
						"</form>"
						break;
				
				
			}
			}
			

//seguir poñendo o control de errores		
function calcularTriangulo(base,altura){
	if(isNaN(base) || isNaN(altura)){
		resultado.innerHTML=('Introduce numeros');
	}else{
	var base = parseFloat(base);
	var altura = parseFloat(altura);
	var result = (base*altura)/2;
	resultado.innerHTML=result;
	}
}

function calcularCadrado(baseCadrado){
	if(isNaN(baseCadrado)){
		resultado.innerHTML=('Introduce numeros');
	}else{
	var base = parseFloat(baseCadrado);
	var result = baseCadrado*4;
	resultado.innerHTML=result;
	}
}

function calcularRectangulo(base,altura){
	if(isNaN(base) || (isNaN(altura))){
		resultado.innerHTML=('Introduce numeros');
	}else{
	var base = parseFloat(base);
	var altura = parseFloat(altura);
	var result = base*altura;
	resultado.innerHTML=result;
	}
}

function calcularCirculo(radio)	{
	if(isNaN(radio)){
		resultado.innerHTML=('Introduce numeros');
	}else{
	var radio = parseFloat(radio);
	var result = (radio * radio)* Math.PI;
	resultado.innerHTML=result;
	}
}

function exercicio2_3(){
	cambiarColorExercicio(2,3);
	enunciado.textContent = "Modifica o programa anterior para que, dadas dúas figuras, indique cal delas ten unha superficie maior.";
	datos.innerHTML = 
		"<select id='figura1' >" +
			"<option value='triangulo1'>Triangulo</option>" +
			"<option value='cadrado1'>Cadrado</option>" +
			"<option value='rectangulo1'>Rectangulo</option>" +
			"<option value='circulo1'>Circulo</option>" +
		"</select>" +
		"<select id='figura2' >" +
			"<option value='triangulo2'>Triangulo</option>" +
			"<option value='cadrado2'>Cadrado</option>" +
			"<option value='rectangulo2'>Rectangulo</option>" +
			"<option value='circulo2'>Circulo</option>" +
		"</select>" +
		"<input type='button' name='boton' value='calcular' onclick='calcularSuperficies(figura1.selectedIndex,figura2.selectedIndex);'/>" 
		
		
}

function calcularSuperficies(figura1,figura2){
	enunciado.innerHTML = '';
	datos.innerHTML = '';
	var superficieFigura1;
	var superficieFigura2;
	switch (figura1){
				case 0 :
					enunciado.textContent = 'Introduce o lado do triangulo';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce el lado <input id='lado' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularTriangulo(lado.value)'/>" +
						"</form>"
						break;
				
				case 1 :
					enunciado.textContent = 'Introduce a base do cuadrado';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce a base do cadrado <input id='lado' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularCadrado(lado.value)'/>" +
						"</form>"
						break;
				case 2: 
					enunciado.textContent = 'Introduce base é altura do rectangulo';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce a base <input id='base' value='0'/>" +
							"Introduce a altura <input id='altura' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularRectangulo(base.value,altura.value)'/>" +
						"</form>"
						break;
				case 3 :
					enunciado.textContent = 'Introduce o radio do circulo';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce o radio <input id='radio' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularCirculo(radio.value)'/>" +
						"</form>"
						break;
			}
			
	switch (figura2){
				case 0 :
					enunciado.textContent = 'Introduce base é altura do triangulo';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce a base <input id='base' value='0'/>" +
							"Introduce a altura <input id='altura' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularTriangulo(base.value,altura.value)'/>" +
						"</form>"
						break;
				
				case 1 :
					enunciado.textContent = 'Introduce a base do cuadrado';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce a base <input id='baseCadrado' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularCadrado(baseCadrado.value)'/>" +
						"</form>"
						break;
				case 2: 
					enunciado.textContent = 'Introduce base é altura do rectangulo';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce a base <input id='base' value='0'/>" +
							"Introduce a altura <input id='altura' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularRectangulo(base.value,altura.value)'/>" +
						"</form>"
						break;
				case 3 :
					enunciado.textContent = 'Introduce o radio do circulo';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce o radio <input id='radio' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularCirculo(radio.value)'/>" +
						"</form>"
						break;
				
				
			}
			
		
}

function exercicio2_4(){
	cambiarColorExercicio(2,4);
	enunciado.textContent = "Calcula o perímetro dunha figura xeométrica. A figura só pode ser TRIÁNGULO, CADRADO, RECTÁNGULO ou CÍRCULO.";
	datos.innerHTML = 
		"<select id='figura' >" +
			"<option value='triangulo'>Triangulo</option>" +
			"<option value='cadrado'>Cadrado</option>" +
			"<option value='rectangulo'>Rectangulo</option>" +
			"<option value='circulo'>Circulo</option>" +
		"</select>" +
		"<input type='button' name='boton' value='calcular' onclick='calcularPerimetro(figura.selectedIndex);'/>" 
	
}

function calcularPerimetro(figura){
	switch (figura){
				case 0 :
					enunciado.textContent = 'Introduce base é altura do triangulo';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce a base <input id='base' value='0'/>" +
							"Introduce a altura <input id='altura' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularPerimetroTriangulo(base.value,altura.value)'/>" +
						"</form>"
						break;
				
				case 1 :
					enunciado.textContent = 'Introduce a base do cuadrado';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce a base <input id='baseCadrado' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularPerimetroCadrado(baseCadrado.value)'/>" +
						"</form>"
						break;
				case 2: 
					enunciado.textContent = 'Introduce base é altura do rectangulo';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce a base <input id='base' value='0'/>" +
							"Introduce a altura <input id='altura' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularPerimetroRectangulo(base.value,altura.value)'/>" +
						"</form>"
						break;
				case 3 :
					enunciado.textContent = 'Introduce o radio do circulo';
					enunciado.innerHTML =
						"<form name='formulario'>" +
							"Introduce o radio <input id='radio' value='0'/>" +
							"<input type='button' name='boton' value='Calcular' onclick='calcularPerimetroCirculo(radio.value)'/>" +
						"</form>"
						break;
				
				
			}	
	
	
}

function calcularPerimetroTriangulo(lado){
	if(isNaN(lado)){
		resultado.innerHTML= 'Introduce los datos';
	}else{
		var lado = parseFloat(lado);
		var result = lado *3;
		resultado.innerHTML=result;
	}
}

function calcularPerimetroCadrado(lado){
	if(isNaN(lado)){
		resultado.innerHTML= 'Introduce los datos';
	}else{
		var lado = parseFloat(lado);
		var result = lado *4;
		resultado.innerHTML= result;
	}
}

function calcularPerimetroRectangulo(base,altura){
	if(isNaN(base) || isNaN(altura)){
		resultado.innerHTML= 'Introduce los datos';
	}else{
		var base = parseFloat(base);
		var altura = parseFloat(altura);
		var result = (base*2) + (altura*2);
		resultado.innerHTML= result;
	}
}

function calcularPerimetroCirculo(radio){
	if(isNaN(radio)){	
		resultado.innerHTML= 'Introduce los datos';
	}else
		var radio = parseFloat(radio);
		var result = radio * 2 * Math.PI;
		resultado.innerHTML=result;
}




function exercicio2_5(){
	cambiarColorExercicio(2,5);
	enunciado.textContent = 'Dados dous números, indica cal é o maior';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Introduce o primeiro número <input id='numero1' value='0'/><br>" +
			"Introduce o segundo número <input id='numero2' value='0'/><br>" +
			"<input type='button' name='boton' value='Calcular' onclick='calcularMaiorEx5(numero1.value,numero2.value);'/>" +
		"</form>"
	
}

function calcularMaiorEx5(numero1,numero2){
	if(isNaN(numero1) || isNaN(numero2)){
		resultado.innerHTML='Introduce os números no formato correcto';
	}else{
	var numero1 = parseFloat(numero1);
	var numero2 = parseFloat(numero2);
	if (numero1 > numero2){
		resultado.innerHTML=numero1;
	}else{
		resultado.innerHTML=numero2;
	}
	}
	/*else if (numero1 == numero2){
		amosarResultado('Son iguales');
	}
	*/
		
}


function exercicio2_6(){
	cambiarColorExercicio(2,6);
	enunciado.textContent = 'Dados dous números, indica cal é o maior';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Introduce o primeiro número <input id='numero1' value='0'/>" +
			"Introduce o segundo número <input id='numero2' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='comprobarDiferentes(numero1.value,numero2.value);'/>" +
		"</form>"
	
}

function comprobarDiferentes(numero1,numero2){
	var numero1 = parseFloat(numero1);
	var numero2 = parseFloat(numero2);
	if(numero1 == numero2){
		resultado.innerHTML='Son iguales';
	}else if (numero1 != numero2){
		resultado.innerHTML='Son diferentes';
		if (numero1 > numero2){
		resultado.innerHTML='O maior é : ' + numero1;
		}else if(numero2 > numero1){
		resultado.innerHTML='O maior é : ' + numero2;
	}
}

}

function exercicio2_7(){
	cambiarColorExercicio(2,7);
	enunciado.textContent = 'Dados dous números, indica cal é o maior';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Introduce o primeiro número <input id='numero1' value='0'/>" +
			"Introduce o segundo número <input id='numero2' value='0'/>" +
			"Introduce o terceiro número <input id='numero3' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='comprobarEx7(numero1.value,numero2.value,numero3.value);'/>" +
		"</form>"
	
}

function comprobarEx7(numero1,numero2,numero3){
	if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
	}else{
	var numero1 = parseFloat(numero1);
	var numero2 = parseFloat(numero2);
	var numero3 = parseFloat(numero3);
	if((numero1 > numero2) && (numero1 > numero3)){
		resultado.innerHTML='O número maior é o : ' + numero1;
		} else if((numero2 > numero1) && (numero2 > numero3)){
		resultado.innerHTML='O número maior é o : ' + numero2;
		}else{
		resultado.innerHTML='O número maior é o : ' + numero3;
		}
	}
	
}

function exercicio2_8(){
	cambiarColorExercicio(2,8);
	enunciado.textContent = 'Pedir un ano e indicar se é ou non bisesto, tendo en conta que son bisestos todos os múltiplos de 4 agás os múltiplos de 100 (por exemplo o 1900 non foi bisesto), aínda que os múltiplos de 400 si son bisestos (por iso o foi o ano 2000)';
	datos.innerHTML = 
		"<form name='formulario'>" +
		"Introduce un año para indicar si es bixesto o no: <input id='numero1'/>" +
		"<input type='button' name='boton' value='Calcular' onclick='calcularBixesto(numero1.value);'" +
		"</form>"
}

function calcularBixesto(numero){
	if(isNaN(numero)){
		resultado.innerHTML=('Introduce numeros');
	}else{
	var numero = parseInt(numero);
		if(numero%4==0 && (numero%100!=0 || numero%400==0)){
			resultado.innerHTML = 'Es bixesto';
		}else{
			resultado.innerHTML = 'No es bixesto';
		}
	
	}
	
}

function exercicio2_9(){
	cambiarColorExercicio(2,9);
	enunciado.textContent= 'Pedir un ano e indicar que competición de seleccións masculinas de balonmán se disputa ese ano, tendo en conta que os anos múltiplos de 4 celébranse Xogos Olímpicos, os impares hai Mundiais e os pares Campionatos de Europa';
	datos.innerHTML =
		"<form name='formulario'>" +
		"Introduce un año para indicar a competición internacional de balonmán que se disputa ese ano: <input id='numero1'/>" +
		"<input type='button' name='boton' value='Calcular' onclick='calcularCompeticion(numero1.value);'" +
		"</form>"
}

function calcularCompeticion(numero){
	if(isNaN(numero)){
		resultado.innerHTML=('Introduce numeros');
	}else{
	var numero = parseInt(numero);
		if(numero % 2 != 0){
			resultado.innerHTML = 'Ese ano disputase o Campionato Mundial';
		}else{
			if(numero % 2 == 0 && numero % 4 !=0){
				resultado.innerHTML='Ese ano disputase o Campionato de Europa';
			} else{
				resultado.innerHTML='Ese ano disputase o Campionato de Europa e os Xogos Olímpicos';
			}
		}
	
	}
	
}

function exercicio2_10(){
	cambiarColorExercicio(2,10);
	enunciado.textContent= 'Desexamos validar os campos dun formulario de tal forma que cando premamos o botón de enviar comprobará que:<br>' +
							'todos os campos de texto e contrasinal teñan valores' +
							'os contrasinais coinciden' +
							'o email teña unha estrutura correcta' +
							'asignándolle a clase correcto aos que cumpran as condicións e a clase erro aos que non as cumpran';
	datos.innerHTML=
	"<section>" +
		"<div>" +
			"<h2>Rexistro de Usuarios</h2>" +
			"<div id='formulario'>" +
				"<fieldset class='login'>" +
					"<legend>Detalles de Acceso</legend>" +
					"<div>" +
						"<label for='usuario'>Usuario</label>" +
						"<input type='text' id='usuario' name='usuario'/>" +
					"</div>" +
					"<div>" +
						"<label for='password'>Contrasinal</label>" +
						"<input type='password' id='contrasinal' name='contrasinal'/>" +
					"</div>" +
					"<div>" +
						"<label for='repetir'>Repetir Contrasinal</label>" +
						"<input type='password' id='repetirContrasinal' name='repetirContrasinal'/>" +
					"</div>" +
				"</fieldset>" +
				"<fieldset class='contacto'>" +
					"<legend>Detalles do Usuario </legend>" +
					"<div>" +
						"<label for='nome'>Nome</label>" +
						"<input type='text' id='nome' name='nome'/>" +
					"</div>" +
					"<div>" +
						"<label for='apelidos'>Apelidos</label>" +
						"<input type='text' id='apelidos' name='apelidos'/>" +
					"</div>" +
					"<div>" +
						"<label for='email'>Email</label>" +
						"<input type='text' id='email' name='email' class='email'>" +
					"</div>" +
					"<div>" +
						"<fieldset class='sexo'>" +
							"<legend>Sexo</legend>" +
							"<div>" +
								"<input type='radio' id='home' name='sexo' value='home'/>" +
								"<label for='home'>Home</label>" +
							"</div>" +
							"<div>" +
								"<input type='radio' id='muller' name='sexo' value='muller'/>" +
								"<label for='muller'>Muller</label>" +
							"</div>" +
						"</fieldset>" +
					"</div>" +
					"<div>" +
						"<fieldset class='data'>" +
							"<legend>Data de nacemento</legend>" +
							"<div>" +
								"<label for='dia'>Día</label>" +
								"<select id='dia' name='dia'>" +
									"<option value='1'>1</option>" +
									"<option value='2'>2</option>" +
									"<option value='3'>3</option>" +
									"<option value='4'>4</option>" +
									"<option value='5'>5</option>" + 
									"<option value='6'>6</option>" +
									"<option value='7'>7</option>" +
									"<option value='8'>8</option>" +
									"<option value='9'>9</option>" +
									"<option value='10'>10</option>" +
									"<option value='11'>11</option>" +
									"<option value='12'>12</option>" +
									"<option value='13'>13</option>" +
									"<option value='14'>14</option>" +
									"<option value='15'>15</option>" +
									"<option value='16'>16</option>" +
									"<option value='17'>17</option>" +
									"<option value='18'>18</option>" +
									"<option value='19'>19</option>" + 
									"<option value='20'>20</option>" +
									"<option value='21'>21</option>" +
									"<option value='22'>22</option>" +
									"<option value='23'>23</option>" +
									"<option value='24'>24</option>" +
									"<option value='25'>25</option>" +
									"<option value='26'>26</option>" + 
									"<option value='27'>27</option>" +
									"<option value='28'>28</option>" +
									"<option value='29'>29</option>" +
									"<option value='30'>30</option>" +
									"<option value='31'>31</option>" +
								"</select>" +
							"</div>" +
							"<div>" +
								"<label for='mes'>Mes</label>" +
								"<select id='mes' name='mes'>" +
									"<option value='1'>Xaneiro</option>" +
									"<option value='2'>Febreiro</option>" +
									"<option value='3'>Marzo</option>" +
									"<option value='4'>Abril</option>" +
									"<option value='5'>Maio</option>" +
									"<option value='6'>Xuño</option>" +
									"<option value='7'>Xullo</option>" +
									"<option value='8'>Agosto</option>" +
									"<option value='9'>Setembro</option>" +
									"<option value='10'>Outubro</option>" +
									"<option value='11'>Novembro</option>"  +
									"<option value='12'>Decembro</option>" + 
								"</select>" +
							"</div>" +
							"<div>" +
								"<label for='ano'>Ano</label>" +
								"<select id='ano' name='ano'>" +
									"<option value='2009'>2009</option>" +
									"<option value='2010'>2010</option>" +
									"<option value='2011'>2011</option>" +
									"<option value='2012'>2012</option>" +
									"<option value='2013'>2013</option>" +
									"<option value='2014'>2014</option>" +
								"</select>" +
							"</div>" +
						"</fieldset>" +
					"</div>" +
				"</fieldset>" +
				"<div id='mensaxes'></div>" +
				"<div>" +
					"<button id='enviar' onclick='comprobarDatos(usuario.value,contrasinal.value,repetirContrasinal.value,nome.value,apelidos.value,email.value,home.value,muller.value,dia.value,mes.value,ano.value);'>Enviar</button>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</section>" +
	"<footer>" +
		"<h2>2019 Desenvolvido por Jotaeme Sierra</h2>" +
		"<h2>Ciclo Superior Desenvolvemento de Aplicacións Web</h2>" +
	"</footer>"
}

function comprobarDatos(usuario,contrasinal,repetirContrasinal,nome,apelidos,email,home,muller,dia,mes,ano){
	if(usuario ==''){
		usuario.classList.add("erro");
		usuario.classList.remove("correcto");
	}else{
		usuario.classList.add("correcto");
		usuario.classList.remove("erro");
	}

	if(contrasinal =='' || repetirContrasinal == '' ){
		contrasinal.classList.add("erro");
		contrasinal.classList.remove("correcto");
		repetirContrasinal.classList.add("erro");
		repetirContrasinal.classList.remove("correcto");
	} else if(contrasinal== repetirContrasinal){
		repetirContrasinal.classList.add("correcto"); 
		contrasinal.classList.add("correcto"); 
		}else{(contrasinal== repetirContrasinal)
		contrasinal.classList.add("erro");
		repetirContrasinal.classList.add("erro");
	}
	//detalles de acceso listo
	
	if(nome ==''){
		nome.classList.add("erro");
		nome.classList.remove("correcto");
	}else{
		nome.classList.add("correcto");
		nome.classList.remove("erro");
	}
	if(apelidos =""){
		apelidos.classList.add("erro");
		apelidos.classList.remove("correcto");
	}else{
		apelidos.classList.add("correcto");
		apelidos.classList.remove("erro");
	}
	// https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos
	
	var emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
	
	if(email =""){
		email.classList.add("erro");
		nome.classList.remove("correcto");
	}else if(emailRegex.test(email)){
		email.apelidos.add("correcto");
	}else{
		email.classList.add("erro");
	}
	
		
	}
	
