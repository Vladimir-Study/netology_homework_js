while (true){
    let hiddenNumber = Math.floor(Math.random()*1000)
    console.log(`Hidden number: ${hiddenNumber}`)

    let userNumber = prompt('Input your number: ')

    if (userNumber == 'e'){
        break
    } else if (isNaN(userNumber)){
        alert(`${userNumber} is not number`)
    } else if (0 < userNumber && userNumber > 1000){
        alert('The number is not the range!')
    } else if (+userNumber === hiddenNumber){
        alert('Congratulations, you WIN!!!')
        break
    }
}