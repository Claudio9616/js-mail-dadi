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

// EMAIL
// 1 Creo una lista di email confermate
// 2 recupero gli elementi dal DOM
// 3 creo la lista degli eventi al click del bottone
// 4 recupero il valore che l'utente mi ha fornito
// 4b faccio la validazione della mail
// 5 mi preparo una variabile per usarla nella verifica del confronto delle mail
// 6 recupero i valori dalla lista
// 7 determino la verifica del confronto delle email
// 8 preparo il messaggio
// 9 stampo il messaggio in console

// 1
const email = ['ciccio.pasticcio@libero.it',
 'diego.maradona@libero.it',
  'peter.parker@gmail.com',
   'arthur.morgan@gmail.com']
//    2
const emailUser = document.getElementById('email')
const emailButton = document.getElementById('mail-button')
const text = document.getElementById('text')
// 3
emailButton.addEventListener('click', function(){
    // 4
const emailDichiarata = emailUser.value.trim()
console.log(emailDichiarata)
// 4b
if (!emailDichiarata){
    alert('Email non valida')
    return
}
// 5
let userAutorizzato = false
// 6
for(let i = 0; i < email.length && !userAutorizzato; i++){
    console.log(email[i])
    let messageForUser
    // 7, 8
if (emailDichiarata === email[i]){
    userAutorizzato = true
    console.log('Benvenuto ', emailDichiarata)
    console.log(userAutorizzato)
    messageForUser = 'Benvenuto ' + emailDichiarata
} else if(!userAutorizzato){
    console.log('Non puoi entrare ', emailDichiarata)
    console.log(userAutorizzato)
    messageForUser = 'Non sei autorizzato '+ emailDichiarata
}
// 9
text.innerText = messageForUser
}
})




