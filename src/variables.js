const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSettings = document.querySelector('.settings')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeShop')
const buttonFireplace = document.querySelector('.fireplace')

const moreFive = document.querySelector('.moreFive')
const minusFive = document.querySelector('.minusFive')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

export {
    buttonPlay, buttonPause, buttonStop, buttonSettings,
    buttonForest, buttonRain, buttonCoffeeShop, buttonFireplace,
    moreFive, minusFive, minutesDisplay, secondsDisplay,
    buttonPressAudio, kitchenTimer
}