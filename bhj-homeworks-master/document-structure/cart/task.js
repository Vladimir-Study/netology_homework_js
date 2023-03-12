const basket = document.querySelector('.cart__products')

addEventListener('click', event => { if (event.target.className.includes('product__quantity-control_inc')) { event.target.previousElementSibling.textContent++
    }
    if (event.target.className.includes('product__quantity-control_dec') && event.target.nextElementSibling.textContent > 1) {
        event.target.nextElementSibling.textContent--
    }
    if (event.target.className.includes('product__add')) {
        const found = Array.from(basket.children).find(el => el.getAttribute('data-id') == event.target.closest('.product').getAttribute('data-id'))
        if (found != null) {
            found.children[1].textContent = Number(found.children[1].textContent) + Number(event.target.previousElementSibling.children[1].textContent)
        }
        else {
            basket.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${event.target.closest('.product').getAttribute('data-id')}">
                    <img class="cart__product-image" src="${event.target.closest('.product__controls').previousElementSibling.getAttribute('src')}">
                    <div class="cart__product-count">${event.target.previousElementSibling.children[1].textContent}</div>
                </div>`)
        }
    }
})