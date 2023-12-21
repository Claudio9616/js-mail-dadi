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
        message = 'HAI VINTO TU....'
    } else {
        message = 'HO VINTO IO SFIGATO!'
    }
    victory.innerText = message
})




