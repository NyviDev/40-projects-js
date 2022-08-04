const btnClose = document.querySelector('.icon-close')
const btnBar = document.querySelector('.icon-bar')

const sidebar = document.querySelector('.sidebar')

btnClose.addEventListener('click', () => {
    if(sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar')
    }
})

btnBar.addEventListener('click', () => {
    console.log('pasei aq')
    sidebar.classList.add('show-sidebar')
})