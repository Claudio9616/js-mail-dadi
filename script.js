const button = document.getElementById('button')

button.addEventListener('click', function(){
    let resultUser = ''
    for (let i = 1; i <= 1; i++){
        resultUser = Math.floor(Math.random() * 6) + 1
        console.log(resultUser, 'resultUser')
    }
    let resultCpu = ''
    for (let i = 1; i <= 1; i++){
        resultCpu = Math.floor(Math.random() * 6) + 1
        console.log(resultCpu, 'resultCpu')
    }


})



