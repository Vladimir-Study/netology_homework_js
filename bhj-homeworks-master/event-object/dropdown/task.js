const btn = document.querySelector('.dropdown__value')
const lst = document.querySelector('.dropdown__list')

btn.addEventListener('click', event => {
        lst.classList.toggle('dropdown__list_active')
    }
)

this.addEventListener('click', ev => {
    console.log(ev.target)
    ev.preventDefault()
})