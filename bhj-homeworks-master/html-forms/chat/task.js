const chat = document.querySelector('.chat-widget')
const input = document.querySelector('input')
const messages = document.querySelector( '.chat-widget__messages' );

chat.addEventListener('click', event => {
    chat.classList.add('chat-widget_active')
})

const arr_answer = ['Добрый день!', 
'Добрый день! Хочу купить розы для любимой!', 
'Добрый день, мы ещё не проснулись. Позвоните через 10 лет', 
'Реализуйте ответ робота (случайное сообщение из списка)!!!', 
'Где список?!']

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

input.addEventListener('keydown', event => {
    let time = new Date()
    if (event.key == 'Enter') {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
            <div class="message__text">
            ${input.value} 
            </div>
        </div>`
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
            <div class="message__text">
            ${arr_answer[getRandomInt(5)]} 
            </div>
        </div>
        `
    }
})