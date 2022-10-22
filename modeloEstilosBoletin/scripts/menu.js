const NUMERO_BOLETINS = 6;
function cargarMenu(){
contedor.innerHTML=	
		"<section>" +
			"<nav id='menu'></nav>" +			
			"<div id='exercicio'>" +
				"<nav id='submenu'></nav>" +
				"<div id='enunciado'></div>" +
				"<div id='datos'></div>" +
				"<div id='resultado'></div>" +
			"</div>" +
		"</section>";
		
		let cadea = '';
		for(let i=1; i<=NUMERO_BOLETINS; i++){
			cadea+= "<div id='boletin"+ i + "' onclick='cargarSubmenu("+ i +");'>Boletin " + i +' ' +"</div>";
		}
		menu.innerHTML=cadea;
		
}

function cargarSubmenu(opcion){
	cambiarColorSubmenu(opcion);
	
	switch(opcion){
	case 1 : NUMERO_EXERCICIOS= 9; break;
	case 2 : NUMERO_EXERCICIOS= 10; break;
	case 3 : NUMERO_EXERCICIOS = 15; break;
	case 4 : NUMERO_EXERCICIOS = 11; break;
	default: NUMERO_EXERCICIOS = 0;
	}
	let cadea = '';
	for(let i = 1; i <= NUMERO_EXERCICIOS;i++){
	cadea += "<div id='exerc_" + opcion + "_" + i + "' onclick='exercicio" + opcion + "_" + i + "();'>Exercicio " + i + "</div>";	
	}
	submenu.innerHTML= cadea;
}


function cambiarColorSubmenu(opcion){
	enunciado.innerHTML = '';
	datos.innerHTML = '';
	resultado.innerHTML = '';
	for(let i = 1;i<=NUMERO_BOLETINS; i++){
		let elemento = document.getElementById('boletin' + i);
		elemento.classList.remove("identificacionColor");
	}
		let elemento = document.getElementById('boletin' + opcion);
		elemento.classList.add("identificacionColor");
	
	
}

function cambiarColorExercicio(boletin, exercicio){
	for(let i = 1; i <= NUMERO_EXERCICIOS; i++){
		let elemento = document.getElementById('exerc_' + boletin + '_' + i);
		elemento.classList.remove("identificacionColor");
	}
	let elemento = document.getElementById('exerc_' + boletin + '_' + exercicio);
		elemento.classList.add("identificacionColor");

}