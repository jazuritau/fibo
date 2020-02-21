/* eslint-disable no-unused-vars */
const express = require('express')
const positionNumberSchema = require('../utils/schema/position')


const number = positionNumberSchema

const arrayFibo = fibonacci(number)

function fibonacci(number) {

    // let fn= [0,1]
    
    // for (let i = 2; i<=number; i++) {
    //     fn[i] = fn(number-1) + fn(number-2)
    // }

    // return fn 
}

function fiboApi(app) { 
    app.get("/", function(req, res){  
        console.log('llegue hasta aqui')
        res.send('llegue hasta aqui')
       

    })
}

module.exports = fiboApi