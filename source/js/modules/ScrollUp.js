export default class ScrollUp {
  constructor(trigger) {
    this.trigger = document.querySelector(trigger)

    this.onTriggerClick = this.onTriggerClick.bind(this)
    this.onPageScroll = this.onPageScroll.bind(this)
  }

  onTriggerClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  onPageScroll() {
    let scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )

    const opacity = Math.floor((window.pageYOffset * 100) / scrollHeight)

    this.trigger.style.opacity = opacity + '%'

    if (window.pageYOffset + window.innerHeight >= scrollHeight - 100) {
      this.trigger.style.opacity = 1
    }
  }

  init() {
    this.trigger.style.opacity = 0

    document.addEventListener('scroll', this.onPageScroll)
    this.trigger.addEventListener('click', this.onTriggerClick)
  }

  destroy() {
    this.trigger.style.opacity = 1

    document.removeEventListener('scroll', this.onPageScroll)
    this.trigger.removeEventListener('click', this.onTriggerClick)
  }
}
