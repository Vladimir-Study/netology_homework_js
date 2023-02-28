const items = document.querySelector('.slider__items')
const dots = document.querySelector('.slider__dots')
const next_button = document.getElementsByClassName('slider__arrow slider__arrow_next')[0]
const prev_button = document.getElementsByClassName('slider__arrow slider__arrow_prev')[0]
const arr_item = Array.from(items.children)
const arr_dots = Array.from(dots.children)
next_button.onclick = () => {
    const tr = menu_index(arr_item, 'slider__item_active')
    if (tr === arr_item.length - 1) {
        arr_item[0].classList.add('slider__item_active')
        arr_dots[0].classList.add('slider__dot_active')
        arr_item[tr].classList.remove('slider__item_active')
        arr_dots[tr].classList.remove('slider__dot_active')
    }
    else {
        arr_item[tr+1].classList.add('slider__item_active')
        arr_dots[tr+1].classList.add('slider__dot_active')
        arr_item[tr].classList.remove('slider__item_active')
        arr_dots[tr].classList.remove('slider__dot_active')
    }
}

prev_button.onclick = () => {
    const tr = menu_index(arr_item, 'slider__item_active')
    if (tr === 0) {
        arr_item[arr_item.length - 1].classList.add('slider__item_active')
        arr_dots[arr_item.length - 1].classList.add('slider__dot_active')
        arr_item[0].classList.remove('slider__item_active')
        arr_dots[0].classList.remove('slider__dot_active')
    }
    else {
        arr_item[tr-1].classList.add('slider__item_active')
        arr_dots[tr-1].classList.add('slider__dot_active')
        arr_item[tr].classList.remove('slider__item_active')
        arr_dots[tr].classList.remove('slider__dot_active')
    }
}

const menu_index = (menu, class_name) => {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].className.includes(class_name)) {
            return i 
        }
    }
}

const hide = (dots, class_name) => {
    dots.forEach(element => {
       element.classList.remove(class_name) 
    });
}

document.addEventListener('click', event => {
    if (event.target.className == 'slider__dot') {
        hide(arr_dots, 'slider__dot_active')
        event.target.classList.add('slider__dot_active')
        hide(arr_item, 'slider__item_active')
        arr_item[menu_index(arr_dots, 'slider__dot_active')].classList.add('slider__item_active')
    }
})