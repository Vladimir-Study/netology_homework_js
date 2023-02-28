const modal_one = document.getElementById('modal_main')
const modal_success = document.getElementById('modal_success')
modal_one.classList.add('modal_active')
const btn_danger = document.querySelector('.btn_danger')
const modal_close_one = document.querySelectorAll('.modal__close')[0]
const modal_close_two = document.querySelectorAll('.modal__close')[2]
btn_danger.onclick = (event) => {
    modal_success.classList.add('modal_active') 
    modal_one.classList.remove('modal_active') 
}
modal_close_one.onclick = (event) => {
    modal_one.classList.remove('modal_active') 
}
modal_close_two.onclick = (event) => {
    modal_success.classList.remove('modal_active') 
}
