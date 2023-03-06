const book = document.getElementById('book')
const arrSize = Array.from(document.querySelectorAll('.font-size'))

const hide = (arr) => {
    arr.forEach(element => {
       element.classList.remove('font-size_active') 
    });
}

book.addEventListener('click', event => {
    if (event.target.className.includes('font-size')) {
        let fSize = event.target.getAttribute('data-size')
        if (fSize == 'big') {
            book.className = 'book book_fs-big'
            hide(arrSize)
            arrSize[2].classList.add('font-size_active')
        }
        else if (fSize == 'small') {
            book.className = 'book book_fs-small'
            hide(arrSize)
            arrSize[0].classList.add('font-size_active')
        }
        else {
            book.className = 'book'
            hide(arrSize)
            arrSize[1].classList.add('font-size_active')
        }

    }
    event.preventDefault()
})
