const input = document.querySelector('input')
const enter = document.getElementById('tasks__add')
const taskList = document.getElementById('tasks__list')

enter.onclick = () => {
    if (input.value.trim().length > 0) {
        taskList.insertAdjacentHTML('afterend', `<div class="task">
                    <div class="task__title">
                    ${input.value} 
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>`)
    }
    input.value = null
    return false
}

addEventListener('click', event => {
    if (event.target.className == 'task__remove') {
       event.target.closest('.task').remove() 
    }
    return false
})