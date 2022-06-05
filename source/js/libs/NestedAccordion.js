export default class NestedAccordion {
  constructor({selector, activeClasses}) {
    this.nestedAccordion = document.querySelector(selector)

    this.accordions = activeClasses.map((activeClass, index) => {
      return {
        triggers: this.nestedAccordion.querySelectorAll(
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
    this.nestedAccordion.addEventListener('click', this.onClick)
    this.nestedAccordion.addEventListener('keydown', this.onKeyDown)
  }

  destroy() {
    this.nestedAccordion.removeEventListener('click', this.onClick)
    this.nestedAccordion.removeEventListener('keydown', this.onKeyDown)
  }
}
