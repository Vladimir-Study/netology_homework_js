addEventListener('click', event => {
    if (event.target.className == 'menu__link' && event.target.nextElementSibling != null) {
        event.target.nextElementSibling.classList.toggle('menu_active')
        event.preventDefault()
    }
})