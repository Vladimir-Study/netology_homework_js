const basket = document.querySelector('.cart__products')

addEventListener('click', event => { if (event.target.className.includes('product__quantity-control_inc')) { event.target.previousElementSibling.textContent++
    }
    if (event.target.className.includes('product__quantity-control_dec') && event.target.nextElementSibling.textContent > 1) {
        event.target.nextElementSibling.textContent--
    }
    if (event.target.className.includes('product__add')) {
        let flag = false
        let el = null
        Array.from(basket.children).forEach(element => {
            console.log(element.getAttribute('data-id') == event.target.closest('.product').getAttribute('data-id'))
            if (element.getAttribute('data-id') == event.target.closest('.product').getAttribute('data-id')) {
                flag = true
                el = element
                // element.children[1].textContent = Number(element.children[1].textContent) + Number(event.target.previousElementSibling.children[1].textContent)
            }
        });
        if (flag) {
            el.children[1].textContent = Number(el.children[1].textContent) + Number(event.target.previousElementSibling.children[1].textContent)
        }
        else {
            basket.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${event.target.closest('.product').getAttribute('data-id')}">
                    <img class="cart__product-image" src="${event.target.closest('.product__controls').previousElementSibling.getAttribute('src')}">
                    <div class="cart__product-count">${event.target.previousElementSibling.children[1].textContent}</div>
                </div>`)
        }
    }
})