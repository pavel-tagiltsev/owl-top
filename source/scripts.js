import Toggler from './blocks/navigation/navigation.js'
import menuToggler from './blocks/menu/menu.js'

const navigation = document.querySelector('.navigation')
navigation && new Toggler(navigation).init()
menuToggler()
