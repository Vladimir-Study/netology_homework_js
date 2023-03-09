addEventListener('click', event => {
    if (event.target.type == 'checkbox') {
        const child_elm = Array.from(event.target.closest('li').children)
        if (event.target.checked && child_elm.length > 1) {
            const child = child_elm[1].children
            for (let i = 0; i < child.length; i++) {
                child[i].children[0].control.checked = true
            }
        }
        if (!event.target.checked && child_elm.length > 1) {
            const child = child_elm[1].children
            for (let i = 0; i < child.length; i++) {
                child[i].children[0].control.checked = false
            }
        }
    }
})