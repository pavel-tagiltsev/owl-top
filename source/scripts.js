import Modal from './js/modules/Modal.js'
import Accordion from './js/modules/Accordion.js'
import Toggler from './js/modules/Toggler.js'
import Sort from './js/modules/Sort.js'

document.addEventListener('DOMContentLoaded', () => {
  new Modal({
    openBtnSelector: '[data-menu-open]',
    closeBtnSelector: '[data-menu-close]',
    modalSelector: '[data-menu]',
    activeClass: 'menu--opened'
  }).init()

  new Accordion({
    selector: '[data-nested-accordion]',
    activeClasses: [
      'navigation__first-item--opened',
      'navigation__second-item--opened'
    ]
  }).init()

  document.querySelectorAll('.course').forEach((course) => {
    new Toggler({
      container: course,
      trigger: '[data-reviews-trigger]',
      target: '[data-reviews-receiver]',
      triggerActiveClass: 'button--active',
      targetActiveClass: 'course__reviews--opened'
    }).init()
  })

  new Sort({
    itemsContainer: '#courses',
    triggersContainer: '#sort',
    activeTriggerClass: 'sort__item--chosed'
  }).init()
})
