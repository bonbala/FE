
// var number = 123

// var tram =Math.floor(number/100)
// var chuc = Math.floor((number%100)/10)
// var don = Math.floor((number%100)%10)

// console.log(tram , chuc , don)
// var tong = tram+chuc+don
// console.log(tong)

var movieName = prompt()
var priceTicketAdult = Number(prompt())
var priceTicketChild = Number(prompt())
var ticketAdult = Number(prompt())
var ticketChild = Number(prompt())
var percent = Number(prompt())
var Profit = priceTicketAdult*ticketAdult+priceTicketChild*ticketChild
var MoneyAfter = Profit-Profit*(percent/100)


console.log("Ten phim :" , movieName)
console.log("Gia ve nguoi lon :", priceTicketAdult)
console.log("Gia ve tre em :", priceTicketChild)
console.log("So ve nguoi lon", ticketAdult)
console.log("So ve tre em", ticketChild)
console.log("Tong so ve da ban",ticketAdult+ticketChild)
console.log("Tong doanh thu:",Profit)
console.log("Phan tram tu thien",percent,"%")
console.log("Tien sau khi quyen gop",MoneyAfter )


