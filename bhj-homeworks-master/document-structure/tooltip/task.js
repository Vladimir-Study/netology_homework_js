const hint = Array.from(document.querySelectorAll('.has-tooltip'))
hint.forEach(element => {
    element.insertAdjacentHTML('afterend', `<div class="tooltip" style="left: 0; top: 0">${element.getAttribute('title')}</div>`)
});

addEventListener('click', event => {
    if (event.target.className == 'has-tooltip') {
        console.log(event.target.getBoundingClientRect())
        event.target.nextElementSibling.setAttribute('style', `left:${Math.floor(event.target.getBoundingClientRect().left)}px;`)
        event.target.nextElementSibling.classList.toggle('tooltip_active')
    }
    event.preventDefault()
})
