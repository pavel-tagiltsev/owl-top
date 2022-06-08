import createMenu from './blocks/menu/menu.js'
import createNavigation from './blocks/navigation/navigation.js'
import createCourseFooter from './blocks/course/course-footer/course-footer.js'
import Sort from './blocks/sort/sort.js'

document.addEventListener('DOMContentLoaded', () => {
  createMenu()
  createNavigation()
  createCourseFooter()
  new Sort({
    itemsContainer: '#courses',
    triggersContainer: '#sort',
    activeTriggerClass: 'sort__item--chosed'
  }).init()
})
