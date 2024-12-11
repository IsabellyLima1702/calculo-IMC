const ValidarIMC = function(peso, altura){
    let valor1 = peso
    let valor2 = altura
    let status = true


    if(valor1 == '' || valor2 == ''){
        console.log('ERRO: É obrigatório todas as entradas de dados.')
        status = false

    }else if(isNaN(valor1) == true || isNaN(valor2) == true){
            console.log('ERRO: É obrigatório somente a entrada de valores numéricos.')
            status = false

            

        }
        return status
    
}
const ValidarResultado = function(peso, altura){
    let valor1 = peso
    let valor2 = altura
   resultado = (Number(valor1) / Number(valor2*valor2)) 
    
    let status = false

    if(resultado <= 18.5){
            console.log('Abaixo do peso.')
            status = true
            console.log('O resultado do IMC é:'+ resultado.toFixed(2))

        }else{
            if(resultado >= 18.5 && resultado <= 24.9){
                console.log('Peso normal.')
                status = true
                console.log('O resultado do IMC é:'+ resultado.toFixed(2))

            }else{
                if(resultado >= 25 && resultado <= 29.9){
                    console.log('Acima do peso (sobrepeso).')
                    status = true
                    console.log('O resultado do IMC é:'+ resultado.toFixed(2))

                }else{
                    if(resultado >= 30 && resultado <= 34.9){
                        console.log('Obesidade I.')
                        status = true
                        console.log('O resultado do IMC é:'+ resultado.toFixed(2))

                    }else{
                        if(resultado >= 35 && resultado <= 39.9){
                            console.log('Obesidade II.')
                            status = true
                            console.log('O resultado do IMC é:'+ resultado.toFixed(2))

                        }else{
                            if(resultado >= 40){
                                console.log('Obesidade III.')
                                status = true
                                    console.log('O resultado do IMC é:'+ resultado.toFixed(2))
                                                        
                            }
                        }
                    }
                }
            }
        }
    }
    


module.exports = {
    ValidarIMC,
    ValidarResultado
}