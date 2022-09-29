import { Sound, SOUND_COFFEE_SHOP_PATH, SOUND_FIRE_PATH, SOUND_FOREST_PATH, SOUND_RAIN_PATH } from './sounds.js'

const BACKGROUND_DEFAULT_COLOR = '#e1e1e6'

const cards = [
  {
    name: 'forest',
    color: '#28794B',
    sound_path: SOUND_FOREST_PATH
  },
  {
    name: 'rain',
    color: '#6dc1ff',
    sound_path: SOUND_RAIN_PATH
  },
  {
    name: 'coffee_shop',
    color: '#b29289',
    sound_path: SOUND_COFFEE_SHOP_PATH
  },
  {
    name: 'fire',
    color: '#DB6300',
    sound_path: SOUND_FIRE_PATH,
  }
]

export class Card {
  constructor(name, cardHTML) {
    this.name = cards.filter(obj => obj.name == name)[0].name
    this.color = cards.filter(obj => obj.name == name)[0].color
    this.active = false
    this.cardHTML = cardHTML

    this.sound = new Sound(
      cards.filter(obj => obj.name == name)[0].sound_path
    )
  }

  toggle() {
    !this.active ? (this.active = true, this.playSound()) :
      (this.active = false, this.pauseSound())

    this.changeColor()
  }

  playSound() {
    this.sound.play()
  }

  pauseSound() {
    this.sound.pause()
  }

  changeColor() {
    !this.active ? (
      this.cardHTML.classList.remove("bg"),
      this.cardHTML.style.backgroundColor = BACKGROUND_DEFAULT_COLOR
    ) :
      (
        this.cardHTML.classList.add("bg"),
        this.cardHTML.style.backgroundColor = this.color
      )
  }

  reset() {
    this.active = false
    this.pauseSound()
    this.changeColor()
  }

}