const navToggle = document.querySelector('.icon')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    if(links.classList.contains('hide-links')) {
        links.classList.remove('hide-links')
        links.classList.add('add-links')

    } else {
        links.classList.remove('add-links')
        links.classList.add('hide-links')
    }
})