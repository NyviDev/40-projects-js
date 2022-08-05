const btnClose = document.querySelector('.icon-close')
const btnBar = document.querySelector('.icon-bar')

const sidebar = document.querySelector('.sidebar')

btnClose.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})

btnBar.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})