const items = document.querySelector('.slider__items')
const dots = document.querySelector('.slider__dots')
const arr_item = Array.from(items.children)
const arr_dots = Array.from(dots.children)

const getIndex = (menu, className) => {
    const filter = elem => elem.className.includes(className)
    let activeSlide = menu.findIndex(filter)
    return activeSlide
}

const hide = (arr, index, className) => {
    arr[index].classList.remove(className)
}

const show = (arr, index, className) => {
    arr[index].classList.add(className)
}

const hideAll = (arr, className) => {
    arr.forEach(element => {
        element.classList.remove(className)
    }); 
}

this.onclick = event => {
    if (event.target.className.includes('slider__arrow_prev')) {
        let index = getIndex(arr_item, 'slider__item_active')
        if (index == 0) {
            hide(arr_item, 0, 'slider__item_active')
            show(arr_item, arr_item.length - 1, 'slider__item_active')
            hide(arr_dots, 0, 'slider__dot_active')
            show(arr_dots, arr_dots.length - 1, 'slider__dot_active')
        }
        else {
            hide(arr_item, index, 'slider__item_active')
            show(arr_item, index-1, 'slider__item_active')
            hide(arr_dots, index, 'slider__dot_active')
            show(arr_dots, index-1, 'slider__dot_active')
        }
    }
    if (event.target.className.includes('slider__arrow_next')) {
        let index = getIndex(arr_item, 'slider__item_active')
        if (index == arr_item.length - 1) {
            hide(arr_item, arr_item.length - 1, 'slider__item_active')
            show(arr_item, 0, 'slider__item_active')
            hide(arr_dots, arr_item.length - 1, 'slider__dot_active')
            show(arr_dots, 0, 'slider__dot_active')
        }
        else {
            hide(arr_item, index, 'slider__item_active')
            show(arr_item, index+1, 'slider__item_active')
            hide(arr_dots, index, 'slider__dot_active')
            show(arr_dots, index+1, 'slider__dot_active')
        }
    }
    if (event.target.className == 'slider__dot') {
        hideAll(arr_dots, 'slider__dot_active')
        event.target.classList.add('slider__dot_active')
        index = getIndex(arr_dots, 'slider__dot_active')
        hideAll(arr_item, 'slider__item_active')
        show(arr_item, index, 'slider__item_active')
        console.log(index)
    }
}