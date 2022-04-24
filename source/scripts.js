import Toggler from './blocks/navigation/navigation.js'

const navigation = document.querySelector('.navigation')
navigation && new Toggler(navigation).init()
