<script setup lang="ts">
import { navigation, contactDetails } from '~/data/site'
</script>

<template>
  <footer class="relative overflow-hidden border-t border-[rgba(3,116,255,0.2)] bg-[var(--rk-bg)] text-[var(--rk-text)]">
    <div class="absolute bottom-0 left-0 font-heading text-[clamp(4rem,18vw,12rem)] font-bold uppercase tracking-[-0.08em] text-white/[0.03]">
      ELITE
    </div>
    <div class="layout-shell relative py-14">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.9fr]">
        <div>
          <p class="eyebrow">RK Elite Construction</p>
          <h2 class="mt-5 max-w-xl font-heading text-3xl font-bold uppercase tracking-[-0.05em] text-[var(--rk-primary)]">
            Building homes, offices, and industries with quality and trust.
          </h2>
          <p class="mt-4 max-w-xl text-sm leading-8 text-[var(--rk-text-muted)]">
            Reliable residential, commercial, industrial, and turnkey construction services in Chennai with professional execution and complete transparency at every stage.
          </p>
        </div>

        <div>
          <p class="technical-meta">Directory</p>
          <div class="mt-5 flex flex-col gap-3">
            <NuxtLink
              v-for="item in navigation"
              :key="item.to"
              :to="item.to"
              class="font-heading text-[0.74rem] uppercase tracking-[0.18em] text-[var(--rk-text-muted)] transition-colors hover:text-[var(--rk-tertiary)]"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <div>
          <p class="technical-meta">Contact Node</p>
          <div class="mt-5 space-y-3 text-sm leading-7 text-[var(--rk-text-muted)]">
            <a :href="`tel:${contactDetails.phone}`">{{ contactDetails.phone }}</a>
            <p>{{ contactDetails.address }}</p>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-3 border-t border-[rgba(3,116,255,0.16)] pt-6 text-[0.72rem] font-heading uppercase tracking-[0.18em] text-white/34 md:flex-row md:items-center md:justify-between">
        <p>© {{ new Date().getFullYear() }} RK Elite Construction</p>
        <p>Chennai structural build command</p>
      </div>
    </div>
  </footer>
</template>
