// Search Tool
const menus = document.getElementsByClassName('drop-down-list')
const showMenu = (x) => {
    for (let i = 0; i < menus.length; i++) {
        if (i != x)
            menus[i].classList.add('hidden')
        else
            menus[i].classList.toggle('hidden')
    }
}
categoryButton.addEventListener('click', () => {
    showMenu(0)
})
typeButton.addEventListener('click', () => {
    showMenu(1)
})
salaryButton.addEventListener('click', () => {
    showMenu(2)
})
locationButton.addEventListener('click', () => {
    showMenu(3)
})