var moduloFuncoes = require('./modulo/funcoes.js')
var readline = require('readline')
var entradadedados = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

entradadedados.question('Digite o seu peso:', function(peso){
    let valor1 = String(peso).replace(',', '.')
    entradadedados.question('Digite a sua altura:', function(altura){
        let valor2 = String(altura).replace(',', '.')

        if(moduloFuncoes.ValidarIMC (valor1, valor2)){;
            moduloFuncoes.ValidarResultado (valor1, valor2)
        }
    })    
})