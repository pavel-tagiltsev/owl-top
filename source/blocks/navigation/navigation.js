import NestedAccordion from '../../js/libs/NestedAccordion.js'

export default function createNavigation() {
  new NestedAccordion({
    selector: '[data-nested-accordion]',
    activeClasses: [
      'navigation__first-item--opened',
      'navigation__second-item--opened'
    ]
  }).init()
}
