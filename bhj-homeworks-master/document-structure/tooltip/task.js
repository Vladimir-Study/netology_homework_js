const hint = Array.from(document.querySelectorAll('.has-tooltip'))
hint.forEach(element => {
    element.insertAdjacentHTML('afterend', `<div class="tooltip" style="left: 0; top: 0">${element.getAttribute('title')}</div>`)
});

addEventListener('click', event => {
    if (event.target.className == 'has-tooltip') {
        event.target.nextElementSibling.setAttribute('data-position', `left:${Math.floor(event.target.getBoundingClientRect().left)} ; top: ${Math.floor(event.target.getBoundingClientRect().top)}`)
        event.target.nextElementSibling.classList.toggle('tooltip_active')
    }
    event.preventDefault()
})

addEventListener('click', event => {
    if (event.target.className == 'task__remove') {
       console.log(event) 
    }
})
