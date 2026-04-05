<script setup lang="ts">
import { navigation } from '~/data/site'

const menuOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  menuOpen.value = false
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-4 pt-4">
    <div class="layout-shell">
      <div class="flex items-center justify-between border border-[rgba(175,198,255,0.08)] bg-[rgba(6,20,36,0.82)] px-4 py-3 backdrop-blur-xl command-shadow">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center bg-[linear-gradient(135deg,rgba(175,198,255,0.18),rgba(0,218,248,0.08))] text-[var(--rk-tertiary)] shadow-[inset_0_0_0_1px_rgba(0,218,248,0.22)]">
            <Icon name="lucide:building-2" size="20" />
          </div>
          <div>
            <p class="font-heading text-sm font-bold tracking-[0.26em] text-[var(--rk-primary)]">RK ELITE</p>
            <p class="font-heading text-[0.68rem] uppercase tracking-[0.28em] text-white/34">Construction Command</p>
          </div>
        </NuxtLink>

        <nav class="hidden items-center gap-7 lg:flex">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="nav-link text-[0.72rem] font-medium"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="hidden lg:block">
          <NuxtLink to="/contact" class="button-secondary text-[0.72rem]">
            Get Free Consultation
          </NuxtLink>
        </div>

        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center border border-[rgba(175,198,255,0.12)] text-[var(--rk-primary)] lg:hidden"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
        >
          <Icon :name="menuOpen ? 'lucide:x' : 'lucide:menu'" size="20" />
        </button>
      </div>

      <div
        v-if="menuOpen"
        class="mt-3 border border-[rgba(175,198,255,0.08)] bg-[rgba(6,20,36,0.96)] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl lg:hidden"
      >
        <nav class="flex flex-col gap-4">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="font-heading text-[0.74rem] uppercase tracking-[0.2em] text-[var(--rk-primary)]"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
        <NuxtLink to="/contact" class="button-primary mt-6 w-full text-[0.72rem]">
          Get Free Consultation
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
