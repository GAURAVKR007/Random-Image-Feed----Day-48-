const container = document.querySelector('.container')

const unsplashURL = 'https://source.unsplash.com/random/'

const rows = 10

for(let i = 0;i<rows * 3;i++) {
    const img = document.createElement('img')
    img.src=`${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100 + 300)
}
