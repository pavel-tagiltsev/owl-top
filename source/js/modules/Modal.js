export default class Modal {
  constructor({openBtnSelector, closeBtnSelector, modalSelector, activeClass}) {
    this.openBtn = document.querySelector(openBtnSelector)
    this.closeBtn = document.querySelector(closeBtnSelector)
    this.popup = document.querySelector(modalSelector)
    this.activeClass = activeClass

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
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

  init() {
    this.openBtn.addEventListener('click', this.open)
    this.closeBtn.addEventListener('click', this.close)
  }

  destroy() {
    this.openBtn.removeEventListener('click', this.open)
    this.closeBtn.removeEventListener('click', this.close)
  }
}
