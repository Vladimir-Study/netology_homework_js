const rotate = Array.from(document.querySelectorAll('.rotator__case'))

const hide = (arr) => {
    let ind = 0
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].className.includes('rotator__case_active')) {
            arr[i].classList.remove('rotator__case_active')    
            return ind
        }
        ind++
    };
}

setInterval(() => {
    let ind = hide(rotate)
    if (ind == rotate.length -1) {
        rotate[0].style.color = rotate[0].getAttribute('data-color')
        rotate[0].classList.add('rotator__case_active')
    }
    else {
        rotate[ind+1].style.color = rotate[ind+1].getAttribute('data-color')
        rotate[ind+1].classList.add('rotator__case_active')
    }
}, 1000)