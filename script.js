// DADI
const button = document.getElementById('button')
const victory = document.getElementById('vincitore')
button.addEventListener('click', function(){
    let resultUser = ''
    let resultCpu = ''
    let message = ''
    resultUser = Math.floor(Math.random() * 6) + 1
    console.log(resultUser, 'resultUser')
    resultCpu = Math.floor(Math.random() * 6) + 1
    console.log(resultCpu, 'resultCpu')
    if(resultUser > resultCpu){
        message = 'HAI VINTO TU'
    } else {
        message = 'HO VINTO IO SFIGATO!'
    }
    victory.innerText = message
})
// EMAIL
const email = ['ciccio.pasticcio@libero.it',
 'pasticcio.ciccio@gmail.com',
  'moana.pozzi@bigbird.it',
   'martina.smeraldi@verybigbird.it']
const emailUser = document.getElementById('email')
const emailButton = document.getElementById('mail-button')
const text = document.getElementById('text')

emailButton.addEventListener('click', function(){
const emailDichiarata = emailUser.value
console.log(emailDichiarata)
let message1 = ''
if(email === emailDichiarata){
    message1 = 'puoi accedere'   
} else{
    message1 = 'INTRUSO!'
}
text.innerText = message1
})




