const second = document.getElementById('timer')
const timer = setInterval(() => {
    second.textContent --
    if (second.textContent == 00) {
        clearInterval(timer)
    }
}, 1000)
