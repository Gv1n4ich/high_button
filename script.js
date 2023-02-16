const btn = document.querySelector(".random_btn")


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min));
}

btn.addEventListener('mouseenter', () => {
    btn.style.color = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`;
    btn.style.border = '4px solid rgb(' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ')'
    btn.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ')'
})

btn.addEventListener('mouseleave', () => {
    btn.style.transform = `rotate(${getRandomInt(-180,180)}deg)`
})