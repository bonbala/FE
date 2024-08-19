/*
    Input: Số giờ làm, Số tiền 1 giờ

    B1: Nếu số giờ làm ko vượt hơn 40h thì tính như bth : salary=workTime*moneyPerHour
    B2: Nếu vượt quá 40h thì tính theo : salary=(workTime%40)*moneyPerHour+(workTime-workTime%40)*moneyPerHour*1.5
    B3: Nếu giờ làm = 0 thì alert

    Output: So tien lam dc
*/

var h1Element = document.getElementById("h1Element")
console.log(h1Element)

var headerElement = document.querySelector('.header')
console.log('header:' , headerElement.innerHTML)

var turnOnBtn = document.getElementById('TurnOn')
turnOnBtn.onclick = turnOn

var turnOffBtn = document.getElementById('TurnOff')
turnOffBtn.onclick = turnOff

function turnOn(){
    console.log('turnOn')
    h1Element
}

function turnOff(){
    console.log('turnOff')
    
}






