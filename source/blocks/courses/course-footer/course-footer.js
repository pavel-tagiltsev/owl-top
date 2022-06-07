import SimpleToggler from '../../../js/libs/SimpleToggler.js'

export default function createCourseFooter() {
  new SimpleToggler({
    buttonSelector: '[data-reviews-trigger]',
    popupSelector: '[data-reviews-receiver]',
    activeClass: 'courses__course-reviews--opened',
    buttonActiveClass: 'button--active'
  }).init()
}
