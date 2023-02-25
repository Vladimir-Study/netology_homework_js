const cookie = document.getElementById('cookie')
const cliker = document.getElementById('clicker__counter')
const speed = document.getElementById('clicker__speed')
const date = Date.now()
const date_lst = []
date_lst.push(date)
cookie.onclick = () => {
    count = cliker.textContent++
    speed.textContent = (1/(Math.floor(Date.now() - date_lst[0])/1000)).toFixed(2)
    date_lst[0] = Date.now()
    cookie.width = 220
    setTimeout(() => {
        cookie.width = 200
    }, 100)
}