const hideBlock = document.querySelector('.reveal')
hideBlock.getBoundingClientRect()
addEventListener('scroll', () => {
    if ((hideBlock.getBoundingClientRect().top - window.outerHeight/2)  < 0) {
        hideBlock.classList.add('reveal_active')
    }
})