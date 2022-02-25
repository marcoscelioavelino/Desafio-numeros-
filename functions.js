
function validar (){
	var numero = document.getElementById("numero").value;

	if (numero == "") {
		alert("Informe um número no campo");
		return false;

	}else if (numero <1 || numero > 1000) {
		alert ("O seu número deve ser entre 1 e 1000");	
		return false;	
	}
	return true;
}

function parOuImpar() {
	if (!validar()) return;
	
var nPouI = numero.value;

	if (nPouI %2 == 0) {
		alert("O seu número é par!");
	}else {
		alert("O seu número é impar!");
	}
}


function primo() {
	if (!validar()) return;
	var numPri = numero.value;
	for (var i = 2; i < numPri ; i++){
    	if (numPri % i == 0) {
    		alert("Não é primo");
      		return false;
  		}
    }

  		alert("É primo");
  	
}

function fibonacci () {
	if (!validar()) return;
	var sim = "" ; 
	var nFibo = numero.value;
	nFiboArray = new Array;
	nFiboArray[0] = 0;
    nFiboArray[1] = 1;
	for (var i = 2; i <= nFibo +1 ; i++) {
            nFiboArray[i] = nFiboArray[i - 2] + nFiboArray[i - 1];
			nFiboArray.push(i);
		if (nFiboArray[i] == nFibo) {
		var sim = 1;	
		alert("O seu número ESTÁ na sequência Fibonacci");	
		}
	}
	if (sim != 1 ) {  
		alert("O seu número NÃO está na sequência Fibonacci");
	}
}
	

function multiplosde4 () {
	if (!validar()) return;
	var mult4 = numero.value;
	var multiplos = [] ;
	for (var i=0; i<= mult4; i++){
		multiplos.push(i);
		if (multiplos[i] %4 == 0) {
		multiplos[i] = multiplos[i]+("Pin ");
		}

	}
alert(multiplos);
}

