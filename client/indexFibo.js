//const axios = require('axios').default;

// axios.<method> will now provide autocomplete and parameter typings


// function fibonacci(){
// 	var x = 0;
// 	var  pos = document.getElementById("position");
// 	var arreglo = [];	
// 	valor = parseInt(pos.value);
// 	for (x; x<valor; x++){
// 		if(x==0){
// 			arreglo.push(0);
// 		}
// 		else if(x==1){
// 			arreglo.push(1);
// 		}
// 		else{
// 			arreglo.push(arreglo[x-1]+arreglo[x-2]);
// 		}
// 	}

// 	resultado.innerHTML = arreglo


// }

function fibonacci() {
	// Make a request for a user with a given ID
	let pos = document.getElementById("position")
	let valor = parseInt(pos.value)
	axios.get(`http:/localhost:3001/${valor}`)

	.then(function (response) {
		// handle success
		resultado.innerHTML = response.data


	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})

}

var resultado = document.getElementById("resultado");
consultar = document.getElementById("consultar")
consultar.addEventListener("click", fibonacci)
