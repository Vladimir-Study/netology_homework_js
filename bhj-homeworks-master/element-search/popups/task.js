const modalOne = document.getElementById('modal_main')
const modalSuccess = document.getElementById('modal_success')
modalOne.classList.add('modal_active')
const btnDanger = document.querySelector('.btn_danger')
const arrModalClose  = Array.from(document.querySelectorAll('.modal__close'))

this.onclick = event => {
    arrModalClose.forEach(element => {
        if (event.target == element) {
            if (event.target.tagName == 'A') {
                modalSuccess.classList.toggle('modal_active')
            }
            if (event.target.closest('#modal_main') == null) {
                event.target.closest('#modal_success').classList.toggle('modal_active')
            }
            else {
                event.target.closest('#modal_main').classList.toggle('modal_active')
            }
        }
    });
} 