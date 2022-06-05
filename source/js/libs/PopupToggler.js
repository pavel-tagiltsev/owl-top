export default class PopupToggler {
  constructor({openBtnSelector, closeBtnSelector, popupSelector, activeClass}) {
    this.openBtn = document.querySelector(openBtnSelector)
    this.closeBtn = document.querySelector(closeBtnSelector)
    this.popup = document.querySelector(popupSelector)
    this.activeClass = activeClass

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  close() {
    this.popup.classList.remove(this.activeClass)
    document.documentElement.style.overflow = ''
    this.openBtn.focus()
  }

  open() {
    this.popup.classList.add(this.activeClass)
    document.documentElement.style.overflow = 'hidden'
    this.closeBtn.focus()
  }

  onKeyDown(evt) {
    if (evt.keyCode === 12 || evt.keyCod === 32) {
      if (evt.target === this.openBtn) {
        this.open()
      } else {
        this.close()
      }
    }
  }

  init() {
    this.openBtn.addEventListener('click', this.open)
    this.openBtn.addEventListener('keydown', this.onKeyDown)

    this.closeBtn.addEventListener('click', this.close)
    this.closeBtn.addEventListener('keydown', this.onKeyDown)
  }

  destroy() {
    this.openBtn.removeEventListener('click', this.open)
    this.openBtn.removeEventListener('keydown', this.onKeyDown)

    this.closeBtn.removeEventListener('click', this.close)
    this.closeBtn.removeEventListener('keydown', this.onKeyDown)
  }
}
