const hole = document.getElementsByClassName('hole_has-mole')
const kill_mole = document.getElementById('dead')
const lost = document.getElementById('lost')
let count_kill = null
let count_lost = null
let where_mole = []
setInterval(() => {
    where_mole[0] = hole[0].id
}, 800)
document.addEventListener('click', e => {
    let mole_here = e.target.id
    let click_here = where_mole[0]
    if (mole_here == click_here) {
        kill_mole.textContent++
        count_kill++
    }
    else {
        lost.textContent++
        count_lost++
    }
    if (count_lost >= 10) {
        alert('You LOSE!!!')
        location.reload()
    }
    if (count_kill >= 10) {
        alert('You WIN!!!')
        location.reload()
    }
})