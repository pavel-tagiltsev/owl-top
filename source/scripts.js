import createMenu from './blocks/menu/menu.js'
import createNavigation from './blocks/navigation/navigation.js'
import createCourseFooter from './blocks/courses/course-footer/course-footer.js'

document.addEventListener('DOMContentLoaded', () => {
  createMenu()
  createNavigation()
  createCourseFooter()
})
