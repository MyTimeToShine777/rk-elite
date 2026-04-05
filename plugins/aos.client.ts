import AOS from 'aos'
import 'aos/dist/aos.css'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    requestAnimationFrame(() => {
      if (prefersReducedMotion()) {
        return
      }

      AOS.init({
        duration: 850,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
      })
    })
  })

  nuxtApp.hook('page:finish', () => {
    requestAnimationFrame(() => {
      if (prefersReducedMotion()) {
        return
      }

      setTimeout(() => {
        AOS.refreshHard()
      }, 60)
    })
  })
})
