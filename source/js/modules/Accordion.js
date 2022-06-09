export default class Accordion {
  constructor({container, activeClasses}) {
    this.accordion = document.querySelector(container)

    this.accordions = activeClasses.map((activeClass, index) => {
      return {
        triggers: this.accordion.querySelectorAll(
          `[data-accordion-trigger="${index + 1}-level"]`
        ),
        activeClass
      }
    })

    this.onClick = this.onClick.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  removeActiveClass(triggers, activeClass) {
    triggers.forEach((trigger) => {
      trigger.parentElement.classList.remove(activeClass)
    })
  }

  addActiveClass({triggers, activeClass, evt}) {
    triggers.forEach((trigger) => {
      if (trigger === evt.target) {
        this.removeActiveClass(triggers, activeClass)
        trigger.parentElement.classList.add(activeClass)
      }
    })
  }

  onEvent(evt) {
    this.accordions.forEach((accordion) => {
      this.addActiveClass({
        evt,
        triggers: accordion.triggers,
        activeClass: accordion.activeClass
      })
    })
  }

  onClick(evt) {
    this.onEvent(evt)
  }

  onKeyDown(evt) {
    if (evt.keyCode === 12 || evt.keyCod === 32) {
      this.onEvent(evt)
    }
  }

  init() {
    this.accordion.addEventListener('click', this.onClick)
    this.accordion.addEventListener('keydown', this.onKeyDown)
  }

  destroy() {
    this.accordion.removeEventListener('click', this.onClick)
    this.accordion.removeEventListener('keydown', this.onKeyDown)
  }
}
