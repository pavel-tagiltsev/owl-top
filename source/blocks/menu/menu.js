import PopupToggler from '../../js/libs/PopupToggler.js'

export default function createMenu() {
  new PopupToggler({
    openBtnSelector: '[data-menu="open"]',
    closeBtnSelector: '[data-menu="close"]',
    popupSelector: '[data-menu="menu"]',
    activeClass: 'menu--opened'
  }).init()
}
