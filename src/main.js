// Зарын дэлгэрэнгүй үзэх
const items = document.getElementsByClassName('item')
const listBoxes = document.querySelectorAll('.item-menu>div')
document.querySelector('.item-menu').addEventListener('click', (event) => {
        if (event.target.className == 'item' || event.target.parentElement.className == 'item' || event.target.parentElement.parentElement.className == 'item') {
            for (let i = 0; i < listBoxes.length; i++) {
                listBoxes[i].classList.add('hidden')
            }
            if (document.querySelector('.item-menu').querySelector('.active') != undefined) {
                document.querySelector('.item-menu').querySelector('.active').classList.remove('active')
            }
            if (event.target.className == 'item') {
                event.target.classList.add('active')
                event.target.parentElement.parentElement.classList.remove('hidden')
            } else if (event.target.parentElement.classList == 'item') {
                event.target.parentElement.classList.add('active')
                event.target.parentElement.parentElement.parentElement.classList.remove('hidden')
            } else if (event.target.parentElement.parentElement.className == 'item') {
                event.target.parentElement.parentElement.classList.add('active')
                event.target.parentElement.parentElement.parentElement.parentElement.classList.remove('hidden')
            }
            fullItemShower.classList.remove('hidden')
        }
    })
    // Зарын дэлгэрэнгүйг хаах
closeView.addEventListener('click', () => {
    for (let i = 0; i < listBoxes.length; i++) {
        listBoxes[i].classList.remove('hidden')
    }
    fullItemShower.classList.add('hidden')
    document.querySelector('.item-menu').querySelector('.active').classList.remove('active')
})