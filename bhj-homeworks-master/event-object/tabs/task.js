const tabs = Array.from(document.querySelectorAll('.tab'))
const contents = Array.from(document.querySelectorAll('.tab__content'))

const contentActive = () => {
    for(let i = 0; i < tabs.length; i++) {
        if (tabs[i].className.includes('tab_active')) {
            contents[i].classList.add('tab__content_active')
        }
    }
};

const removeClass = (arr, className) => {
    arr.forEach(element => {
        element.classList.remove(className)  
    });
} 

addEventListener('click', event => {
    if (event.target.className == 'tab') {
        removeClass(tabs, 'tab_active')
        removeClass(contents, 'tab__content_active')
        event.target.classList.add('tab_active')
        contentActive()
    }
})