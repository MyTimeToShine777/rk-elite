import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let cleanupFns: Array<() => void> = []

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function cleanupInteractions() {
  cleanupFns.forEach(fn => fn())
  cleanupFns = []
}

function killTweens() {
  const animatedElements = Array.from(document.querySelectorAll<HTMLElement>([
    '[data-reveal]',
    '[data-process-card]',
    '[data-page-hero-copy]',
    '[data-page-hero-card]',
    '[data-hero-visual]',
    '[data-hero-title]',
    '[data-command-card]',
    '[data-command-metric]',
    '[data-command-panel]',
    '[data-blueprint-line]',
    '[data-parallax]',
    '[data-float]',
    '[data-tilt]',
    '[data-depth-layer]',
    '[data-counter]',
    '[data-stagger] > *',
  ].join(',')))

  if (animatedElements.length) {
    gsap.killTweensOf(animatedElements)
  }
}

function selectGsapTargets(selector: string) {
  return Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
    element => !element.hasAttribute('data-aos'),
  )
}

function resetAnimatedElements() {
  killTweens()

  gsap.set(
    [
      '[data-reveal]',
      '[data-process-card]',
      '[data-page-hero-copy]',
      '[data-page-hero-card]',
      '[data-hero-visual]',
      '[data-hero-title]',
      '[data-command-card]',
      '[data-command-metric]',
      '[data-command-panel]',
      '[data-blueprint-line]',
      '[data-parallax]',
      '[data-float]',
      '[data-tilt]',
      '[data-depth-layer]',
      '[data-stagger] > *',
    ],
    { clearProps: 'all' },
  )
}

function animateCounters() {
  document.querySelectorAll<HTMLElement>('[data-counter]').forEach((element) => {
    const target = Number(element.dataset.counter)
    if (!target) {
      return
    }

    const suffix = element.dataset.suffix ?? ''
    const state = { value: 0 }

    gsap.to(state, {
      value: target,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      },
      onUpdate: () => {
        element.textContent = `${Math.round(state.value)}${suffix}`
      },
    })
  })
}

function setupTiltCards() {
  if (!window.matchMedia('(pointer: fine)').matches) {
    return
  }

  const candidates = new Set<HTMLElement>()

  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach(element => candidates.add(element))
  document.querySelectorAll<HTMLElement>('.panel, .glass-panel, .project-shard').forEach((element) => {
    const bounds = element.getBoundingClientRect()
    const hasForm = Boolean(element.querySelector('form'))
    const isCompactCard = bounds.width <= 560 && bounds.height <= 340

    if (isCompactCard && !hasForm) {
      candidates.add(element)
    }
  })

  candidates.forEach((element) => {
    const handleMove = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect()
      const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5
      const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5

      gsap.to(element, {
        rotateY: offsetX * 10,
        rotateX: offsetY * -10,
        z: 18,
        transformPerspective: 1200,
        transformOrigin: 'center',
        duration: 0.35,
        ease: 'power2.out',
      })
    }

    const resetTilt = () => {
      gsap.to(element, {
        rotateY: 0,
        rotateX: 0,
        z: 0,
        duration: 0.45,
        ease: 'power3.out',
      })
    }

    element.addEventListener('pointermove', handleMove)
    element.addEventListener('pointerleave', resetTilt)
    element.addEventListener('blur', resetTilt)

    cleanupFns.push(() => {
      resetTilt()
      element.removeEventListener('pointermove', handleMove)
      element.removeEventListener('pointerleave', resetTilt)
      element.removeEventListener('blur', resetTilt)
    })
  })
}

function setupPointerHighlight(selector: string) {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    const handleMove = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect()
      const x = ((event.clientX - bounds.left) / bounds.width) * 100
      const y = ((event.clientY - bounds.top) / bounds.height) * 100

      element.style.setProperty('--pointer-x', `${x}%`)
      element.style.setProperty('--pointer-y', `${y}%`)
    }

    const handleLeave = () => {
      element.style.setProperty('--pointer-x', '50%')
      element.style.setProperty('--pointer-y', '50%')
    }

    handleLeave()
    element.addEventListener('pointermove', handleMove)
    element.addEventListener('pointerleave', handleLeave)

    cleanupFns.push(() => {
      handleLeave()
      element.removeEventListener('pointermove', handleMove)
      element.removeEventListener('pointerleave', handleLeave)
    })
  })
}

function setupMagneticActions() {
  if (!window.matchMedia('(pointer: fine)').matches) {
    return
  }

  document.querySelectorAll<HTMLElement>('.button-primary, .button-secondary').forEach((element) => {
    const handleMove = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect()
      const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5
      const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5

      gsap.to(element, {
        x: offsetX * 10,
        y: offsetY * 8 - 2,
        duration: 0.25,
        ease: 'power2.out',
      })
    }

    const handleLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.35,
        ease: 'power3.out',
      })
    }

    element.addEventListener('pointermove', handleMove)
    element.addEventListener('pointerleave', handleLeave)

    cleanupFns.push(() => {
      handleLeave()
      element.removeEventListener('pointermove', handleMove)
      element.removeEventListener('pointerleave', handleLeave)
    })
  })
}

function setupDepthScenes() {
  if (!window.matchMedia('(pointer: fine)').matches) {
    return
  }

  document.querySelectorAll<HTMLElement>('[data-depth-scene]').forEach((scene) => {
    const layers = Array.from(scene.querySelectorAll<HTMLElement>('[data-depth-layer]'))

    const handleMove = (event: PointerEvent) => {
      const bounds = scene.getBoundingClientRect()
      const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5
      const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5

      gsap.to(scene, {
        rotateY: offsetX * 5,
        rotateX: offsetY * -4,
        transformPerspective: 1800,
        transformOrigin: 'center center',
        duration: 0.45,
        ease: 'power3.out',
      })

      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depthLayer ?? '0.12')
        gsap.to(layer, {
          x: offsetX * 55 * depth,
          y: offsetY * 42 * depth,
          z: 80 * depth,
          rotateY: offsetX * 10 * depth,
          rotateX: offsetY * -8 * depth,
          duration: 0.45,
          ease: 'power3.out',
        })
      })
    }

    const handleLeave = () => {
      gsap.to(scene, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.55,
        ease: 'power3.out',
      })

      layers.forEach((layer) => {
        gsap.to(layer, {
          x: 0,
          y: 0,
          z: 0,
          rotateY: 0,
          rotateX: 0,
          duration: 0.55,
          ease: 'power3.out',
        })
      })
    }

    scene.addEventListener('pointermove', handleMove)
    scene.addEventListener('pointerleave', handleLeave)

    cleanupFns.push(() => {
      handleLeave()
      scene.removeEventListener('pointermove', handleMove)
      scene.removeEventListener('pointerleave', handleLeave)
    })
  })
}

function setupMotion() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  cleanupInteractions()
  resetAnimatedElements()

  if (prefersReducedMotion()) {
    return
  }

  const heroCopy = document.querySelector('[data-hero-copy]')
  const heroVisual = document.querySelector('[data-hero-visual]')
  const heroTitle = document.querySelector('[data-hero-title]')

  if (heroCopy) {
    gsap.from(heroCopy.children, {
      y: 32,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.08,
    })
  }

  if (heroTitle) {
    gsap.from(heroTitle, {
      y: 46,
      opacity: 0,
      letterSpacing: '0.12em',
      duration: 1.1,
      ease: 'power3.out',
      delay: 0.12,
    })
  }

  if (heroVisual) {
    gsap.from(heroVisual, {
      x: 28,
      y: 36,
      scale: 0.97,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.18,
    })

    const heroLayers = heroVisual.querySelectorAll<HTMLElement>('[data-depth-layer]')

    if (heroLayers.length) {
      gsap.from(heroLayers, {
        y: 42,
        x: (_, element) => element.classList.contains('hero-float-card') ? 20 : 0,
        scale: 0.94,
        opacity: 0,
        duration: 0.92,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.26,
      })
    }
  }

  document.querySelectorAll<HTMLElement>('[data-page-hero-copy]').forEach((element) => {
    gsap.from(element.children, {
      x: -18,
      y: 28,
      opacity: 0,
      duration: 0.95,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.05,
    })
  })

  document.querySelectorAll<HTMLElement>('[data-page-hero-card]').forEach((element) => {
    gsap.from(element, {
      x: 28,
      y: 38,
      opacity: 0,
      scale: 0.98,
      duration: 1,
      ease: 'power3.out',
      delay: 0.14,
    })

    const layers = element.querySelectorAll<HTMLElement>('[data-depth-layer]')
    if (layers.length) {
      gsap.from(layers, {
        y: 30,
        x: (_, layer) => layer.classList.contains('hero-float-card') ? 18 : 0,
        opacity: 0,
        scale: 0.96,
        duration: 0.88,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.24,
      })
    }
  })

  document.querySelectorAll<HTMLElement>('[data-command-card]').forEach((element, index) => {
    gsap.from(element, {
      x: index % 2 === 0 ? -26 : 26,
      y: 52,
      rotateX: 9,
      opacity: 0,
      duration: 0.96,
      ease: 'power3.out',
      delay: 0.18 + index * 0.08,
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
      },
    })

    const media = element.querySelector('img')
    if (media) {
      gsap.from(media, {
        scale: 1.12,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
        },
      })
    }
  })

  document.querySelectorAll<HTMLElement>('[data-command-metric]').forEach((element, index) => {
    gsap.from(element, {
      x: -28,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      delay: 0.28 + index * 0.08,
    })
  })

  document.querySelectorAll<HTMLElement>('[data-command-panel]').forEach((element) => {
    gsap.from(element, {
      x: 40,
      opacity: 0,
      duration: 0.95,
      ease: 'power3.out',
      delay: 0.34,
    })
  })

  selectGsapTargets('[data-reveal]').forEach((element) => {
    gsap.from(element, {
      x: element.getBoundingClientRect().left > window.innerWidth / 2 ? 34 : -34,
      y: 28,
      opacity: 0,
      scale: 0.98,
      duration: 0.95,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 87%',
      },
    })
  })

  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
    const children = Array.from(group.children).filter(
      child => !(child instanceof HTMLElement) || !child.hasAttribute('data-aos'),
    )

    if (!children.length) {
      return
    }

    gsap.from(children, {
      x: (index) => index % 2 === 0 ? -24 : 24,
      y: 24,
      opacity: 0,
      duration: 0.92,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
      },
    })
  })

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((element) => {
    const speed = Number(element.dataset.parallaxSpeed ?? '8')

    gsap.fromTo(
      element,
      { yPercent: -speed },
      {
        yPercent: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
  })

  selectGsapTargets('[data-process-card]').forEach((element) => {
    gsap.from(element, {
      x: 24,
      rotateY: -10,
      scale: 0.97,
      opacity: 0,
      duration: 0.84,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
      },
    })
  })

  document.querySelectorAll<HTMLElement>('.panel, .panel-dark, .glass-panel, .project-shard').forEach((element) => {
    const media = element.querySelector('img')
    if (!media) {
      return
    }

    gsap.from(media, {
      scale: 1.08,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
      },
    })
  })

  document.querySelectorAll<HTMLElement>('[data-blueprint-line]').forEach((element) => {
    gsap.fromTo(
      element,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 92%',
        },
      },
    )
  })

  document.querySelectorAll<HTMLElement>('[data-float]').forEach((element, index) => {
    gsap.to(element, {
      y: index % 2 === 0 ? -12 : 12,
      duration: 4 + index * 0.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  })

  setupPointerHighlight('.panel, .panel-dark, .glass-panel, .project-shard, .button-primary, .button-secondary')
  setupMagneticActions()
  setupDepthScenes()
  setupTiltCards()
  animateCounters()
  ScrollTrigger.refresh()
}

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  nuxtApp.hook('app:mounted', () => {
    requestAnimationFrame(() => {
      setupMotion()
    })
  })

  nuxtApp.hook('page:finish', () => {
    requestAnimationFrame(() => {
      setupMotion()
    })
  })
})
