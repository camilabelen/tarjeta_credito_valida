/*
Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. 
Lee este blog que explica cómo funciona el algoritmo de Luhn.

Consideraciones Específicas:
·Tu código debe estar compuesto por 1 función: isValidCard
·El usuario no debe poder ingresar un campo vacío
*/

function isValidCard(){
	
	do {
	var cardNumber = prompt("Ingrese el número de la tarjeta de crédito");
	var cardCondition = /^[0-9]*$/;//expresión regular para que lo ingresado contenga solamente números
		if(!cardCondition.test(cardNumber)){
			alert("Ingrese solo caracteres de 0-9 sin espacios")
		} 
		if(cardNumber == ""){
			alert("Ingrese un número válido")
		}
				
	} while(cardCondition.test(cardNumber) == false || cardNumber == "");
			
		var invertedArray = [];
		for (var i = 0; i < cardNumber.length; i++){
  			invertedArray.push(cardNumber[i]);
  			invertedArray.reverse();
  			//parseInt;

  			var newArray = [];
  			for(var j = 0; j < invertedArray.length; j++){
  				if ((j+1) % 2 == 0){
				var pair = (j % 2 == 0) * 2;
					if(pair >= 10){
						pair.split("")
					} 
					newArray.push(pair);
  				} else {
  					newArray.push(invertedArray[j]);
  				}

  				var result = 0
  				for(var k = i; k < newArray.length; k++){
  					result += newArray[k];
  					if(result % 10 == 0){
  						return true;
  					} else {
  						return false;
  					}
  				}

  			}
  		}
  }

  isValidCard();

  //falta parseInt
  			


  	/*	var numbers = cardNumber.pop();
		if(i % 2 == 0){
			var pair = (i % 2 == 0) * 2; 
			newArray.push(pair);
  		
  		cardNumber.splice(i, 0, numbers);
  		resultOfPair.push();
	}

}

	for(var i = 0; i < cardNumber.length; i++){
		var inversion = cardNumber.reverse()
		
	}
	for(var j = 0; i < resultOfPair.length;)

		if(i % 2 == 0){
			var pair = (i % 2 == 0) * 2; 
			resultOfPair.push(pair);
		} else {
			resultOfPair.push(i);
		}
		/*var numberProduct = (cardNumber.lastIndexOf(i) % 2 == 0)* 2;	
		resultOfPair.push(numberProduct);
		}else{
			resultOfPair.push()
		}
		
	}
*/