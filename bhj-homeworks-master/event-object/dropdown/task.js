const btn = document.querySelector('.dropdown__value')
const lst = document.querySelector('.dropdown__list')

btn.addEventListener('click', event => {
        lst.classList.toggle('dropdown__list_active')
    }
)

addEventListener('click', ev => {
    if (ev.target.className == 'dropdown__link') {
        btn.textContent = ev.target.textContent
        lst.classList.toggle('dropdown__list_active')
    }
    ev.preventDefault()
})