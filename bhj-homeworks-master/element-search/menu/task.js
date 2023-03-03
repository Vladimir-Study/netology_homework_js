const arrMenu = Array.from(document.querySelectorAll('.menu_sub'))
this.onclick = event => {
    arrMenu.forEach(element => {
        if (event.target.nextElementSibling == element) {
            element.classList.toggle('menu_active')
        }
    });
    return false
}