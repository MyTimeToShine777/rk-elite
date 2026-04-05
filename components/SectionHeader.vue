<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}>()
</script>

<template>
  <div class="max-w-3xl">
    <p class="eyebrow" :class="light ? 'text-[var(--rk-tertiary)] before:bg-[linear-gradient(90deg,var(--rk-tertiary),transparent)]' : ''">
      {{ eyebrow }}
    </p>
    <h2 class="section-title mt-5" :class="light ? 'text-[var(--rk-primary)]' : 'text-[var(--rk-primary)]'">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="section-copy mt-5"
      :class="light ? 'text-[var(--rk-text-muted)]' : 'text-[var(--rk-text-muted)]'"
    >
      {{ description }}
    </p>
  </div>
</template>
