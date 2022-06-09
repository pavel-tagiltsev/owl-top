export default class Toggler {
  constructor({
    container,
    trigger,
    target,
    triggerActiveClass,
    targetActiveClass
  }) {
    this.container = container
    this.triggers = this.container.querySelectorAll(trigger)
    this.target = this.container.querySelector(target)
    this.triggerActiveClass = triggerActiveClass
    this.targetActiveClass = targetActiveClass

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.target.classList.toggle(this.targetActiveClass)
    this.trigger.classList.toggle(this.triggerActiveClass)
  }

  init() {
    this.triggers.forEach((trigger) => {
      trigger.addEventListener('click', this.toggle)
    })
  }

  destroy() {
    this.trigger.removeEventListener('click', this.open)
  }
}
