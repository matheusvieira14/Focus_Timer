import {
    buttonCoffeeShop, buttonFireplace, buttonForest, buttonPause,
    buttonPlay, buttonPressAudio, buttonRain, buttonSettings,
    buttonStop, minusFive, moreFive
} from "/src/variables.js"

import {
    getMinutes, updateDisplay, countdown, timerTimeOut,
    updateMinutes, play, pause, resetControls, resetTimer, addTimer,
    reduceTimer
} from './src/timer.js'

import { Card } from './src/cards.js'

buttonSettings.addEventListener('click', function () {
    buttonPressAudio.play()
    let newMinutes = getMinutes()

    if (!newMinutes) {
        resetTimer()
        return
    }

    updateDisplay(newMinutes, 0)
    updateMinutes(newMinutes)
})

buttonPlay.addEventListener('click', function () {
    play()
    countdown()
    buttonPressAudio.play()
})

buttonPause.addEventListener('click', function () {
    pause()
    clearTimeout(timerTimeOut)
    buttonPressAudio.play()
})

buttonStop.addEventListener('click', function () {
    resetControls()
    resetTimer()
    buttonPressAudio.play()
})

moreFive.addEventListener('click', function () {
    buttonPressAudio.play()
    addTimer()
})

minusFive.addEventListener('click', function () {
    buttonPressAudio.play()
    reduceTimer()
})

let forest = new Card('forest', buttonForest)
let rain = new Card('rain', buttonRain)
let coffeShop = new Card('coffee_shop', buttonCoffeeShop)
let fire = new Card('fire', buttonFireplace)

const cards = [forest, rain, coffeShop, fire]

function toggleCards(card) {
    cards.forEach(
        e => e.name == card.name ? e.toggle() : e.reset()
    )
}

buttonForest.addEventListener('click', function () {
    toggleCards(forest)
})

buttonRain.addEventListener('click', function () {
    toggleCards(rain)
})

buttonCoffeeShop.addEventListener('click', function () {
    toggleCards(coffeShop)
})

buttonFireplace.addEventListener('click', function () {
    toggleCards(fire)
})