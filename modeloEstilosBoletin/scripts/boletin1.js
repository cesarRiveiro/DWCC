function amosarResultado(resultado) {
	const TEXTO_SOLUCION = 'O resultado é: ';
	resultado.innerHTML = TEXTO_SOLUCION + resultado;
}	

function limparPantalla() {
	enunciado.innerHTML = '';
	datos.innerHTML = '';
	resultado.innerHTML = '';
}

function exercicio1_1() {
	limparPantalla();
	enunciado.textContent = 'Suma de dous números e impresión do resultado';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Número 1: <input id='numero1' value='0'/>" +
			"Número 2: <input id='numero2' value='0'/>" +
			"<input type='button' name='boton' value='Suma' onclick='suma(numero1.value,numero2.value);'/>" +
		"</form>";
}

function suma(numero1,numero2) {
	var numero1 = parseFloat(numero1);
	var numero2 = parseFloat(numero2);
	var suma = numero1 + numero2;
	amosarResultado(suma);
}

function exercicio1_2() {
	limparPantalla();
	enunciado.textContent = 'Un individuo quere investir o seu capital nun banco e desexa saber cantos cartos aforrará despois de tres meses, se o banco paga a razón do 2% mensual';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Capital: <input id='capital' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='aforro(capital.value);'/>" +
		"</form>";
}

function aforro(numero1) {
	const XURO = 0.02;
	var numero1 = parseFloat(numero1);
	let total = numero1 * (1 + XURO);
	total *= (1 + XURO); 
	total *= (1 + XURO); 
	amosarResultado((total - numero1).toFixed(2));
}

function exercicio1_3() {
	limparPantalla();
	enunciado.textContent = 'Unha tenda ofrece un desconto do 15% sobre o total da compra, e un cliente desexa saber canto deberá pagar finalmente pola súa compra';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Prezo: <input id='prezo' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='desconto(prezo.value);'/>" +
		"</form>";
}

function desconto(prezo) {
	const DESCONTO = 0.15;
	var prezo = parseFloat(prezo);
	prezo *= 1 - DESCONTO;
	amosarResultado(prezo.toFixed(2));
}

function exercicio1_4() {
	limparPantalla();
	enunciado.textContent = 'Porcentaxe de homes e porcentaxe de mulleres que hai en clase nun momento determinado';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Homes: <input id='homes' value='0'/>" +
			"Mulleres: <input id='mulleres' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='porcentaxe(homes.value,mulleres.value);'/>" +
		"</form>";
}

function porcentaxe(homes,mulleres) {
	var homes = parseInt(homes);
	var mulleres = parseInt(mulleres);
	var total = homes + mulleres;
	var porcentaxeHomes = (homes / total) * 100;
	var porcentaxeMulleres = (mulleres / total) * 100;
	amosarResultado('% de homes = ' + porcentaxeHomes.toFixed(2) + '<br /> % de mulleres = ' + porcentaxeMulleres.toFixed(2));
}

function exercicio1_5() {
	limparPantalla();
	enunciado.textContent = 'Dada unha cantidade en euros, obter a equivalencia en pesetas e en dólares';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Euros: <input id='euros' value='0'/>" +
			"Cotización do dólar: <input id='dolar' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='equivalencia(euros.value,dolar.value);'/>" +
		"</form>";
}

function equivalencia(euros,dolar) {
	const PESETAS = 166.386;
	var euros = parseFloat(euros);
	var dolar = parseFloat(dolar);
	var equivalenciaDolar = euros * dolar;
	var equivalenciaPesetas = euros * PESETAS;
	amosarResultado('Dólares = ' + equivalenciaDolar.toFixed(2) + '<br /> Pesetas = ' + equivalenciaPesetas.toFixed(2));
}

function exercicio1_6() {
	limparPantalla();
	enunciado.textContent = 'Un vendedor recibe o soldo base máis un 10% extra de comisión polas súas vendas; o vendedor quere saber cantos cartos obterá no concepto de comisións polas tres vendas que realizou no mes pasado e o total que recibirá no mes. Para obter o resultado final pódese considerar que o seu soldo base é de 1000 euros e que as vendas que realizou foron de 1200, 350 e 5600 euros';
	//datos.innerHTML = 
	const SOLDO = 1000;
	const COMISION1 = 1200;
	const COMISION2 = 350;
	const COMISION3 = 5600;
	let comision = (COMISION1 + COMISION2 + COMISION3) * .10;
	let total = comision + SOLDO;

	amosarResultado('O vendedor cobrará de comisións ' + comision.toFixed(2) + ' €<br/>O vendedor cobrará en total ' + total.toFixed(2) + ' €');
}

function exercicio1_7() {
	limparPantalla();
	enunciado.textContent = 'Escribir un programa que pida unha temperatura en graos Fahrenheit e calcular e amosar o seu equivalente en graos Celsius, ambos admitindo dous decimais';
	datos.innerHTML = 
		"<form name='formulario'>" +
			"Fahrenheit: <input id='fahrenheit' value='0'/>" +
			"<input type='button' name='boton' value='Calcular' onclick='graos(fahrenheit.value);'/>" +
		"</form>";
}

function graos(fahrenheit) {
	var fahrenheit = parseFloat(fahrenheit);
	var celsius = (fahrenheit - 32) * 5 / 9;
	amosarResultado('A equivalencia en graos Celsius é: ' + celsius.toFixed(2));
}

function exercicio1_8() {
	limparPantalla();
	enunciado.textContent = 'Unha persoa desexa saber cales son os seus parámetros físicos para saber se debería facer dieta. Quere saber o seu índice de masa corporal, a relación cintura/altura e o número de calorías diarias a consumir. Recolle os datos necesarios e amosa por pantalla unha táboa cos cálculos realizados. Para simplificar cálculos, e tendo en conta que non podedes usar máis que asignacións e operacións, non fai falla saber se é un home ou unha muller a que o quere saber. Pódese empregar a fórmula 10*peso + 6.25*altura - 5*edad para calcular o número de calorías a consumir diariamente';
	datos.innerHTML = 
		"<form name='formulario'>" +
			'<p><label>Peso: </label><input id="peso" type="text"/><label> kilogramos</label></p>' +
			'<p><label>Estatura: </label><input id="estatura" type="text"/><label> centímetros</label></p>' +
			'<p><label>Idade: </label><input id="idade" type="text"/><label> anos</label></p>' +             
			'<p><label>Perímetro da cintura: </label><input id="perimetro" type="text"/><label> centímetros</label></p>' +
			"<input type='button' name='boton' value='Calcular' onclick='parametrosFisicos(peso.value,estatura.value,idade.value,perimetro.value);'/>" +
		"</form>";
}

function parametrosFisicos(peso,altura,idade,perimetro) {
	var peso = parseFloat(peso);
	var altura = parseFloat(altura);
	var idade = parseInt(idade);
	var perimetro = parseFloat(perimetro);
	var calorias = peso * 10 + 6.25 * altura - 5 * idade;
	var imc = peso / (altura / 100) ** 2;
	var ica = perimetro / altura;
	var taboa =
		"<table>" +
			"<tr><th>CALORÍAS</th><th>IMC</th><th>ICA</th></tr>" +
			"<tr><td>" + calorias.toFixed(0) + "</td><td>" + imc.toFixed(2) + "</td><td>" + ica.toFixed(2) + "</td></tr>" +
		"</table>";
				
				
	amosarResultado(taboa);
}

function exercicio1_9() {
	limparPantalla();
	enunciado.innerHTML = '<p>Dado un número natural de catro díxitos (non fai falla comprobar que ten catro díxitos) indicar cantos millares, centenas, decenas e unidades ten.</p><p>EXEMPLO:</p><code>1234</code><br /><code>O número introducido ten 1 millares, 2 centenas, 3 decenas e 4 unidades</code><br /><code>27</code><br /><code>O número introducido ten 0 millares, 0 centenas, 2 decenas e 7 unidades</code>';
	datos.innerHTML = 
		"<form name='formulario'>" +
			'<p><label>Número: </label><input id="numero" type="text"/></p>' +
			"<input type='button' name='boton' value='Calcular' onclick='resolver9(numero.value);'/>" +
		"</form>";
}

function resolver9(numero) {
	var numero = parseInt(numero);
	var millares = Math.trunc(numero/1000);			
	var unidades = numero % 1000;
	var centenas = Math.trunc(unidades/100);
	unidades = unidades % 100;
	var decenas = Math.trunc(unidades/10);
	unidades = unidades % 10;			
				
	amosarResultado('O número introducido ten ' + millares + ' millares, ' + centenas + ' centenas, ' + decenas + ' decenas e ' + unidades + ' unidades');
}