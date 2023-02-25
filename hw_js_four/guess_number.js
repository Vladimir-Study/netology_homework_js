const rl = require('readline').createInterface(process.stdin, process.stdout);

let counter = 0
let hidden_number = Math.floor(Math.random()*100)
console.log(hidden_number)


const question = () => {
    rl.question('Inter Number: ', (number) => {
        if (number == hidden_number) {
            console.log('Congratulations!!! The numbers of your attempt: ', counter);
            rl.close();
            return
        }
        else {
            counter ++
            if (hidden_number > number) {
                console.log('Falied, try again! Your number is less!')
            }
            else {
                console.log('Falied, try again! Your number is bigger!')

            }
            question()
        }
    })
}


question()
