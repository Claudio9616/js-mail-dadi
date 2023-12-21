// DADI
// 1 recupero gli elementi dal DOM 
// 2 creo la lista degli eventi al click del bottone
// 3 creo delle variabili vuote 
// 4, 5 randomizzo i numeri per l'user e per la cpu
// 6 scrivo le condizioni in caso di vittoria dell'utente e/o della cpu e in caso di pareggio
// 7 preparo il messaggio
// 8 stampo il messaggio in console
// 1
const button = document.getElementById('button')
const victory = document.getElementById('vincitore')
// 2
button.addEventListener('click', function(){
    // 3
    let resultUser = ''
    let resultCpu = ''
    let message = ''
    // 4
    resultUser = Math.floor(Math.random() * 6) + 1
    console.log(resultUser, 'resultUser')
    resultCpu = Math.floor(Math.random() * 6) + 1
    console.log(resultCpu, 'resultCpu')
    // 6, 7, 8
    if(resultUser > resultCpu){
        message = 'HAI VINTO TU'
    } else if(resultUser === resultCpu){
        message = 'HAI PAREGGIATO'
    }
     else {
        message = 'HO VINTO IO SFIGATO!'
    }
    // 9
    victory.innerText = message + ' risultato utente: ' + resultUser + ' risultato computer: ' + resultCpu
})
// 1 Creo una lista di email confermate
// 2 recupero gli elementi dal DOM
// 3 creo la lista degli eventi al click del bottone
// 4 recupero il valore che l'utente mi ha fornito
// 5 recupero i valori dalla lista
// 6 determino la verifica del confronto delle email
// 7 preparo il messaggio
// 8 stampo il messaggio in console
// EMAIL
// 1
const email = ['ciccio.pasticcio@libero.it',
 'pasticcio.ciccio@gmail.com',
  'moana.pozzi@bigbird.it',
   'martina.smeraldi@verybigbird.it']
//    2
const emailUser = document.getElementById('email')
const emailButton = document.getElementById('mail-button')
const text = document.getElementById('text')
// 3
emailButton.addEventListener('click', function(){
    // 4
const emailDichiarata = emailUser.value
console.log(emailDichiarata)
// 5, 6, 7
let message1 = 'Intruso'
const emailAsd = [email]
console.log(emailAsd)
if(emailAsd === emailDichiarata){
    message1 = 'puoi accedere'
}
// 8
text.innerText = message1
})




