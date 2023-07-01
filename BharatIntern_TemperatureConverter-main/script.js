let celsuisInput = document.querySelector('#celsuis > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

/*Celsuis to fahrenheit and kelvin */
celsuisInput.addEventListener('input',function(){
    let celTemp = parseFloat(celsuisInput.value)
    let kelTemp = celTemp + 273.15
    let fahTemp = (celTemp*(9/5)) + 32

    fahrenheitInput.value = roundNumber(fahTemp)
    kelvinInput.value = roundNumber(kelTemp)
})

/*Fahrenheit to calsuis and kelvin */
fahrenheitInput.addEventListener('input',function(){
    let fahTemp = parseFloat(fahrenheitInput.value)
    let celTemp = (fahTemp - 32)*(5/9)
    let kelTemp = (fahTemp - 32)*(5/9) + 273.15

    celsuisInput.value = roundNumber(celTemp)
    kelvinInput.value = roundNumber(kelTemp)
})

/*kelvin to calsuis and fahrenheit */
kelvinInput.addEventListener('input',function(){
    let kelTemp = parseFloat(kelvinInput.value)
    let celTemp = kelTemp - 273.15
    let fahTemp = (kelTemp - 273.15) * (9/5) + 32

    celsuisInput.value = roundNumber(celTemp)
    fahrenheitInput.value = roundNumber(fahTemp)
})

btn.addEventListener('click', ()=>{
    celsuisInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})