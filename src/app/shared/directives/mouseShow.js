const boxOver = (el) => {
    const comment = el.querySelector('.delete__group')
    comment.classList.add('active')
}

const boxOut = (el) => {
    const comment = el.querySelector('.delete__group')
    comment.classList.remove('active')
}


export default {
    mounted(el) {
        el.addEventListener('mouseover', () => boxOver(el))
        el.addEventListener('mouseout', () => boxOut(el))
    }
}