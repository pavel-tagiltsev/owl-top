const burger = document.querySelector('.main-header__burger')
const close = document.querySelector('.menu__close')
const menu = document.querySelector('.menu')

export default function MenuToggler() {
  burger.addEventListener('click', () => {
    menu.classList.add('menu--opened')
    document.documentElement.style.overflow = 'hidden'
  })

  close.addEventListener('click', () => {
    menu.classList.remove('menu--opened')
    document.documentElement.style.overflow = ''
  })
}
