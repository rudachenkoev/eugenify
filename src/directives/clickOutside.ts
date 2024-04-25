interface HTMLElement {
  clickOutsideEvent?: (event: MouseEvent) => void
}

interface ClickOutsideBinding {
  value: (event: MouseEvent) => void
}

const clickOutsideDirective = {
  beforeMount(el: HTMLElement, binding: ClickOutsideBinding) {
    el.clickOutsideEvent = function (event: MouseEvent) {
      // Check if the clicked element is neither the element to which the directive is applied nor its child
      if (!(el === event.target || (el as any).contains(event.target as Node))) {
        // Invoke the provided method
        binding.value(event)
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: HTMLElement) {
    // Remove the event listener when the bound element is unmounted
    document.removeEventListener('click', el.clickOutsideEvent as EventListener)
  }
}

export default clickOutsideDirective
