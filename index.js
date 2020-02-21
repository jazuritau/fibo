const express = require('express')
const app = express()
const cors = require('cors')


//const fiboApi = require('./routes/fibo')

//middleware de body parser
app.use(express.json())
app.use(cors())

//fiboApi(app)
app.get("/:id", function(req, res){ 
    const position = req.params.id
    const valid  = RegExp(/^\d*$/).test(position)    //  si no funciona probar con esta /^\d+$/ 
    
    if (valid == false) {
        res.send('Error, solo acepto numeros')
    }

    
    console.log('llegue hasta aqui')
    console.log(req.params.id)

    function fibonacci(id){
        let x = 0;
        let arreglo = [];	
        let valor = parseInt(id)
        for (x; x<valor; x++){
            if(x==0){
                arreglo.push(0);
            }
            else if(x==1){
                arreglo.push(1);
            }
            else{
                arreglo.push(arreglo[x-1]+arreglo[x-2]);
            }
        }

        return arreglo
    }
   
    let arreglo = fibonacci(req.params.id)

    res.send(arreglo)

})


app.listen(3001, function() {
    console.log('Listening http://localhost:3001')
})

