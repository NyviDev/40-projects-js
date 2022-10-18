const btnOpen = document.querySelector('.btn-banner')
const btnClose = document.querySelector('.icon-close')

const modal = document.querySelector('.modal')

btnOpen.addEventListener('click', () => {
    modal.classList.toggle('open-modal')
})

btnClose.addEventListener('click', () => {
    modal.classList.toggle('open-modal')
})