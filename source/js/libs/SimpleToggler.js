export default class Simpletoggler {
  constructor({buttonSelector, popupSelector, activeClass, buttonActiveClass}) {
    this.button = document.querySelector(buttonSelector)
    this.popup = document.querySelector(popupSelector)
    this.activeClass = activeClass
    this.buttonActiveClass = buttonActiveClass

    this.toggle = this.toggle.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  toggle() {
    this.popup.classList.toggle(this.activeClass)
    this.button.classList.toggle(this.buttonActiveClass)
  }

  onKeyDown(evt) {
    if (evt.keyCode === 12 || evt.keyCod === 32) {
      this.toggle()
    }
  }

  init() {
    this.button.addEventListener('click', this.toggle)
    this.button.addEventListener('keydown', this.onKeyDown)
  }

  destroy() {
    this.button.removeEventListener('click', this.open)
    this.button.removeEventListener('keydown', this.onKeyDown)
  }
}
