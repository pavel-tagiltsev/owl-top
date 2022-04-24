export default class Toggler {
  constructor(element) {
    this.toggler = element

    this.togglerLists = [
      {
        toggles: this.toggler.querySelectorAll('[data-toggel="first"]'),
        activeClass: 'navigation__first-item--opened'
      },
      {
        toggles: this.toggler.querySelectorAll('[data-toggel="second"]'),
        activeClass: 'navigation__second-item--opened'
      }
    ]

    this.onClick = this.onClick.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  removeActiveClasses(elements, selector) {
    elements.forEach((item) => {
      item.parentElement.classList.remove(selector)
    })
  }

  addActiveClass({toggels, activeClass, evt}) {
    toggels.forEach((toggle) => {
      if (toggle === evt.target) {
        this.removeActiveClasses(toggels, activeClass)
        const closest = toggle.attributes['data-toggel'].value
        toggle
          .closest(`[data-receiver="${closest}"]`)
          .classList.add(activeClass)
      }
    })
  }

  onClick(evt) {
    this.togglerLists.forEach((list) => {
      this.addActiveClass({
        evt,
        toggels: list.toggles,
        activeClass: list.activeClass
      })
    })
  }

  onKeyDown(evt) {
    if (evt.code == 'Enter' || evt.code == 'Space') {
      this.togglerLists.forEach((list) => {
        this.addActiveClass({
          evt,
          toggels: list.toggles,
          activeClass: list.activeClass
        })
      })
    }
  }

  init() {
    this.toggler.addEventListener('click', this.onClick)
    this.toggler.addEventListener('keydown', this.onKeyDown)
  }

  destroy() {
    this.toggler.removeEventListener('click', this.onClick)
    this.toggler.removeEventListener('keydown', this.onKeyDown)
  }
}
