# Tarjeta de Crédito Válida

__Programa:__ _validación de Tarjeta de crédito_
__Entrada:__ _Número del usuario_
__Salida:__ _Verificación de tarjeta válida_


	Función isValidCard
    	Preguntar número al usuario
        	Debe contener solo números
            	SI la frase no contiene solo números
                	Mostrar alerta "Ingrese solo caracteres de 0-9 sin espacios"
            	SI es un campo vacío  
                	Mostrar alerta "Ingrese un número válido"
    	Ejecutar mientras no se ingresen solo números o un campo vacío

    	Variable vacía para guardar la cadena ingresada en array
    	Recorrer la longitud de la cadena ingresada
    		Guardar cada número como un nuevo elemento de un array en la variable vacía
    		Invertir el orden del array 

    		Variable vacía para guardar nuevos números
    		Recorrer la longitud del array
    			SI la posición es par
    				Variable par = elemento de posición par multiplicada por dos
    				SI la variable par mayor o igual a diez
    					Separar digitos

    				Guardar resultado en la variable vacía newArray
    			SI no es par
    				Guardar el número en la variable vacía newArray	

    			Variable result = 0
    			Recorrer array anterior 
    				Sumar todos los elementos del array
    					SI el módulo de  igual a cero
    						Retornar true
    					SI no lo es 
    						Retornar false  