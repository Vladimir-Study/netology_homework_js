// option one
const menu = document.querySelectorAll('.menu__link')
document.addEventListener('click', (event) => {
    if (event.target.className == 'menu__link') { 
        const p = event.target
        p.nextElementSibling.classList.toggle('menu_active')
        event.preventDefault()
    }
})

//option two

// const view_menu = new Promise((resolve, reject) => {
//     const t = Array.from(menu)
//     resolve(t)
// })


// const test = async () => {
//     const v_menu = await view_menu
//     v_menu.forEach(element => {
//         element.onclick = event => {
//             const elem = event.target
//             elem.nextElementSibling.classList.toggle('menu_active')
//             return false
//         }
//     });
// }

// test()