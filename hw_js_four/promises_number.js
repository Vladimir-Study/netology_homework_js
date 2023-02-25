const rl = require('readline').createInterface(process.stdin, process.stdout);

const questions = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (number) => {
            resolve(number)
        })
    })
}

async function input() {
    let count = 0
    let hidden_number = Math.floor(Math.random()*100)
    console.log(hidden_number)
    while (true) {
        const number = await questions("Plese enter number: ")
        if (number == hidden_number) {
            console.log('Congratulations!!! The numbers of your attempt: ', count);
            break
        }
        count ++
        if (number <= hidden_number) {
            console.log('Falied, try again! Your number is less!')
            }
        else {
            console.log('Falied, try again! Your number is bigger!')

        }
    }
    return 
}

input()