const slider = document.getElementsByClassName('slider')[0]
let position = 0
setInterval(() => {
    position--
    if (position < -3)
        position = 0
    slider.style.transform = 'translateX(' + position * 1200 + 'px)'
}, 5000)