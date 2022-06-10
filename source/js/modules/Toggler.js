export default class Toggler {
  constructor({
    container,
    trigger,
    target,
    triggerActiveClass,
    targetActiveClass
  }) {
    this.container = container
    this.trigger = this.container.querySelector(trigger)
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
    this.trigger.addEventListener('click', this.toggle)
  }

  destroy() {
    this.trigger.removeEventListener('click', this.open)
  }
}
