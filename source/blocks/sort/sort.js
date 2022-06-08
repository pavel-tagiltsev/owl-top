const VALUE_ATTRIBUTE = 'data-sort-value'
const ORDER_ATTRIBUTE = 'data-sort-order'
const INITIAL_SORT = 0
const SORT_ORDERS = {
  DESCENDING: (a, b, value) =>
    b.getAttribute(`data-${value}`) - a.getAttribute(`data-${value}`),
  ASCENDING: (a, b, value) =>
    a.getAttribute(`data-${value}`) - b.getAttribute(`data-${value}`)
}

export default class Sort {
  constructor({itemsContainer, triggersContainer, activeTriggerClass}) {
    this.itemsContainer = document.querySelector(itemsContainer)
    this.items = Array.from(this.itemsContainer.children)
    this.triggersContainer = document.querySelector(triggersContainer)
    this.triggers = Array.from(this.triggersContainer.children)
    this.activeTriggerClass = activeTriggerClass

    this.onTriggerClick = this.onTriggerClick.bind(this)
  }

  highlightChosedTrigger(chosedTrigger) {
    this.triggers.forEach((trigger) => {
      trigger.classList.remove(this.activeTriggerClass)
    })

    chosedTrigger
      .closest(`[${VALUE_ATTRIBUTE}]`)
      .classList.add(this.activeTriggerClass)
  }

  updateItemsContainer(clone) {
    let insertType = ''
    let siblingAnchor = null

    if (this.itemsContainer.previousElementSibling) {
      siblingAnchor = this.itemsContainer.previousElementSibling
      insertType = 'after'
    } else {
      siblingAnchor = this.itemsContainer.parentElement
      insertType = 'append'
    }

    this.itemsContainer.remove()

    siblingAnchor[insertType](clone)
  }

  sortItems(chosedTrigger) {
    const sortableValue = chosedTrigger
      .closest(`[${VALUE_ATTRIBUTE}]`)
      .getAttribute(VALUE_ATTRIBUTE)

    const sortableOrder = chosedTrigger
      .closest(`[${ORDER_ATTRIBUTE}]`)
      .getAttribute(ORDER_ATTRIBUTE)

    this.items.sort((a, b) => {
      return SORT_ORDERS[sortableOrder.toUpperCase()](a, b, sortableValue)
    })

    let itemsContainerClone = this.itemsContainer

    this.items.forEach((item) => {
      itemsContainerClone.prepend(item)
    })

    this.updateItemsContainer(itemsContainerClone)
  }

  onTriggerClick(evt) {
    this.sortItems(evt.target)
    this.highlightChosedTrigger(evt.target)
  }

  init() {
    if (INITIAL_SORT < this.triggers.length) {
      this.sortItems(this.triggers[INITIAL_SORT])
      this.highlightChosedTrigger(this.triggers[INITIAL_SORT])
    } else {
      this.sortItems(this.triggers[0])
      this.highlightChosedTrigger(this.triggers[0])
    }

    this.triggersContainer.addEventListener('click', this.onTriggerClick)
  }

  destroy() {
    this.triggersContainer.removeEventListener('click', this.onTriggerClick)
  }
}
